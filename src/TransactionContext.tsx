import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./servers/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createAt: string
}

interface TransactionContextProps {
  children: ReactNode // children deve ser do tipo 'react node' que permite qualquer nó react válido
}

export const TransactionContext = createContext<Transaction[]>([]);

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

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}