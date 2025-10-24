import SVG from 'react-inlinesvg'
import styled, { css, DefaultTheme, RuleSet } from 'styled-components'

import { getUnitlessNumber } from '../../../tokens/helpers'
import { Sizing } from '../../../types/Sizing'
import { left } from '../../../utils/rtl'

const getHeight = (theme: DefaultTheme, size: Sizing): string =>
	theme.tokens.inputButton.sizing.height[size]

const getLabelTranslateY = (theme: DefaultTheme, size: Sizing): number =>
	(getUnitlessNumber(getHeight(theme, size)) -
		getUnitlessNumber(theme.tokens.fontSize.base)) /
	2

/**
 * Wrapper
 */

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
`

/**
 * Label
 */

interface LabelProps {
	size: Sizing
	focused?: boolean
	warning?: boolean
	error?: boolean
	filled?: boolean
	disabled?: boolean
}

export const Label = styled.label<LabelProps>`
	top: 0;
	position: absolute;
	transition: ${({ theme }): string =>
		`color ${theme.tokens.duration.transition.base}, transform ${theme.tokens.duration.transition.base}`};
	z-index: 1;
	pointer-events: none;
	line-height: 1;
	color: ${(props): string => {
		if (props.disabled) {
			return props.theme.tokens.color.text.quaternary
		} else if (props.error) {
			return props.theme.tokens.color.text.error.primary
		} else if (props.warning) {
			return props.theme.tokens.color.text.warning.primary
		}
		return props.theme.tokens.color.text.tertiary
	}};

	${left(0)}
	transform-origin: top left;
	[dir='rtl'] && {
		transform-origin: top right;
	}

	${({ theme, focused, filled, size }): RuleSet =>
		focused || filled
			? css`
					transform: translate(${theme.tokens.input.spacing.x}, -6px)
						scale(0.857);
					[dir='rtl'] && {
						transform: translate(-${theme.tokens.input.spacing.x}, -6px)
							scale(0.857);
					}
			  `
			: css`
					transform: translate(
							${theme.tokens.input.spacing.x},
							${getLabelTranslateY(theme, size)}px
						)
						scale(1);
					[dir='rtl'] && {
						transform: translate(
								-${theme.tokens.input.spacing.x},
								${getLabelTranslateY(theme, size)}px
							)
							scale(1);
					}
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
	minimal?: boolean,
	disabled?: boolean,
	success?: boolean,
	warning?: boolean,
	error?: boolean
): string => {
	if (focused) {
		return theme.tokens.color.border.focus
	} else if (minimal) {
		return 'transparent'
	} else if (disabled) {
		return theme.tokens.color.border.secondary
	} else if (error) {
		return theme.tokens.color.border.error.primary
	} else if (warning) {
		return theme.tokens.color.border.warning.primary
	} else if (success) {
		return theme.tokens.color.border.success.primary
	}

	return theme.tokens.color.border.primary
}

/** Border color change on hover - only in non focused and non-disabled state */
export const getHoverFieldsetStyles = (
	theme: DefaultTheme,
	focused?: boolean,
	disabled?: boolean
): RuleSet =>
	!focused && !disabled
		? css`
				&:hover + fieldset {
					border-color: ${theme.tokens.color.border.primaryInteraction};
				}
		  `
		: css``

const getFormControlCommonStyles = (
	theme: DefaultTheme,
	size: Sizing,
	focused?: boolean,
	disabled?: boolean
): RuleSet => css`
	flex: 1;
	font: inherit;
	border: 0;
	width: 100%;
	margin: 0;
	display: block;
	background: ${theme.tokens.color.background.primary};
	border-radius: ${theme.tokens.inputButton.borderRadius[size]};
	color: currentColor;
	min-width: 0;
	letter-spacing: inherit;
	-webkit-tap-highlight-color: transparent;

	&:focus {
		outline: none;
	}

	${getHoverFieldsetStyles(theme, focused, disabled)}
`

interface StyledInputAndTextAreaProps {
	$size: Sizing
	focused?: boolean
	disabled?: boolean
}

export const StyledInput = styled.input<StyledInputAndTextAreaProps>`
	${(props): RuleSet =>
		getFormControlCommonStyles(
			props.theme,
			props.$size,
			props.focused,
			props.disabled
		)}

	${({ theme, $size }): string => `
		height: ${getHeight(theme, $size)};
		padding: 0 ${theme.tokens.input.spacing.x};
	`}
`

export const StyledTextArea = styled.textarea<StyledInputAndTextAreaProps>`
	${(props): RuleSet =>
		getFormControlCommonStyles(
			props.theme,
			props.$size,
			props.focused,
			props.disabled
		)}

	${({ theme, $size }): string => `
		padding: ${getLabelTranslateY(theme, $size)}px ${theme.tokens.input.spacing.x};
	`}
`

export const StyledSelectNative = styled.select<StyledInputAndTextAreaProps>`
	${(props): RuleSet =>
		getFormControlCommonStyles(
			props.theme,
			props.$size,
			props.focused,
			props.disabled
		)}

	${({ theme, $size }): RuleSet => css`
		padding-inline-end: ${
			getUnitlessNumber(theme.tokens.input.spacing.x) + 20
		}px;
		height: ${getHeight(theme, $size)};
		padding-inline-start: ${theme.tokens.input.spacing.x};
	`}
	
	appearance: none;
`

/**
 * Fieldset
 */

interface FieldsetProps {
	size: Sizing
	focused?: boolean
	minimal?: boolean
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
	padding: 0
		${({ theme }): number =>
			getUnitlessNumber(theme.tokens.input.spacing.x) - 7}px;
	overflow: hidden;
	border-radius: ${({ size, theme }): string =>
		theme.tokens.inputButton.borderRadius[size]};
	transition: border-color
		${({ theme }): string => theme.tokens.duration.transition.base};
	border-width: ${({ theme, focused }): string =>
		focused ? theme.tokens.borderWidth.focus : theme.tokens.input.borderWidth};
	border-color: ${(props): string =>
		getFieldsetBorderColor(
			props.theme,
			props.focused,
			props.minimal,
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
	label?: string
}

export const Legend = styled.legend<LegendProps>`
	width: auto;
	height: 11px;
	display: block;
	padding: 0;
	font-size: 0.857em;
	text-align: start;
	visibility: hidden;

	${({ focused, filled, label }): string =>
		(focused || filled) && label
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
		padding-inline-start: 5px;
		padding-inline-end: 5px;
	}
`

/**
 * Helper Text
 */

interface HelperTextProps {
	focused?: boolean
}
export const HelperText = styled.div<HelperTextProps>`
	transition: ${({ theme }): string =>
		`opacity ${theme.tokens.duration.transition.base}, transform ${theme.tokens.duration.transition.base}`};
	transform: translateY(-5px);
	opacity: 0;
	font-size: 12px;
	color: ${({ theme }): string => theme.tokens.color.text.tertiary};
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
	size: Sizing
}

export const ContentRight = styled.div<ContentRightProps>`
	line-height: ${({ theme, size }): string => getHeight(theme, size)};
	padding-inline-end: ${({ theme }): string => theme.tokens.input.spacing.x};
	color: ${({ theme }): string => theme.tokens.color.text.tertiary};
`

/**
 * Checkmark
 */

interface CheckmarkProps {
	$size: Sizing
}

export const Checkmark = styled(SVG)<CheckmarkProps>`
	margin-inline-end: ${({ theme }): string => theme.tokens.input.spacing.x};
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({ theme, $size }): string =>
		`${getLabelTranslateY(theme, $size) + 3}`}px;
	path {
		fill: ${(props): string => props.theme.tokens.color.text.success.primary};
	}
`
