import FloatingLabel from 'floating-label-react'
import styled, { DefaultTheme } from 'styled-components'

const getBorder = (
  theme: DefaultTheme,
  error?: boolean | string,
  border?: boolean
) => {
  if (border && error) {
    return `1px solid ${theme.colors.error}`
  }

  if (border) {
    return `1px solid ${theme.colors.grey}`
  }

  return 'none'
}

const getBottomBorder = (
  theme: DefaultTheme,
  error?: string | boolean,
  background?: string,
  withBorder?: boolean
) => {
  if (background) {
    return 'none'
  }

  if (withBorder) {
    return 'none'
  }

  if (error) {
    return theme.colors.error
  }

  return theme.colors.black
}

interface TextAreaWrapProps {
  withBorder: boolean
  error: boolean | string
}

export const TextAreaWrap = styled.div<TextAreaWrapProps>`
  position: relative;
  background: ${({ withBorder, theme }) =>
    withBorder ? theme.colors.white : 'transparent'};
  padding: ${({ withBorder }) => (withBorder ? '8px 10px 4px' : '')};
  border: ${({ withBorder, error, theme }) =>
    getBorder(theme, error, withBorder)};
  border-radius: ${({ withBorder }) => (withBorder ? '3px' : '0px')};
`

export const ContentRight = styled.div`
  position: absolute;
  right: 15px;
  top: 23px;
`

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.font};
`

interface StyledFloatingLabelProps {
  error: string | boolean
  background: string
  withborder: boolean
  primary: string
  errorColor: string
  theme: DefaultTheme
}

// @ts-ignore
export const StyledFloatingLabel = styled<any>(FloatingLabel)`
  font-family: ${({ theme }: StyledFloatingLabelProps) => theme.font};
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding-top: 15px;
  position: relative;

  & + .floating-label {
    margin-top: 0.5em;
    position: relative;
  }

  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid
      ${({ error, background, withborder, theme }: StyledFloatingLabelProps) =>
        getBottomBorder(theme, error, background, withborder)};
    background: ${({ background }: StyledFloatingLabelProps) =>
      background ? background : 'transparent'};
    box-sizing: border-box;
    font-size: 15px;
    font-family: ${({ theme }: StyledFloatingLabelProps) => theme.font};
    padding: 16px 0 8px 0;
    outline: none;
  }

  textarea:focus {
    border-color: ${({
      error,
      primary,
      errorColor
    }: StyledFloatingLabelProps) => (error ? errorColor : primary)};
  }

  textarea:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    color: ${({ error }: StyledFloatingLabelProps) =>
      error ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  }

  textarea:focus:not(:focus-visible) {
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
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
`
