import styled, { DefaultTheme } from 'styled-components'

import { ColorTheme } from '../../../types/Color'
import { left } from '../../../utils/rtl'

export interface CommonStyledCheckboxRadioProps {
	colorTheme: ColorTheme
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
		padding-top: ${({ theme }): string =>
			`${(parseInt(theme.tokens.checkboxRadio.sizing.base, 10) - 16) / 2}px`};
		padding-inline-start: ${({ theme }): string =>
			`${parseInt(theme.tokens.checkboxRadio.sizing.base, 10) + 8}px`};
		min-height: ${({ theme }): string =>
			theme.tokens.checkboxRadio.sizing.base};
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
		height: ${({ theme }): string => theme.tokens.checkboxRadio.sizing.base};
		width: ${({ theme }): string => theme.tokens.checkboxRadio.sizing.base};
		border: 1px solid
			${({ theme, warning, error }): string | undefined =>
				getColor(theme, warning, error, theme.$pc.colors.borderInput)};
		background: #fff;
		top: 0;
		${left(0)}
		transition: ${({ theme }): string =>
			`box-shadow ${theme.$pc.transitionDuration}, background-color ${theme.$pc.transitionDuration}, border ${theme.$pc.transitionDuration}`};
		box-shadow: 0 0 0 0
			${({ theme }): string => theme.tokens.color.border.focus};
		box-sizing: border-box;
	}

	label::after {
		display: none;
	}

	label:hover::before {
		border: 1px solid
			${(props): string => props.theme.tokens.color.border.interaction};
	}

	input:checked {
		+ label::after {
			display: block;
		}
		+ label:hover::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
		}
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${({ theme }): string => theme.tokens.color.border.focus};
	}

	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({ theme }): string => theme.tokens.color.text.quaternary};
		}
		+ label::before {
			background-color: ${({ theme }): string =>
				theme.tokens.color.background.secondary};
			border-color: ${({ theme }): string =>
				theme.tokens.color.border.secondary};
		}
		&:checked + label::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primaryDisabled};
		}
	}
`

export const Label = styled.label`
	font-size: ${({ theme }): number => theme.tokens.fontSize.base}px;
`
