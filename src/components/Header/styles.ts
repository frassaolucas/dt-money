import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;

    padding: 0 2rem;

    border-radius: 0.25rem;
    border: 0;

    background: var(--blue-light);
    color: #FFFFFF;

    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;