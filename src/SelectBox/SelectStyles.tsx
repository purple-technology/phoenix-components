import styled, { DefaultTheme } from 'styled-components'
import { IoIosCheckmark } from 'react-icons/io'
import Select from 'react-select'
import { determineTheme } from '../helpers'

interface StyledControlProps {
  error?: string | boolean
  success?: boolean
  placeholderUp?: boolean
}

interface PlaceholderTextProps {
  placeholderUp?: boolean
  success?: boolean
  error?: string | boolean
  RTL?: boolean
}

interface CheckmarkWrapProps {
  RTL?: boolean
}

export const CheckmarkWrap = styled.div<CheckmarkWrapProps>`
  position: absolute;
  right: ${({ RTL }) => (RTL ? 'auto' : '40px')};
  left: ${({ RTL }) => (RTL ? '40px' : 'auto')};
  top: 15px;
`

const getBorder = (
  error?: string | boolean,
  success?: boolean,
  theme?: DefaultTheme
) => {
  if (error) {
    return `1px solid ${determineTheme(theme).colors.error}`
  }

  if (success) {
    return `1px solid ${determineTheme(theme).colors.success}`
  }

  return `1px solid ${determineTheme(theme).colors.grey}`
}

const getBorderHover = (
  error?: string | boolean,
  success?: boolean,
  theme?: DefaultTheme
) => {
  if (error) {
    return `1px solid ${determineTheme(theme).colors.error}`
  }

  if (success) {
    return `1px solid ${determineTheme(theme).colors.success}`
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

export const PlaceholderText = styled.span<PlaceholderTextProps>`
  position: absolute;
  transition: all 0.25s;
  pointer-events: none;
  top: ${({ placeholderUp }: PlaceholderTextProps) =>
    placeholderUp ? '9px' : '22px'};
  left: ${({ RTL }) => (RTL ? 'auto' : '15px')};
  right: ${({ RTL }) => (RTL ? '15px' : 'auto')};

  font-size: ${({ placeholderUp }: PlaceholderTextProps) =>
    placeholderUp ? '0.8rem' : '1rem'};
  color: ${({ placeholderUp, error, success, theme }) =>
    placeholderUp ? getColor(error, success, theme) : 'inherit'};
`

export const SelectContainer = styled.div`
  font-family: ${({ theme }) => determineTheme(theme).font};
  position: relative;
`

export const MobileSelectWrap = styled.div`
  position: relative;
`

export const NoResults = styled.div`
  padding: 6px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`

export const StyledSelect = styled(Select)`
  width: 100%;
`

export const StyledControl = styled.div<StyledControlProps>`
  & > div {
    padding: 12px 4px 0px;
    border: ${({ error, success, theme }) => getBorder(error, success, theme)};
    border-radius: 3px;
    box-sizing: content-box;
    height: 47px !important;
    font-size: 15px;
    box-shadow: none !important;

    &:hover {
      border: ${({ error, success, theme }) =>
        getBorderHover(error, success, theme)};
    }
  }
`

export const MobileStyledSelect = styled.select<StyledControlProps>`
  border: ${({ error, success, theme }) => getBorder(error, success, theme)};
  padding: 11px 13px 4px 13px;
  border-radius: 3px;
  box-sizing: content-box;
  height: 60px !important;
  font-size: 15px;
  box-shadow: none !important;
  max-width: 100%;
  background: none;
  box-sizing: border-box;
  box-shadow: none;
  outline: none !important;
  display: block;
  width: 100%;
`

export const StyledIndicatorContainer = styled.div`
  height: 55px;
`

export const Error = styled.div`
  color: ${({ theme }) => determineTheme(theme).colors.error};
  position: relative;
  padding: 5px 0;
  font-size: 12px;
`

export const StyledDescription = styled.p`
  font-family: ${({ theme }) => determineTheme(theme).font};
  margin: 0;
  padding: 10px 2px 5px;
  line-height: 1.46em;
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
`

export const SuccessCheckmark = styled(IoIosCheckmark)`
  color: ${({ theme }) => determineTheme(theme).colors.success};
`
