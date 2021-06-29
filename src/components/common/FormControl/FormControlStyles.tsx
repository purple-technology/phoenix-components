import SVG from 'react-inlinesvg'
import styled, { DefaultTheme } from 'styled-components'

import { ComponentSizeSmallMediumLarge } from '../../../types/ComponentSize'

const getHeight = (
	theme: DefaultTheme,
	size: ComponentSizeSmallMediumLarge
): string => theme.$pc.formControl.height[size] + 'px'

const getLabelTranslateY = (
	theme: DefaultTheme,
	size: ComponentSizeSmallMediumLarge
): number => theme.$pc.formControl.height[size] / 2 - 8

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
	size: ComponentSizeSmallMediumLarge
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

	transform: ${({ theme, focused, filled, size, RTL }): string =>
		focused || filled
			? `
		translate(${RTL ? '-' : ''}${
					theme.$pc.formControl.paddingX
			  }px, -6px) scale(0.857);
	`
			: `
		translate(${RTL ? '-' : ''}${
					theme.$pc.formControl.paddingX
			  }px, ${getLabelTranslateY(theme, size)}px) scale(1);
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
	$size: ComponentSizeSmallMediumLarge
	focused?: boolean
	disabled?: boolean
	RTL?: boolean
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

	${({ theme, $size, RTL }): string => {
		const paddingX = theme.$pc.formControl.paddingX
		const right = RTL ? paddingX : paddingX + 20
		const left = RTL ? paddingX + 20 : paddingX

		return `
			height: ${getHeight(theme, $size)};
			padding: 0 ${right}px 0 ${left}px;
		`
	}}
	
	appearance: none;
`

/**
 * Fieldset
 */

interface FieldsetProps {
	size: ComponentSizeSmallMediumLarge
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
	RTL?: boolean
	label?: string
}

export const Legend = styled.legend<LegendProps>`
	width: auto;
	height: 11px;
	display: block;
	padding: 0;
	font-size: 12px;
	text-align: ${({ RTL }): string => (RTL ? 'right' : 'left')};
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
	size: ComponentSizeSmallMediumLarge
	RTL?: boolean
}

export const ContentRight = styled.div<ContentRightProps>`
	line-height: ${({ theme, size }): string => getHeight(theme, size)};
	${({ theme, RTL }): string =>
		RTL
			? `padding-left: ${theme.$pc.formControl.paddingX}px;`
			: `padding-right: ${theme.$pc.formControl.paddingX}px;`}
	color: ${({ theme }): string => theme.$pc.colors.text.light};
`

/**
 * Checkmark
 */

interface CheckmarkProps {
	$size: ComponentSizeSmallMediumLarge
	$RTL?: boolean
}

export const Checkmark = styled(SVG)<CheckmarkProps>`
	${({ theme, $RTL }): string =>
		$RTL
			? `margin-left: ${theme.$pc.formControl.paddingX}px;`
			: `margin-right: ${theme.$pc.formControl.paddingX}px;`}
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({ theme, $size }): string =>
		`${getLabelTranslateY(theme, $size) + 3}`}px;
	path {
		fill: ${(props): string => props.theme.$pc.colors['success'].dark};
	}
`
