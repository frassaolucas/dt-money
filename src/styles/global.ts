import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 87.5%;
    
    @media (min-width: 45em) {
      font-size: 93.75%;
    }

    @media (min-width: 67.5em) {
      font-size: 100%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    position: relative;

    max-width: 36rem;
    width: 100%;

    padding: 3rem;

    border-radius: 0.25rem;

    background: var(--background);
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;

    background: transparent;

    font-size: 0;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;