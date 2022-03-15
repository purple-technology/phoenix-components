import styled, { DefaultTheme } from 'styled-components'

import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeMediumLarge } from '../../../types/ComponentSize'
import { left } from '../../../utils/rtl'

export interface CommonStyledCheckboxRadioProps {
	colorTheme: ButtonColorTheme
	size: ComponentSizeMediumLarge
	/** Show yellow warning text and icon under the input */
	warning?: boolean
	/** Show red error text and icon under the input */
	error?: boolean
}

const getColor = (
	theme: DefaultTheme,
	warning?: boolean,
	error?: boolean,
	defaultColor?: string
): string | undefined => {
	if (error) {
		return theme.$pc.colors['error'].dark
	} else if (warning) {
		return theme.$pc.colors['warning'].dark
	}

	return defaultColor
}

export const CommonStyledCheckboxRadio = styled.div<CommonStyledCheckboxRadioProps>`
	font-size: 0;

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: ${({ size, theme }): string =>
			`${(theme.$pc.checkboxRadio.size[size] - 16) / 2}px`};
		padding-inline-start: ${({ size, theme }): string =>
			`${theme.$pc.checkboxRadio.size[size] + 8}px`};
		min-height: ${({ size, theme }): string =>
			`${theme.$pc.checkboxRadio.size[size]}px`};
		user-select: none;
		color: ${({ theme, warning, error }): string | undefined =>
			getColor(theme, warning, error)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	// Outer box of the fake checkbox/radio
	label::before {
		height: ${({ size, theme }): string =>
			`${theme.$pc.checkboxRadio.size[size]}px`};
		width: ${({ size, theme }): string =>
			`${theme.$pc.checkboxRadio.size[size]}px`};
		border: 1px solid
			${({ theme, warning, error }): string | undefined =>
				getColor(theme, warning, error, theme.$pc.colors.borderInput)};
		background: #fff;
		top: 0;
		${left(0)}
		transition: ${({ theme }): string =>
			`box-shadow ${theme.$pc.transitionDuration}, background-color ${theme.$pc.transitionDuration}, border ${theme.$pc.transitionDuration}`};
		box-shadow: 0 0 0 0 ${({ theme }): string => theme.$pc.colors.focus};
		box-sizing: border-box;
	}

	label::after {
		display: none;
	}

	label:hover::before {
		border: 1px solid
			${(props): string => props.theme.$pc.colors.borderInputHover};
	}

	input:checked {
		+ label::after {
			display: block;
		}
		+ label:hover::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.$pc.colors[colorTheme].darkHoverBackground};
		}
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }): string => theme.$pc.colors.focus};
	}

	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({ theme }): string => theme.$pc.colors.text.lightest};
		}
		+ label::before {
			background-color: ${({ theme }): string => theme.$pc.colors.gray._15};
			border-color: ${({ theme }): string => theme.$pc.colors.gray._30};
		}
		&:checked + label::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.$pc.colors[colorTheme].darkDisabledBackground};
		}
	}
`

export const Label = styled.label`
	font-size: ${({ theme }): number => theme.$pc.fontSize}px;
`
