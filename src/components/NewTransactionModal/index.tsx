import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

Modal.setAppElement('#root'); // isso inseri aria-hidden na div#root quando modal estiver aberto (acessibilidade)

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
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
          />
          <input
            type="number"
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button type="button">
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    </Container>
  )
}