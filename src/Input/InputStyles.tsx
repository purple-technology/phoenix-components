import FloatingLabel from 'floating-label-react'
import { IoIosCheckmark } from 'react-icons/io'
import styled, { DefaultTheme } from 'styled-components'

import { determineTheme } from '../helpers'

interface InputWrapProps {
  focusColor: string
  background?: string
  error?: string | boolean
  success?: boolean
  focused?: boolean
  RTL?: boolean
}

interface CheckMarkWrapProps {
  RTL?: boolean
}

interface ContentRightProps {
  RTL?: boolean
}

const getBorder = (
  color: string,
  error?: string | boolean,
  success?: boolean,
  focused?: boolean,
  theme?: DefaultTheme
) => {
  if (error) {
    return `1px solid ${determineTheme(theme).colors.error}`
  }

  if (success) {
    return `1px solid ${determineTheme(theme).colors.success}`
  }

  if (focused) {
    if (color) return `1px solid ${color}`
    return `1px solid ${determineTheme(theme).colors.primary}`
  }

  return `1px solid ${determineTheme(theme).colors.grey}`
}

const getColor = (
  error?: string | boolean,
  success?: boolean,
  theme?: DefaultTheme
) => {
  if (error) {
    return determineTheme(theme).colors.error
  }

  if (success) {
    return determineTheme(theme).colors.success
  }

  return 'rgba(0, 0, 0, 0.7)'
}

export const ContentRight = styled.div<ContentRightProps>`
  position: absolute;
  left: ${({ RTL }) => (RTL ? '15px' : 'auto')};
  right: ${({ RTL }) => (RTL ? 'auto' : '15px')};
  top: 23px;
`

export const Wrapper = styled.div`
  font-family: ${({ theme }) => determineTheme(theme).font};
  position: relative;
  display: block;
  width: 100%;
`

export const CheckmarkWrap = styled.div<CheckMarkWrapProps>`
  position: absolute;
  left: ${({ RTL }) => (RTL ? '10px' : 'auto')};
  right: ${({ RTL }) => (RTL ? 'auto' : '10px')};
  top: 15px;
`

interface StyledFloatingLabelProps {
  error: string | boolean
  success: boolean
  background: string
  theme: DefaultTheme
}

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
      error
        ? determineTheme(theme).colors.error
        : determineTheme(theme).colors.primary};
  }

  input:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    right: ${({ RTL }) => (RTL ? '0' : '100%')};
    color: ${({ error, success, theme }: StyledFloatingLabelProps) =>
      getColor(error, success, theme)};
  }

  input:focus:not(:focus-visible) {
    outline: none;
  }

  span {
    box-sizing: border-box;
    font-size: 1rem;
    right: ${({ RTL }) => (RTL ? '0' : 'auto')};
    left: ${({ RTL }) => (RTL ? 'auto' : '0')};
    padding: 14px 0 13px 0;
    min-width: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: font-size 200ms, padding 200ms;
    z-index: 1;
  }
`

export const Error = styled.div`
  color: ${({ theme }) => determineTheme(theme).colors.error};
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
  background: ${({ theme }) => determineTheme(theme).colors.white};
  padding: 8px 10px 4px;
  border: ${({ focusColor, error, success, focused, theme }) =>
    getBorder(focusColor, error, success, focused, theme)};
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

export const SuccessCheckmark = styled(IoIosCheckmark)`
  color: ${({ theme }) => determineTheme(theme).colors.success};
`
