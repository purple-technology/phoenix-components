import styled, { DefaultTheme } from 'styled-components'

import { getUnitlessNumber } from '../../tokens/helpers'
import { ColorTheme } from '../../types/Color'
import { getWarningErrorColor } from '../../utils/colors'
import { left } from '../../utils/rtl'

export interface StyledToggleProps {
	colorTheme: ColorTheme
	/** Show yellow warning text and icon under the input */
	warning?: boolean
	/** Show red error text and icon under the input */
	error?: boolean
}

const getSliderOffset = (theme: DefaultTheme): number =>
	(getUnitlessNumber(theme.tokens.toggle.sizing.container.md.height) -
		getUnitlessNumber(theme.tokens.toggle.sizing.slider.md)) /
	2

export const StyledToggle = styled.div<StyledToggleProps>`
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
		padding-top: 2px;
		padding-inline-start: ${({ theme }): string =>
			`${
				getUnitlessNumber(theme.tokens.toggle.sizing.container.md.width) + 8
			}px`};
		min-height: ${({ theme }): string =>
			theme.tokens.toggle.sizing.container.md.height};
		user-select: none;
		color: ${({ theme, warning, error }): string | undefined =>
			getWarningErrorColor(theme, 'text', warning, error)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
		display: block;
	}

	// Container
	label::before {
		height: ${({ theme }): string =>
			theme.tokens.toggle.sizing.container.md.height};
		width: ${({ theme }): string =>
			theme.tokens.toggle.sizing.container.md.width};
		border: 1px solid
			${({ theme, warning, error }): string | undefined =>
				getWarningErrorColor(theme, 'border', warning, error) ??
				theme.tokens.toggle.color.border.container.off};
		background: ${({ theme }): string =>
			theme.tokens.toggle.color.background.container.off};
		top: 0;
		${left(0)}
		transition: ${({ theme }): string =>
			`box-shadow ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}, border ${theme.tokens.duration.transition.base}`};
		box-shadow: 0 0 0 0
			${({ theme }): string => theme.tokens.color.border.focus};
		box-sizing: border-box;
		border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.pill};
	}

	label:hover::before {
		background-color: ${(props): string =>
			props.theme.tokens.toggle.color.background.container.offInteraction};
		border-color: ${(props): string =>
			props.theme.tokens.toggle.color.border.container.offInteraction};
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${({ theme }): string => theme.tokens.color.border.focus};
	}

	// Slider
	label::after {
		width: ${({ theme }): string => theme.tokens.toggle.sizing.slider.md};
		height: ${({ theme }): string => theme.tokens.toggle.sizing.slider.md};
		top: ${({ theme }): number => getSliderOffset(theme)}px;
		left: ${({ theme }): number => getSliderOffset(theme)}px;
		border-radius: ${({ theme }): string =>
			theme.tokens.ref.borderRadius.circle};
		background-color: ${({ theme }): string =>
			theme.tokens.toggle.color.background.slider.off};
		transition: ${({ theme }): string =>
			`left ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}`};
	}

	// ON state
	input:checked {
		// Container
		+ label::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
			background-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
		}
		+ label:hover::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primaryInteraction};
			background-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primaryInteraction};
		}

		// Slider
		+ label::after {
			background-color: ${({ theme }): string =>
				theme.tokens.ref.color.gray['0']};
			left: ${({ theme }): number =>
				getUnitlessNumber(theme.tokens.toggle.sizing.container.md.width) -
				getUnitlessNumber(theme.tokens.toggle.sizing.slider.md) -
				getSliderOffset(theme)}px;
		}
	}

	// DISABLED (and OFF) state
	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({ theme }): string => theme.tokens.color.text.quaternary};
		}
		// Container
		+ label::before {
			background-color: ${({ theme }): string =>
				theme.tokens.toggle.color.background.container.offDisabled};
			border-color: ${({ theme }): string =>
				theme.tokens.toggle.color.border.container.offDisabled};
		}
	}

	// DISABLED and ON state
	input:disabled:checked {
		// Container
		+ label::before {
			border-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primaryDisabled};
			background-color: ${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primaryDisabled};
		}
	}
`
