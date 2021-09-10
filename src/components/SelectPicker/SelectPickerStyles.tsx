import styled, {
	css,
	DefaultTheme,
	FlattenInterpolation,
	FlattenSimpleInterpolation,
	ThemeProps
} from 'styled-components'

import { ButtonColorTheme } from '../../types/ColorTheme'
import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../types/ComponentSize'
import { left } from '../../utils/rtl'
import { StyledCheckbox } from '../Checkbox/CheckboxStyles'

const getCheckboxOffset = (
	size: ComponentSizeMediumLarge,
	theme: DefaultTheme
): number =>
	(theme.$pc.button.height[size] - 2 - theme.$pc.checkboxRadio.size[size]) / 2

const getColor = (
	theme: DefaultTheme,
	colorTheme: ButtonColorTheme,
	checked: boolean,
	isDisabled?: boolean
): string => {
	if (isDisabled) {
		return theme.$pc.colors.text.lightest
	} else if (checked) {
		return theme.$pc.colors[colorTheme].dark
	} else {
		return theme.$pc.colors.text.dark
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
	colorTheme: ButtonColorTheme
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
	colorTheme: ButtonColorTheme
	size: ComponentSizeMediumLarge
	hasDescription: boolean
	withImage?: string
	isDisabled?: boolean
}

export const Option = styled.div<OptionProps>`
	display: flex;
	position: relative;
	min-height: ${({ size, theme }): string =>
		`${theme.$pc.button.height[size]}px`};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({ withImage, checked, size, theme }): FlattenSimpleInterpolation => {
		const horizontalPadding = getCheckboxOffset(size, theme)
		const checkboxSize = theme.$pc.checkboxRadio.size[size]
		/** 2 = border width, 16 = height of one-line text */
		const verticalPadding = (theme.$pc.button.height[size] - 2 - 16) / 2

		if (withImage) {
			return css`
				padding: ${verticalPadding + 4}px ${horizontalPadding}px;
			`
		}

		return checked
			? css`
					padding-top: ${verticalPadding}px;
					padding-inline-end: ${horizontalPadding}px;
					padding-bottom: ${verticalPadding}px;
					padding-inline-start: ${2 * horizontalPadding + checkboxSize}px;
			  `
			: css`
					padding: ${verticalPadding}px ${horizontalPadding}px;
			  `
	}};
	text-align: center;
	border: 1px solid;
	background: ${({ theme, isDisabled }): string =>
		isDisabled ? theme.$pc.colors.gray._20 : '#fff'};
	color: ${(props): string =>
		getColor(props.theme, props.colorTheme, props.checked, props.isDisabled)};
	font-size: 14px;
	border-color: ${({ isDisabled, checked, colorTheme, theme }): string => {
		if (isDisabled) {
			return theme.$pc.colors.borderDisabled
		} else if (checked) {
			return theme.$pc.colors[colorTheme].dark
		} else {
			return theme.$pc.colors.borderInput
		}
	}};
	font-weight: ${({ hasDescription }): number => (hasDescription ? 500 : 400)};
	border-radius: 4px;
	transition: ${({ theme }): string =>
		`border ${theme.$pc.transitionDuration}, padding ${theme.$pc.transitionDuration}`};
	cursor: ${({ checked, multiSelect }): string =>
		checked && !multiSelect ? 'default' : 'pointer'};
	user-select: none;

	${({ checked, theme }): string =>
		!checked
			? `
		&:hover {
			border-color: ${theme.$pc.colors.borderInputHover};
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
	imageSize?: string
}

export const OptionImage = styled.img<OptionImageProps>`
	max-width: ${({ imageSize, size, theme }): string =>
		imageSize ?? `${theme.$pc.selectPicker.iconMaxSize[size]}px`};
	max-height: ${({ imageSize, size, theme }): string =>
		imageSize ?? `${theme.$pc.selectPicker.iconMaxSize[size]}px`};
	margin-bottom: 12px;
	opacity: ${({ isDisabled }): number => (isDisabled ? 0.25 : 1)};
	width: 100%;
	height: 100%;
	object-fit: contain;
`

interface CheckboxProps {
	colorTheme: ButtonColorTheme
	size: ComponentSize
	checked: boolean
}

export const Checkbox = styled(StyledCheckbox)<CheckboxProps>`
	position: absolute;
	top: ${({ size, theme }): number => getCheckboxOffset(size, theme)}px;
	${({ size, theme }): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
		left(`${getCheckboxOffset(size, theme)}px`)};
	visibility: ${({ checked }): string => (checked ? 'visible' : 'hidden')};
	pointer-events: none;
`

export const Error = styled.div`
	color: ${({ theme }): string => theme.$pc.colors['error'].dark};
	padding: 5px 0;
	font-size: 13px;
	margin-top: 5px;
`

/** Hack to visually center text */
export const OptionLabel = styled.div`
	${left('-5%')}
	transform: translateX(6%);
	position: relative;
`
