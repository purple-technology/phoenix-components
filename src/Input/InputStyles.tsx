import FloatingLabel from "floating-label-react";
import styled from "styled-components";

interface InputWrapProps {
  background?: string
  bordered?: boolean
  error?: string | boolean
}

const getBorder = (error?: string | boolean, border?: boolean) => {
  if (error) {
    return "1px solid red"
  }

  if (border) {
    return "1px solid #dedede"
  }

  return "none"

}

const getBottomBorder = (error?: string, background?: string, bordered?: boolean) => {
  if (background) {
    return "none"
  }

  if (bordered) {
    return "none"
  }

  if (error) {
    return "red"
  }

  return "black"
}

export const ContentRight = styled.div`
    position: absolute;
    right: 15px;
    top: 23px;
`;

export const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
`;

// @ts-ignore
export const StyledFloatingLabel = styled<any>(FloatingLabel)`
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding-top: 5px;
  position: relative;

  & + .floating-label {
    margin-top: 0.5em;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    background: ${({ background }: any) => background ? background : "transparent"};
    box-sizing: border-box;
    font-size: 15px;
    padding: 16px 0 8px 0;
    outline: none;
  }

  input:focus {
    border-color: ${({ error }: any) => error ? "red" : "#562878"};
  }

  input:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    color: ${({ error }: any) => error ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.6)"};
  }

  input:focus:not(:focus-visible) {
    outline: none;
  }

  span {
    box-sizing: border-box;
    font-size: 1rem;
    left: 0;
    padding: 14px 0 13px 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: font-size 200ms, padding 200ms;
    z-index: 1;
  }
`;

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
`;

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  background: ${({ bordered }: InputWrapProps) => bordered ? "#fff" : "transparent"};
  padding: ${({ bordered }: InputWrapProps) => bordered ? "8px 10px 4px" : ""};
  border: ${({ bordered, error }: InputWrapProps) => getBorder(error, bordered)};
  border-radius: ${({ bordered }: InputWrapProps) => bordered ? "3px" : "0px"};

  ${StyledFloatingLabel}{
    input {
      border-bottom: 1px solid ${({ error, background, bordered }: any) => getBottomBorder(error, background, bordered)};
    }
  }
`;

