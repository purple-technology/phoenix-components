import styled from 'styled-components'

import { ComponentSizeMediumLarge } from '../../../enum/ComponentSize'
import { ColorTheme } from '../../../theme/ColorTheme'

export interface CommonStyledCheckboxRadioProps {
	colorTheme: ColorTheme
	size: ComponentSizeMediumLarge
}

export const CommonStyledCheckboxRadio = styled.div<CommonStyledCheckboxRadioProps>`
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
			`${(theme.checkboxRadio.size[size] - 16) / 2}px`};
		padding-left: ${({ size, theme }): string =>
			`${theme.checkboxRadio.size[size] + 8}px`};
		min-height: ${({ size, theme }): string =>
			`${theme.checkboxRadio.size[size]}px`};
		user-select: none;
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	// Outer box of the fake checkbox/radio
	label::before {
		height: ${({ size, theme }): string =>
			`${theme.checkboxRadio.size[size]}px`};
		width: ${({ size, theme }): string =>
			`${theme.checkboxRadio.size[size]}px`};
		border: 1px solid ${(props): string => props.theme.colors.borderInput};
		background: #fff;
		top: 0;
		left: 0;
		transition: box-shadow 0.2s, background-color 0.2s, border 0.15s;
		box-shadow: 0 0 0 0 ${({ theme }): string => theme.colors.focus};
	}

	label:hover::before {
		border: 1px solid ${(props): string => props.theme.colors.borderInputHover};
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }): string => theme.colors.focus};
	}
`
