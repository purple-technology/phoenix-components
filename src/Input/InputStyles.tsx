import FloatingLabel from 'floating-label-react'
import styled from 'styled-components'

interface InputWrapProps {
  background?: string
  error?: string | boolean
  success?: boolean
  focused?: boolean
}

const getBorder = (
  error?: string | boolean,
  success?: boolean,
  focused?: boolean
) => {
  if (error) {
    return '1px solid rgba(228, 23, 23, 0.75)'
  }

  if (success) {
    return '1px solid rgba(23, 150, 23, 0.7)'
  }

  if (focused) {
    return '1px solid #562878'
  }

  return '1px solid #dedede'
}

const getColor = (error?: string | boolean, success?: boolean) => {
  if (error) {
    return 'rgba(228, 23, 23, 0.75)'
  }

  if (success) {
    return 'rgba(23, 150, 23, 0.7)'
  }

  return 'rgba(0, 0, 0, 0.7)'
}

export const ContentRight = styled.div`
  position: absolute;
  right: 15px;
  top: 23px;
`

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`

export const CheckmarkWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
`
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
    background: ${({ background }: any) =>
      background ? background : 'transparent'};
    box-sizing: border-box;
    font-size: 15px;
    padding: 16px 0 8px 0;
    outline: none;
  }

  input:focus {
    border-color: ${({ error }: any) =>
      error ? 'rgba(228, 23, 23, 0.75)' : '#562878'};
  }

  input:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    color: ${({ error, success }: any) => getColor(error, success)};
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
`

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin: 2px 0 0 5px;
`

export const HelperText = styled.div<any>`
  color: rgba(0, 0, 0, 0.5);
  padding: 5px 0;
  font-size: 12px;
  margin: 2px 0 0 5px;
  opacity: ${({ focused }: any) => (focused ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  background: '#fff';
  padding: 8px 10px 4px;
  border: ${({ error, success, focused }: InputWrapProps) =>
    getBorder(error, success, focused)};
  border-radius: 3px;

  ${StyledFloatingLabel} {
  }
`
