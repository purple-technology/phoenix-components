import FloatingLabel from 'floating-label-react'
import styled from 'styled-components'

const getBorder = (error?: boolean | string, border?: boolean) => {
  if (error) {
    return '1px solid red'
  }

  if (border) {
    return '1px solid #dedede'
  }

  return 'none'
}

const getBottomBorder = (
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
    return 'red'
  }

  return 'black'
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
  border: ${({ withBorder, error }) => getBorder(error, withBorder)};
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

// @ts-ignore
export const StyledFloatingLabel = styled<any>(FloatingLabel)`
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
      ${({ error, background, withborder }) =>
        getBottomBorder(error, background, withborder)};
    background: ${({ background }) =>
      background ? background : 'transparent'};
    box-sizing: border-box;
    font-size: 15px;
    padding: 16px 0 8px 0;
    outline: none;
  }

  textarea:focus {
    border-color: ${({ error, primary, errorColor }) =>
      error ? errorColor : primary};
  }

  textarea:focus + span,
  &.floating span {
    font-size: 12px;
    padding: 0;
    color: ${({ error }) =>
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
