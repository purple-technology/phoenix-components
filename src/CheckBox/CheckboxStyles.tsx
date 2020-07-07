import styled, { DefaultTheme } from 'styled-components'

import { determineTheme } from '../helpers'

const getColor = (color: string, externalTheme: DefaultTheme) => {
  if (color) return color
  return determineTheme(externalTheme).colors.primary
}

export const Checkbox = styled.div`
  font-family: ${({ theme }) => determineTheme(theme).font};
  font-size: 14px;
  min-height: 18px;

  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
  }

  label {
    position: relative;
    display: inline-block;
    padding-top: 4px;
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    padding-left: 28px;
    cursor: pointer;
  }

  label:before,
  label:after {
    position: absolute;
    content: '';

    /*Needed for the line-height to take effect*/
    display: inline-block;
  }

  /*Outer box of the fake checkbox*/
  label:before {
    height: 16px;
    width: 16px;
    border: 1px solid #dedede;
    background: ${({ theme }) => determineTheme(theme).colors.white};
    left: 0px;
    border-radius: 1px;

    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
        *to vertically center it.
        */
    top: 3px;
  }

  /*Checkmark of the fake checkbox*/
  label:after {
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;

    transform: rotate(-45deg);

    left: 4px;
    top: 7px;
  }

  /*Hide the checkmark by default*/
  input[type='checkbox'] + label:after {
    content: none;
  }

  /*Unhide on the checked state*/
  input[type='checkbox']:checked + label:after {
    content: '';
    color: ${({ theme }) => determineTheme(theme).colors.white};
  }

  /*Adding focus styles on the outer-box of the fake checkbox*/
  input[type='checkbox']:focus + label:before {
    outline: none;
  }
  /*Adding focus styles on the outer-box of the fake checkbox*/
  input[type='checkbox']:checked + label:before {
    border: 1px solid ${({ color, theme }) => getColor(color, theme)};
    background: ${({ color, theme }) => getColor(color, theme)};
  }
`
