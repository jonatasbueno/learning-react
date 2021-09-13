import styled from "styled-components";
import { darken, transparentize } from "polished"; // lib com n funções de escurecer e clarear cores

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input { // aplica estilo a todo input que possuir outro input anteriormente
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0%.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.2s; // aplicando filter da linha 42 em 0.2s segundos (suavisando aplicação)
    &:hover {
      filter: brightness(0.9); // diminuir a iluminosidade em 10%
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr; // divide a grid em duas colunas
  gap: 0.5rem; // espaçamento entre as duas colunas
`;

const colors = {
  red: '#e52e4d',
  green: '#33cc95'
}
interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

export const RadioBox = styled.button<RadioBoxProps>` // pode se criar propriedade para component atraves de interface
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${props => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  }; // toda função em propriedade recebe props
  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;