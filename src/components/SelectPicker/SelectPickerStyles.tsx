import { FaCheck } from 'react-icons/fa'
import styled, { DefaultTheme } from 'styled-components'

import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledCheckbox } from '../Checkbox/CheckboxStyles'

const getCheckboxOffset = (
	componentSize: ComponentSizeMediumLarge,
	theme: DefaultTheme
): number =>
	(theme.button.height[componentSize] -
		2 -
		theme.checkboxRadio.size[componentSize]) /
	2

interface WrapperProps {
	optionsLength: number
}

export const Wrapper = styled.div<WrapperProps>`
	display: grid;
	grid-template-columns: ${({ optionsLength }): string =>
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
	color: ${({ colorTheme, checked, theme }): string =>
		checked ? theme.colors[colorTheme].dark : theme.colors.text};
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
	withImage?: string
	multiSelect: boolean
	checked: boolean
	colorTheme: ColorTheme
	componentSize: ComponentSizeMediumLarge
	hasDescription: boolean
}

export const Option = styled.div<OptionProps>`
	display: flex;
	position: relative;
	min-height: ${({ componentSize, theme }): string =>
		`${theme.button.height[componentSize]}px`};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${({ withImage, checked, componentSize, theme }): string => {
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
	color: ${({ checked, colorTheme, theme }): string =>
		checked ? theme.colors[colorTheme].dark : theme.colors.text};
	font-size: 14px;
	border-color: ${({ checked, colorTheme, theme }): string =>
		checked ? theme.colors[colorTheme].dark : theme.colors.borderInput};
	font-weight: ${({ hasDescription }): number => (hasDescription ? 500 : 400)};
	border-radius: 4px;
	transition: border 0.2s, padding 0.2s;
	cursor: ${({ checked, multiSelect }): string =>
		checked && !multiSelect ? 'default' : 'pointer'};
	user-select: none;
	box-shadow: ${({ theme }): string => theme.selectPicker.boxShadow};

	${({ checked, theme }): string =>
		!checked
			? `
		&:hover {
			border-color: ${theme.colors.borderInputHover};
		} 
	`
			: ''}
`

interface OptionImageProps {
	componentSize: ComponentSizeMediumLarge
}

export const OptionImage = styled.img<OptionImageProps>`
	max-width: ${({ componentSize, theme }): string =>
		`${theme.selectPicker.iconMaxSize[componentSize]}px`};
	max-height: ${({ componentSize, theme }): string =>
		`${theme.selectPicker.iconMaxSize[componentSize]}px`};
	margin-bottom: 12px;
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

export const Checkbox = styled(StyledCheckbox)<CheckboxProps>`
	position: absolute;
	top: ${({ componentSize, theme }): number =>
		getCheckboxOffset(componentSize, theme)}px;
	left: ${({ componentSize, theme }): number =>
		getCheckboxOffset(componentSize, theme)}px;
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
