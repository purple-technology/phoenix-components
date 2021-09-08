import SVG from 'react-inlinesvg'
import styled, {
	css,
	DefaultTheme,
	FlattenSimpleInterpolation
} from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { left } from '../../../utils/rtl'

const getHeight = (theme: DefaultTheme, size: ComponentSize): string =>
	theme.$pc.formControl.height[size] + 'px'

const getLabelTranslateY = (theme: DefaultTheme, size: ComponentSize): number =>
	theme.$pc.formControl.height[size] / 2 - 8

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
	size: ComponentSize
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
		`color ${theme.$pc.transitionDuration}, transform ${theme.$pc.transitionDuration}`};
	z-index: 1;
	pointer-events: none;
	color: ${(props): string => {
		if (props.disabled) {
			return props.theme.$pc.colors.text.lightest
		} else if (props.error) {
			return props.theme.$pc.colors['error'].dark
		} else if (props.warning) {
			return props.theme.$pc.colors['warning'].dark
		}
		return props.theme.$pc.colors.text.light
	}};

	${left(0)}
	transform-origin: top left;
	[dir='rtl'] && {
		transform-origin: top right;
	}

	${({ theme, focused, filled, size }): FlattenSimpleInterpolation =>
		focused || filled
			? css`
					transform: translate(${theme.$pc.formControl.paddingX}px, -6px)
						scale(0.857);
					[dir='rtl'] && {
						transform: translate(-${theme.$pc.formControl.paddingX}px, -6px)
							scale(0.857);
					}
			  `
			: css`
					transform: translate(
							${theme.$pc.formControl.paddingX}px,
							${getLabelTranslateY(theme, size)}px
						)
						scale(1);
					[dir='rtl'] && {
						transform: translate(
								-${theme.$pc.formControl.paddingX}px,
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
	disabled?: boolean,
	success?: boolean,
	warning?: boolean,
	error?: boolean
): string => {
	if (focused) {
		return theme.$pc.colors.focus
	} else if (disabled) {
		return theme.$pc.colors.borderDisabled
	} else if (error) {
		return theme.$pc.colors['error'].dark
	} else if (warning) {
		return theme.$pc.colors['warning'].dark
	} else if (success) {
		return theme.$pc.colors['success'].dark
	}

	return theme.$pc.colors.borderInput
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
			border-color: ${theme.$pc.colors.borderInputHover};
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
	$size: ComponentSize
	focused?: boolean
	disabled?: boolean
}

export const StyledInput = styled.input<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ theme, $size }): string => `
		height: ${getHeight(theme, $size)};
		padding: 0 ${theme.$pc.formControl.paddingX}px;
	`}
`

export const StyledTextArea = styled.textarea<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ theme, $size }): string => `
		padding: ${getLabelTranslateY(theme, $size)}px ${
		theme.$pc.formControl.paddingX
	}px;
	`}
`

export const StyledSelectNative = styled.select<StyledInputAndTextAreaProps>`
	${(props): string =>
		getFormControlCommonStyles(props.theme, props.focused, props.disabled)}

	${({ theme, $size }): FlattenSimpleInterpolation => css`
		height: ${getHeight(theme, $size)};
		padding-inline-start: ${theme.$pc.formControl.paddingX}px;
		padding-inline-end: ${theme.$pc.formControl.paddingX + 20}px;
	`}
	
	appearance: none;
`

/**
 * Fieldset
 */

interface FieldsetProps {
	size: ComponentSize
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
	padding: 0 ${({ theme }): number => theme.$pc.formControl.paddingX - 7}px;
	overflow: hidden;
	border-radius: ${({ size, theme }): string => theme.$pc.borderRadius[size]};
	transition: border-color
		${({ theme }): string => theme.$pc.transitionDuration};
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
	label?: string
}

export const Legend = styled.legend<LegendProps>`
	width: auto;
	height: 11px;
	display: block;
	padding: 0;
	font-size: 12px;
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
		`opacity ${theme.$pc.transitionDuration}, transform ${theme.$pc.transitionDuration}`};
	transform: translateY(-5px);
	opacity: 0;
	font-size: 12px;
	color: ${({ theme }): string => theme.$pc.colors.gray._50};
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
	size: ComponentSize
}

export const ContentRight = styled.div<ContentRightProps>`
	line-height: ${({ theme, size }): string => getHeight(theme, size)};
	padding-inline-end: ${({ theme }): number =>
		theme.$pc.formControl.paddingX}px;
	color: ${({ theme }): string => theme.$pc.colors.text.light};
`

/**
 * Checkmark
 */

interface CheckmarkProps {
	$size: ComponentSize
}

export const Checkmark = styled(SVG)<CheckmarkProps>`
	margin-inline-end: ${({ theme }): number => theme.$pc.formControl.paddingX}px;
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({ theme, $size }): string =>
		`${getLabelTranslateY(theme, $size) + 3}`}px;
	path {
		fill: ${(props): string => props.theme.$pc.colors['success'].dark};
	}
`
