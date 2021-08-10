import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;

    color: var(--text-title);

    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;

    background: #E7E9EE;

    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;

    margin-top: 1.5rem;
    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 0;
    
    background: var(--green);
    color: #FFFFFF;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  border: 1px solid #D7D7D7;

  background: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')}
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    display: inline-block;

    margin-left: 1rem;

    color: var(--text-title);

    font-size: 1rem;
  }
`;