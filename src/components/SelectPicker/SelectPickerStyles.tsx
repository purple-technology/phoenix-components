import { FaCheck } from 'react-icons/fa'
import styled, { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledCheckbox } from '../Checkbox/CheckboxStyles'

interface WrapperProps {
	optionsLength: number
}

export const Wrapper = styled.div<WrapperProps>`
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

interface OptionDescriptionProps {
	colorTheme: ColorTheme
	checked: boolean
}

export const OptionDescription = styled.div<OptionDescriptionProps>`
	font-size: 12px;
	color: ${({ colorTheme, checked, theme }) =>
		checked ? theme.colors[colorTheme].dark : theme.colors.text};
	margin-top: 4px;
	font-weight: normal;
	opacity: 0.75;
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

interface OptionProps {
	withImage: string
	multiSelect: boolean
	checked: boolean
	colorTheme: ColorTheme
	componentSize: ComponentSize
	hasDescription: boolean
}

export const Option = styled.div<OptionProps>`
	display: flex;
	position: relative;
	min-height: ${({ componentSize, theme }) =>
		`${theme.button.height[componentSize]}px`};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ withImage, checked, componentSize, theme }) => {
		const horizontalPadding = getCheckboxOffset(componentSize, theme)
		const checkboxSize = theme.checkboxRadio.size[componentSize]
		/** 2 = border width, 16 = height of one-line text */
		const verticalPadding = (theme.button.height[componentSize] - 2 - 16) / 2

		if (withImage) {
			return `${verticalPadding + 4}px ${horizontalPadding}px`
		}

		return checked
			? `
  		${verticalPadding}px ${horizontalPadding}px ${verticalPadding}px ${
					2 * horizontalPadding + checkboxSize
			  }px
  	`
			: `
  		${verticalPadding}px ${horizontalPadding}px
  	`
	}};
	text-align: center;
	border: 1px solid;
	background: #fff;
	color: ${({ checked, colorTheme, theme }) =>
		checked ? theme.colors[colorTheme].dark : theme.colors.text};
	font-size: 14px;
	border-color: ${({ checked, colorTheme, theme }) =>
		checked ? theme.colors[colorTheme].dark : theme.colors.borderInput};
	font-weight: ${({ hasDescription }) => (hasDescription ? 500 : 400)};
	border-radius: 4px;
	transition: border 0.2s, padding 0.2s;
	cursor: ${({ checked, multiSelect }) =>
		checked && !multiSelect ? 'default' : 'pointer'};
	user-select: none;
	box-shadow: ${({ theme }) => theme.selectPicker.boxShadow};

	${({ checked, theme }) =>
		!checked &&
		`
		&:hover {
			border-color: ${theme.colors.borderInputHover};
		} 
	`}//@media (max-width: 768px) {
  //  margin: 0 1.3rem;
  //  padding: 7px 0;
  //  min-height: 60px;
  //}
`

interface OptionImageProps {
	imageSize: string
}

export const OptionImage = styled.img<OptionImageProps>`
	max-width: ${({ imageSize }) => imageSize};
	margin-bottom: 10px;
	@media (max-width: 768px) {
		margin: 0 10px 0 0;
		max-width: 30px;
	}
`

export const Label = styled.label`
	display: block;
	margin: 0 auto 30px;
	text-align: center;
	line-height: 20px;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.7);
`

interface CheckboxProps {
	colorTheme: ColorTheme
	componentSize: ComponentSize
	checked: boolean
}

const getCheckboxOffset = (componentSize: ComponentSize, theme: DefaultTheme) =>
	(theme.button.height[componentSize] -
		2 -
		theme.checkboxRadio.size[componentSize]) /
	2

export const Checkbox = styled(StyledCheckbox)<CheckboxProps>`
	position: absolute;
	top: ${({ componentSize, theme }) =>
		getCheckboxOffset(componentSize, theme)}px;
	left: ${({ componentSize, theme }) =>
		getCheckboxOffset(componentSize, theme)}px;
	visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
	pointer-events: none;
`

export const Error = styled.div`
	color: ${({ theme }) => theme.colors[ColorTheme.ERROR].dark};
	padding: 5px 0;
	font-size: 13px;
	margin-top: 5px;
`

export const WhiteCheck = styled(FaCheck)`
	color: #fff;
`

/** Hack to visually center text */
export const OptionLabel = styled.div`
	left: -5%;
	transform: translateX(6%);
	position: relative;
`
