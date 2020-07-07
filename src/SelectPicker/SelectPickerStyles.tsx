import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'
import { determineTheme } from '../helpers'

export const SelectPickerWrapper = styled.div`
  font-family: ${({ theme }) => determineTheme(theme).font};
`

interface SelectWrapperProps {
  optionsLength: number
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
  display: grid;
  grid-template-columns: ${({ optionsLength }) =>
    `repeat(${optionsLength}, minmax(100px, 200px))`};
  grid-column-gap: 25px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    max-width: 100%;
  }
`

export const OptionDecription = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 6px;
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 80%;
    justify-content: center;
  }
`

interface SingleCardProps {
  withImage: string
  multiSelect: boolean
  checked: boolean
  borderColor: string
}

export const SingleCard = styled.div<SingleCardProps>`
  display: flex;
  position: relative;
  min-height: ${({ withImage }) => (withImage ? '80px' : 'auto')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  text-align: center;
  border: 1px solid;
  background: ${({ theme }) => determineTheme(theme).colors.white};
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  border-color: ${({ checked, borderColor, theme }) =>
    checked
      ? borderColor
        ? borderColor
        : determineTheme(theme).colors.primary
      : 'rgba(95,95,95,0.3)'};
  box-shadow: ${({ checked }) =>
    checked ? ' 0px 0px 11px 2px rgba(82, 41, 116, 0.1);' : 'none'};
  font-weight: 500;
  border-radius: 4px;
  transition: border 0.3s;
  cursor: ${({ checked, multiSelect }) =>
    checked && !multiSelect ? 'default' : 'pointer'};
  user-select: none;

  &:hover {
    border-color: ${({ borderColor, theme }) =>
      borderColor ? borderColor : determineTheme(theme).colors.primary};
  }

  @media (max-width: 768px) {
    margin: 0 1.3rem;
    padding: 7px 0;
    min-height: 60px;
  }
`

interface CardImageProps {
  imageSize: string
}

export const CardImage = styled.img<CardImageProps>`
  max-width: ${({ imageSize }) => imageSize};
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin: 0 10px 0 0;
    max-width: 30px;
  }
`

export const PickerLabel = styled.label`
  display: block;
  margin: 0 auto 30px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`

interface CheckMarkProps {
  borderColor: string
}

export const CheckMark = styled.div<CheckMarkProps>`
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${({ borderColor, theme }) =>
    borderColor ? borderColor : determineTheme(theme).colors.primary};
  border-radius: 2px;
  top: -15px;
  right: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Error = styled.div`
  color: ${({ theme }) => determineTheme(theme).colors.error};
  padding: 5px 0;
  font-size: 13px;
  margin-top: 5px;
`

export const WhiteCheck = styled(FaCheck)`
  color: ${({ theme }) => determineTheme(theme).colors.white};
`
