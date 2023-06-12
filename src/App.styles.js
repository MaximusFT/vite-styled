import styled, { css } from 'styled-components';

const defButton = css`
  border-radius: 3px;
  color: ${(props) => props.$color};
  border: 1px solid var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;
`;

export const Button = styled.a`
  background: black;
  ${defButton}

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.$primary &&
    css`
      background: var(--accent-color);
      color: black;
    `}
`;

export const ButtonAlt = styled.a`
  background: blue;
  ${defButton}
  color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.$primary &&
    css`
      background: var(--accent-color);
      color: black;
    `}
`;
