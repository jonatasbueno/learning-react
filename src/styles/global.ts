import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4D;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /**
    Razão para diminuir a font
    - é ideal que conforme o display seja menor o font diminua de tamanho
    - utilzando REM, que representa o tamanho do font-size (1rem = font-size = 16px) para definir tamanhos do layout
    - utilizando percentual para reflitar alterações realizadas diretamente no browser ou SO (coisa que não ocorreria se
      fixado com px)
  */
  html {
    // font-size ideal para desktop (padrão): 16px
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px é o resultado
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px é o resultado
    }
  }

  body {
    background: var(--background);
    -webkit-font-smooth: antialiased;
  }

  body, input, textarea, button { // input, textarea e button possui fontes independentes, por isso da alteração
    font-family: 'Poppins', sans-serif;
    font-weight: 400; // por default o browser na maioria das vezes traz tamanho 500, resetamos para 400
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%; // se a tela ficar com menos de 576px ele ocupado ela toda
    max-width: 576px; // caso ele tenha mais que 576 ela fixa a largura em 576 px
    background: var(--background);
    padding: 3rem;
    position: relative; // para poder posicionar itens dentro do modal de forma absoluta
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`