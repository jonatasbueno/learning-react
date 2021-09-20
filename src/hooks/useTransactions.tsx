import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../servers/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>; // cria um tipo omitindo tais propriedades
/**
 * cria tipo com base em Transaction selecionando as propriedade descritas
 */
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionContextProps {
  children: ReactNode // children deve ser do tipo 'react node' que permite qualquer nó react válido
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

/**
 * A ideia aqui foi retornar um Context.Provider já vinculado com um estado, que por sua vez é alterado com o retorno 
 * da resquest de useEffect.
 * Com isso isolamos toda complexidade do estado da transaction que irá refletir a cada mudança para os nós filhos que 
 * consumirem esse contexto
 */
export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transaction',
      { ...transactionInput, createAt: new Date() }
    );
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
/**
 * Aqui retornamos todo o Context como hook, encapsulando o useContext
 */
export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}