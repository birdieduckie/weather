import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  margin: 5px 0 0 0;
  color: #303030;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  cursor: pointer;

  ${(p) =>
    p.type === 'primary' &&
    css`
      background: #c6b5a7;
      &:hover {
        background: #b68772;
      }
      &:active {
        background: #b68772;
        color: black;
      }
    `};

  ${(p) =>
    p.type === 'danger' &&
    css`
      background: #f9674e;
      &:hover {
        background: #f45034;
      }
      &:active {
        background: #f45034;
        color: #f9a799;
      }
    `};
`
