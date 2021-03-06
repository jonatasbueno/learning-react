import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

Modal.setAppElement('#root'); // isso inseri aria-hidden na div#root quando modal estiver aberto (acessibilidade)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ amount, category, title, type });

    onRequestClose();

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleCreateNewTransaction}>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <h2>Cadastrar Transação </h2>

          <input
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'} // propriedade criada por meio do style-component
              activeColor="red" // propriedade criada por meio do style-component
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    </Container>
  )
}