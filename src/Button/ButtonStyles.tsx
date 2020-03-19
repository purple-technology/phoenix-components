import styled from 'styled-components'

export const ButtonWrapper = styled.div<any>`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;

  button {
    color: #fff;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#562878'};
    box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.16);
    height: ${({ size }) => (size == 'big' ? '75px' : '50px')};
    border-radius: 4px;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    margin: 0 auto;
    padding: 9px 12px;
  }

  button:hover {
    background: #44215f;
  }

  button:active {
    transform: translateY(1px);
    transform: ${({ animated }) =>
      animated ? 'translateY(1px)' : 'translateY(0)'};
  }

  button:disabled,
  button[disabled] {
    background-color: gray;
  }
`
