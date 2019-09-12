import styled from "styled-components";

export const InputWrap = styled.div<any>`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background: ${({ background }: any) => background ? background : "transparent"};
  padding: ${({ background }: any) => background ? "8px 10px 4px" : ""};
  border-radius: ${({ border, background }: any) => border || background ? "3px" : "0px"};
  z-index: 999;

  .react-select__control {
      height: 50px;
      border-radius: 3px;
      border-color: ${({ error }: any) => error ? "red" : "#dedede"};
  }
`;

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
`;

