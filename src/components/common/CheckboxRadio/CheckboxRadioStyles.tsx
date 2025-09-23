import styled from 'styled-components'

import { getUnitlessNumber } from '../../../tokens/helpers'
import { ColorTheme } from '../../../types/Color'
import { SizingSmMdLg } from '../../../types/Sizing'
import { getWarningErrorColor } from '../../../utils/colors'
import { left } from '../../../utils/rtl'

export interface CommonStyledCheckboxRadioProps {
	indeterminate?: boolean
	$colorTheme: ColorTheme
	size: SizingSmMdLg
	/** Show yellow warning text and icon under the input */
	$warning?: boolean
	/** Show red error text and icon under the input */
	$error?: boolean
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
			`${
				(getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) - 16) / 2
			}px`};
		padding-inline-start: ${({ theme, size }): string =>
			`${getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) + 8}px`};
		min-height: ${({ theme, size }): string =>
			theme.tokens.checkboxRadio.sizing[size]};
		user-select: none;
		color: ${({ theme, $warning, $error }): string | undefined =>
			getWarningErrorColor(theme, 'text', $warning, $error)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	// Outer box of the fake checkbox/radio
	label::before {
		height: ${({ theme, size }): string =>
			theme.tokens.checkboxRadio.sizing[size]};
		width: ${({ theme, size }): string =>
			theme.tokens.checkboxRadio.sizing[size]};
		border: 1px solid
			${({ theme, $warning, $error }): string | undefined =>
				getWarningErrorColor(theme, 'border', $warning, $error) ??
				theme.tokens.color.border.primary};
		background: ${({ theme }): string => theme.tokens.color.background.primary};
		top: 0;
		${left(0)}
		transition: ${({ theme }): string =>
			`box-shadow ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}, border ${theme.tokens.duration.transition.base}`};
		box-shadow: 0 0 0 0
			${({ theme }): string => theme.tokens.color.border.focus};
		box-sizing: border-box;
	}

	label::after {
		display: none;
	}

	label:hover::before {
		border: 1px solid
			${(props): string => props.theme.tokens.color.border.primaryInteraction};
	}

	input:checked {
		+ label::after {
			display: block;
		}
		+ label:hover::before {
			border-color: ${({ theme, $colorTheme }): string =>
				theme.tokens.color.background[$colorTheme].primary};
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
			border-color: ${({ theme, $colorTheme }): string =>
				theme.tokens.color.background[$colorTheme].primaryDisabled};
		}
	}
`

export const Label = styled.label`
	font-size: ${({ theme }): string => theme.tokens.fontSize.base};
`
