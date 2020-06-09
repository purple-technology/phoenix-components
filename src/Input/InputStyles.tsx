import FloatingLabel from 'floating-label-react'
import styled, { DefaultTheme } from 'styled-components'

interface InputWrapProps {
  focusColor: string
  background?: string
  error?: string | boolean
  success?: boolean
  focused?: boolean
}

const getBorder = (
  color: string,
  error?: string | boolean,
  errorColor?: string,
  success?: boolean,
  successColor?: string,
  focused?: boolean
) => {
  if (error) {
    return `1px solid ${errorColor}`
  }

  if (success) {
    return `1px solid ${successColor}`
  }

  if (focused) {
    return `1px solid ${color}`
  }

  return '1px solid #dedede'
}

const getColor = (
  error?: string | boolean,
  errorColor?: string,
  success?: boolean,
  successColor?: string
) => {
  if (error) {
    return errorColor
  }

  if (success) {
    return successColor
  }

  return 'rgba(0, 0, 0, 0.7)'
}

export const ContentRight = styled.div`
  position: absolute;
  right: 15px;
  top: 23px;
`

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.font};
  position: relative;
  display: block;
  width: 100%;
`

export const CheckmarkWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
`

interface StyledFloatingLabelProps {
  error: string | boolean
  success: boolean
  background: string
  theme: DefaultTheme
}

// @ts-ignore
export const StyledFloatingLabel = styled<StyledFloatingLabelProps>(
  FloatingLabel
)`
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
    background: ${({ background }: StyledFloatingLabelProps) => background};
    box-sizing: border-box;
    font-size: 15px;
    padding: 16px 0 8px 0;
    outline: none;
    box-shadow: none;
  }

  input:focus {
    border-color: ${({ error, theme }: StyledFloatingLabelProps) =>
      error ? theme.colors.error : theme.colors.primary};
  }

  input:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    color: ${({ error, success, theme }: StyledFloatingLabelProps) =>
      getColor(error, theme.colors.error, success, theme.colors.success)};
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
  color: ${({ theme }) => theme.colors.error};
  position: relative;
  padding: 5px 0;
  font-size: 12px;
`

interface HelperTextProps {
  focused: boolean
}

export const HelperText = styled.div<HelperTextProps>`
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 5px 0;
  font-size: 12px;
  opacity: ${({ focused }) => (focused ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  padding: 8px 10px 4px;
  border: ${({ focusColor, error, success, focused, theme }) =>
    getBorder(
      focusColor,
      error,
      theme.colors.error,
      success,
      theme.colors.success,
      focused
    )};
  border-radius: 3px;

  ${StyledFloatingLabel} {
  }
`

interface StyledDescriptionProps {
  descriptionFontSize: string
}

export const StyledDescription = styled.p<StyledDescriptionProps>`
  margin: 0;
  padding: '10px 2px 5px';
  line-height: 1.46em;
  color: rgba(0, 0, 0, 0.7);
  font-size: ${({ descriptionFontSize }) => descriptionFontSize};
`
