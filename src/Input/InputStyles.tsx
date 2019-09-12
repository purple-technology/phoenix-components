import FloatingLabel from "floating-label-react";
import styled from "styled-components";

const getBorder = (error?: string, border?: string) => {
  if (error) {
    return "1px solid red"
  }

  if (border) {
    return "1px solid #dedede"
  }

  return "none"

}

const getBottomBorder = (error?: string, background?: string, withBorder?: boolean) => {
  if (background) {
    return "none"
  }

  if (withBorder) {
    return "none"
  }

  if (error) {
    return "red"
  }

  return "black"
}

export const InputWrap = styled.div<any>`
  background: ${({ withBorder }: any) => withBorder ? "#fff" : "transparent"};
  padding: ${({ withBorder }: any) => withBorder ? "8px 10px 4px" : ""};
  border: ${({ withBorder, error }: any) => getBorder(error, withBorder)};
  border-radius: ${({ withBorder }: any) => withBorder ? "3px" : "0px"};
`;

// @ts-ignore
export const StyledFloatingLabel = styled<any>(FloatingLabel)`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding-top: 5px;
  position: relative;

  & + .floating-label {
    margin-top: 0.5em;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ error, background, withBorder }: any) => getBottomBorder(error, background, withBorder)};
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

