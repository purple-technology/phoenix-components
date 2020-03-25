import styled from 'styled-components'
import Select from 'react-select'

interface StyledControlProps {
  error?: string | boolean
  success?: boolean
  placeholderUp?: boolean
}

interface PlaceholderTextProps {
  placeholderUp?: boolean
  success?: boolean
  error?: string | boolean
}

export const CheckmarkWrap = styled.div`
  position: absolute;
  right: 40px;
  top: 15px;
`

const getBorder = (error?: string | boolean, success?: boolean) => {
  if (error) {
    return '1px solid rgba(228, 23, 23, 0.75)'
  }

  if (success) {
    return '1px solid rgba(23, 150, 23, 0.7)'
  }

  return '1px solid #dedede'
}

const getBorderHover = (error?: string | boolean, success?: boolean) => {
  if (error) {
    return '1px solid rgba(228, 23, 23, 0.75)'
  }

  if (success) {
    return '1px solid rgba(23, 150, 23, 0.7)'
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

export const PlaceholderText = styled.span<PlaceholderTextProps>`
  position: absolute;
  transition: all 0.25s;
  pointer-events: none;
  top: ${({ placeholderUp }: PlaceholderTextProps) =>
    placeholderUp ? '9px' : '22px'};
  left: 15px;
  font-size: ${({ placeholderUp }: PlaceholderTextProps) =>
    placeholderUp ? '12px' : '15px'};
  color: ${({ placeholderUp, error, success }: PlaceholderTextProps) =>
    placeholderUp ? getColor(error, success) : 'inherit'};
`

export const SelectContainer = styled.div`
  font-family: 'Roboto', sans-serif;
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
    border: ${({ error, success }) => getBorder(error, success)};
    border-radius: 3px;
    box-sizing: content-box;
    height: 47px !important;
    font-size: 15px;
    box-shadow: none !important;

    &:hover {
      border: ${({ error, success }) => getBorderHover(error, success)};
    }
  }
`

export const MobileStyledSelect = styled.select<StyledControlProps>`
  border: ${({ error, success }) => getBorder(error, success)};
  padding: 11px 5px 4px 13px;
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

export const Error = styled.div<any>`
  color: rgba(204, 0, 0, 0.82);
  position: ${({ disableAbsolutePositionError }: any) =>
    disableAbsolutePositionError ? 'relative' : 'absolute'}
  padding: 5px 0;
  font-size: 12px;
`

export const StyledDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 10px 2px 5px;
  line-height: 1.46em;
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
`
