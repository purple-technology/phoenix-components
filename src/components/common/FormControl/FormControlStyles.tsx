import SVG from 'react-inlinesvg'
import styled, { DefaultTheme } from 'styled-components'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../../enum/ComponentSize'
import { ColorTheme } from '../../../theme/ColorTheme'

/** Customizable */
export const INPUT_PADDING_X = 11

/**
 * Common constants and functions
 */

const LEGEND_BORDER_PADDING_X = INPUT_PADDING_X - 7

const getHeight = (size: ComponentSizeSmallMediumLarge): string => {
	switch (size) {
		case ComponentSize.SMALL:
			return '36px'
		case ComponentSize.LARGE:
			return '52px'
		case ComponentSize.MEDIUM:
		default:
			return '44px'
	}
}

const getLabelTranslateY = (size: ComponentSizeSmallMediumLarge): number => {
	switch (size) {
		case ComponentSize.SMALL:
			return 10
		case ComponentSize.LARGE:
			return 18
		case ComponentSize.MEDIUM:
		default:
			return 14
	}
}

/**
 * Wrapper
 */

export const Wrapper = styled.div`
	position: relative;
`

/**
 * Label
 */

interface LabelProps {
	componentSize: ComponentSizeSmallMediumLarge
	focused?: boolean
	warning?: boolean
	error?: boolean
	filled?: boolean
	disabled?: boolean
	RTL?: boolean
}

export const Label = styled.label<LabelProps>`
	top: 0;
	position: absolute;
	transition: color 0.2s, transform 0.2s;
	z-index: 1;
	pointer-events: none;
	color: ${(props): string => {
		if (props.disabled) {
			return props.theme.colors.textDisabled
		} else if (props.error) {
			return props.theme.colors[ColorTheme.ERROR].dark
		} else if (props.warning) {
			return props.theme.colors[ColorTheme.WARNING].dark
		}
		return props.theme.colors.textTertiary
	}};

	${({ RTL }): string =>
		RTL
			? `
		right: 0;
		transform-origin: top right;
		`
			: `
		left: 0;
		transform-origin: top left;
	`};

	transform: ${({ focused, filled, componentSize, RTL }): string =>
		focused || filled
			? `
		translate(${RTL ? '-' : ''}${INPUT_PADDING_X}px, -6px) scale(0.857);
	`
			: `
		translate(${RTL ? '-' : ''}${INPUT_PADDING_X}px, ${getLabelTranslateY(
					componentSize
			  )}px) scale(1);
	`};
`

/**
 * InputWrapper
 */

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
`

/**
 * Input and TextArea
 */

const getFieldsetBorderColor = (
	theme: DefaultTheme,
	focused?: boolean,
	disabled?: boolean,
	success?: boolean,
	warning?: boolean,
	error?: boolean
): string => {
	if (focused) {
		return theme.colors.focus
	} else if (disabled) {
		return theme.colors.borderDisabled
	} else if (error) {
		return theme.colors[ColorTheme.ERROR].dark
	} else if (warning) {
		return theme.colors[ColorTheme.WARNING].dark
	} else if (success) {
		return theme.colors[ColorTheme.SUCCESS].dark
	}

	return theme.colors.borderInput
}

/** Border color change on hover - only in non focused and non-disabled state */
export const getHoverFieldsetStyles = (
	theme: DefaultTheme,
	focused?: boolean,
	disabled?: boolean
): string =>
	!focused && !disabled
		? `
		&:hover + fieldset {
			border-color: ${theme.colors.borderInputHover};
		}
	`
		: ''

const getFormControlCommonStyles = (
	theme: DefaultTheme,
	focused?: boolean,
	disabled?: boolean
): string => `
	flex: 1;
	font: inherit;
	border: 0;	
	width: 100%;
	margin: 0;
	display: block;
	background: none;
	color: currentColor;
	min-width: 0;
	letter-spacing: inherit;
	-webkit-tap-highlight-color: transparent;
	
	&:focus {
		outline: none;
		background: #fff;
	}

	${getHoverFieldsetStyles(theme, focused, disabled)}
`

interface StyledInputAndTextAreaProps {
	componentSize: ComponentSizeSmallMediumLarge
	focused?: boolean
	disabled?: boolean
	RTL?: boolean
}

export const StyledInput = styled.input<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ componentSize }): string => `
		height: ${getHeight(componentSize)};
		padding: 0 ${INPUT_PADDING_X}px;
	`}
`

export const StyledTextArea = styled.textarea<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ componentSize }): string => `
		padding: ${getLabelTranslateY(componentSize)}px ${INPUT_PADDING_X}px;
	`}
`

export const StyledSelectNative = styled.select<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ componentSize, RTL }): string => {
		const right = RTL ? INPUT_PADDING_X : INPUT_PADDING_X + 20
		const left = RTL ? INPUT_PADDING_X + 20 : INPUT_PADDING_X

		return `
			height: ${getHeight(componentSize)};
			padding: 0 ${right}px 0 ${left}px;
		`
	}}
	
	appearance: none;
`

// export const StyledBPSelect = styled(BPSelect)<StyledInputAndTextAreaProps>`
// 	${props =>
// 		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}
//
// 	${({ componentSize, RTL }): string => {
// 		const right = RTL ? INPUT_PADDING_X : INPUT_PADDING_X + 20
// 		const left = RTL ? INPUT_PADDING_X + 20 : INPUT_PADDING_X
//
// 		return `
// 			height: ${getHeight(componentSize)};
// 			padding: 0 ${right}px 0 ${left}px;
// 		`
// 	}}
//
// 	appearance: none;
// `

/**
 * Fieldset
 */

interface FieldsetProps {
	componentSize: ComponentSizeSmallMediumLarge
	focused?: boolean
	disabled?: boolean
	error?: boolean
	success?: boolean
	warning?: boolean
}

export const Fieldset = styled.fieldset<FieldsetProps>`
	position: absolute;
	left: 0;
	top: -5px;
	right: 0;
	bottom: 0;
	border-style: solid;
	pointer-events: none;
	margin: 0;
	padding: 0 ${LEGEND_BORDER_PADDING_X}px;
	overflow: hidden;
	border-radius: ${({ componentSize, theme }): string =>
		theme.borderRadius[componentSize]};
	transition: border-color 0.2s;
	border-width: ${({ focused }): string => (focused ? '2px' : '1px')};
	border-color: ${(props): string =>
		getFieldsetBorderColor(
			props.theme,
			props.focused,
			props.disabled,
			props.success,
			props.warning,
			props.error
		)};
`

/**
 * Legend
 */

interface LegendProps {
	focused?: boolean
	filled?: boolean
	RTL?: boolean
}

export const Legend = styled.legend<LegendProps>`
	width: auto;
	height: 11px;
	display: block;
	padding: 0;
	font-size: 12px;
	text-align: ${({ RTL }): string => (RTL ? 'right' : 'left')};
	visibility: hidden;

	${({ focused, filled }): string =>
		focused || filled
			? `
		max-width: 1000px;
		transition: max-width .1s ease-in-out 50ms;
	`
			: `
		max-width: 0.01px;
		transition: max-width 0.05s;
	`}

	span {
		display: inline-block;
		padding-left: 5px;
		padding-right: 5px;
	}
`

/**
 * Helper Text
 */

interface HelperTextProps {
	focused?: boolean
}
export const HelperText = styled.div<HelperTextProps>`
	transition: opacity 0.2s, transform 0.2s;
	transform: translateY(-5px);
	opacity: 0;
	font-size: 12px;
	color: ${({ theme }): string => theme.colors.gray._50};
	position: absolute;
	padding: 5px 0;
	${({ focused }): string =>
		focused
			? `
		opacity: 1;
		transform: translateY(0);
		`
			: ''}
`

/**
 * Content Right
 */

interface ContentRightProps {
	componentSize: ComponentSizeSmallMediumLarge
	RTL?: boolean
}

export const ContentRight = styled.div<ContentRightProps>`
	line-height: ${({ componentSize }): string => getHeight(componentSize)};
	${({ RTL }): string =>
		RTL
			? `padding-left: ${INPUT_PADDING_X}px;`
			: `padding-right: ${INPUT_PADDING_X}px;`}
	color: ${({ theme }): string => theme.colors.textTertiary};
`

/**
 * Checkmark
 */

interface CheckmarkProps {
	componentSize: ComponentSizeSmallMediumLarge
	RTL?: boolean
}

export const Checkmark = styled(SVG)<CheckmarkProps>`
	${({ RTL }): string =>
		RTL
			? `margin-left: ${INPUT_PADDING_X}px;`
			: `margin-right: ${INPUT_PADDING_X}px;`}
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({ componentSize }): string =>
		`${getLabelTranslateY(componentSize) + 3}px`};
	path {
		fill: ${(props): string => props.theme.colors[ColorTheme.SUCCESS].dark};
	}
`
