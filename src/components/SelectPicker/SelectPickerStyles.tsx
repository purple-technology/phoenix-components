import { FaCheck } from 'react-icons/fa'
import styled, { DefaultTheme } from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { StyledCheckbox } from '../Checkbox/CheckboxStyles'

const getCheckboxOffset = (
	size: ComponentSizeMediumLarge,
	theme: DefaultTheme
): number =>
	(theme.button.height[size] - 2 - theme.checkboxRadio.size[size]) / 2

const getColor = (
	theme: DefaultTheme,
	colorTheme: ColorTheme,
	checked: boolean,
	isDisabled?: boolean
): string => {
	if (isDisabled) {
		return theme.colors.textDisabled
	} else if (checked) {
		return theme.colors[colorTheme].dark
	} else {
		return theme.colors.text
	}
}

interface WrapperProps {
	optionsLength: number
}

export const Wrapper = styled.div<WrapperProps>`
	display: grid;
	grid-template-columns: ${({ optionsLength }): string =>
		`repeat(${optionsLength}, minmax(100px, 300px))`};
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
	isDisabled?: boolean
}

export const OptionDescription = styled.div<OptionDescriptionProps>`
	font-size: 12px;
	color: ${(props): string =>
		getColor(props.theme, props.colorTheme, props.checked, props.isDisabled)};
	margin-top: 4px;
	font-weight: normal;
	opacity: 0.75;
`
export const Flex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

interface OptionProps {
	multiSelect: boolean
	checked: boolean
	colorTheme: ColorTheme
	size: ComponentSizeMediumLarge
	hasDescription: boolean
	withImage?: string
	isDisabled?: boolean
}

export const Option = styled.div<OptionProps>`
	display: flex;
	position: relative;
	min-height: ${({ size, theme }): string => `${theme.button.height[size]}px`};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ withImage, checked, size, theme }): string => {
		const horizontalPadding = getCheckboxOffset(size, theme)
		const checkboxSize = theme.checkboxRadio.size[size]
		/** 2 = border width, 16 = height of one-line text */
		const verticalPadding = (theme.button.height[size] - 2 - 16) / 2

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
	background: ${({ theme, isDisabled }): string =>
		isDisabled ? theme.colors.gray._20 : '#fff'};
	color: ${(props): string =>
		getColor(props.theme, props.colorTheme, props.checked, props.isDisabled)};
	font-size: 14px;
	border-color: ${({ isDisabled, checked, colorTheme, theme }): string => {
		if (isDisabled) {
			return theme.colors.borderDisabled
		} else if (checked) {
			return theme.colors[colorTheme].dark
		} else {
			return theme.colors.borderInput
		}
	}};
	font-weight: ${({ hasDescription }): number => (hasDescription ? 500 : 400)};
	border-radius: 4px;
	transition: border 0.2s, padding 0.2s;
	cursor: ${({ checked, multiSelect }): string =>
		checked && !multiSelect ? 'default' : 'pointer'};
	user-select: none;

	${({ checked, theme }): string =>
		!checked
			? `
		&:hover {
			border-color: ${theme.colors.borderInputHover};
		} 
	`
			: ''}

	${({ isDisabled }): string =>
		isDisabled
			? `
		pointer-events: none;
	`
			: ''}
`

interface OptionImageProps {
	size: ComponentSizeMediumLarge
	isDisabled?: boolean
}

export const OptionImage = styled.img<OptionImageProps>`
	max-width: ${({ size, theme }): string =>
		`${theme.selectPicker.iconMaxSize[size]}px`};
	max-height: ${({ size, theme }): string =>
		`${theme.selectPicker.iconMaxSize[size]}px`};
	margin-bottom: 12px;
	opacity: ${({ isDisabled }): number => (isDisabled ? 0.25 : 1)};
`

interface CheckboxProps {
	colorTheme: ColorTheme
	size: ComponentSize
	checked: boolean
}

export const Checkbox = styled(StyledCheckbox)<CheckboxProps>`
	position: absolute;
	top: ${({ size, theme }): number => getCheckboxOffset(size, theme)}px;
	left: ${({ size, theme }): number => getCheckboxOffset(size, theme)}px;
	visibility: ${({ checked }): string => (checked ? 'visible' : 'hidden')};
	pointer-events: none;
`

export const Error = styled.div`
	color: ${({ theme }): string => theme.colors[ColorTheme.ERROR].dark};
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
