import styled, {
	css,
	DefaultTheme,
	FlattenInterpolation,
	FlattenSimpleInterpolation,
	ThemeProps
} from 'styled-components'

import { getUnitlessNumber } from '../../tokens/helpers'
import { ColorTheme } from '../../types/Color'
import { SizingMdLg } from '../../types/Sizing'
import { left } from '../../utils/rtl'
import { StyledCheckbox } from '../Checkbox/CheckboxStyles'

const getCheckboxOffset = (size: SizingMdLg, theme: DefaultTheme): number =>
	(getUnitlessNumber(theme.tokens.inputButton.sizing.height[size]) -
		2 -
		getUnitlessNumber(theme.tokens.checkboxRadio.sizing.md)) /
	2

const getColor = (
	theme: DefaultTheme,
	colorTheme: ColorTheme,
	checked: boolean,
	isDisabled?: boolean
): string => {
	if (isDisabled) {
		return theme.tokens.color.text.quaternary
	} else if (checked) {
		return theme.tokens.color.text[colorTheme].primary
	} else {
		return theme.tokens.color.text.secondary
	}
}

interface WrapperProps {
	optionsLength: number
	size: SizingMdLg
}

export const Wrapper = styled.div<WrapperProps>`
	display: grid;
	grid-template-columns: ${({ optionsLength }): string =>
		`repeat(${optionsLength}, minmax(100px, 300px))`};
	grid-column-gap: ${({ size }): number => (size === 'md' ? 16 : 24)}px;
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
	size: SizingMdLg
	hasDescription: boolean
	withImage?: string
	isDisabled?: boolean
}

export const Option = styled.div<OptionProps>`
	display: flex;
	position: relative;
	min-height: ${({ size, theme }): string =>
		theme.tokens.inputButton.sizing.height[size]};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({ withImage, checked, size, theme }): FlattenSimpleInterpolation => {
		const horizontalPadding = getCheckboxOffset(size, theme)
		const checkboxSize = getUnitlessNumber(theme.tokens.checkboxRadio.sizing.md)
		/** 2 = border width, 16 = height of one-line text */
		const verticalPadding =
			(getUnitlessNumber(theme.tokens.inputButton.sizing.height[size]) -
				2 -
				16) /
			2

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
	background: #fff;
	color: ${(props): string =>
		getColor(props.theme, props.colorTheme, props.checked, props.isDisabled)};
	border-color: ${({ isDisabled, checked, colorTheme, theme }): string => {
		if (isDisabled) {
			return theme.tokens.color.border.secondary
		} else if (checked) {
			return theme.tokens.color.border[colorTheme].primary
		} else {
			return theme.tokens.color.border.primary
		}
	}};
	font-weight: ${({ hasDescription, theme }): string =>
		hasDescription
			? theme.tokens.ref.fontWeight.bold
			: theme.tokens.ref.fontWeight.regular};
	border-radius: 4px;
	transition: ${({ theme }): string =>
		`border ${theme.tokens.duration.transition.base}, padding ${theme.tokens.duration.transition.base}`};
	cursor: ${({ checked, multiSelect }): string =>
		checked && !multiSelect ? 'default' : 'pointer'};
	user-select: none;

	${({ checked, theme }): string =>
		!checked
			? `
		&:hover {
			border-color: ${theme.tokens.color.border.primaryInteraction};
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
	size: SizingMdLg
	isDisabled?: boolean
	imageSize?: string
}

export const OptionImage = styled.img<OptionImageProps>`
	max-width: ${({ imageSize, size }): string =>
		imageSize ?? (size === 'md' ? '48px' : '64px')};
	max-height: ${({ imageSize, size }): string =>
		imageSize ?? (size === 'md' ? '48px' : '64px')};
	margin-bottom: 12px;
	opacity: ${({ isDisabled }): number => (isDisabled ? 0.25 : 1)};
	width: 100%;
	height: 100%;
	object-fit: contain;
`

interface CheckboxProps {
	colorTheme: ColorTheme
	size: SizingMdLg
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
	color: ${({ theme }): string => theme.tokens.color.text.error.primary};
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
