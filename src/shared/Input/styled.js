import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 90%;
  padding: 12px 16px;
  font-size: 15px;
  background: #ffffff;
  border: 2px solid #dedee3;
  border-radius: 4px;
  color: #0a0d1f;
  font-family: 'Lato', sans-serif;
  &:focus {
    outline: none;
    border: 2px solid #b68772;
    color: #0a0d1f;
  }
  &::placeholder {
    color: #dedee3;
  }
`
