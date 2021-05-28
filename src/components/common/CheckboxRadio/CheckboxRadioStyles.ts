import styled from 'styled-components'

import { ComponentSizeMediumLarge } from '../../../enum/ComponentSize'
import { ColorTheme } from '../../../theme/ColorTheme'

export interface CommonStyledCheckboxRadioProps {
	colorTheme: ColorTheme
	componentSize: ComponentSizeMediumLarge
}

export const CommonStyledCheckboxRadio = styled.div<CommonStyledCheckboxRadioProps>`
	input {
		position: absolute;
		width: 1px;
		height: 1px;
		//visibility: hidden;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: ${({ componentSize, theme }): string =>
			`${(theme.checkboxRadio.size[componentSize] - 16) / 2}px`};
		padding-left: ${({ componentSize, theme }): string =>
			`${theme.checkboxRadio.size[componentSize] + 8}px`};
		min-height: ${({ componentSize, theme }): string =>
			`${theme.checkboxRadio.size[componentSize]}px`};
		user-select: none;
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	/* Outer box of the fake checkbox/radio */
	label::before {
		height: ${({ componentSize, theme }): string =>
			`${theme.checkboxRadio.size[componentSize]}px`};
		width: ${({ componentSize, theme }): string =>
			`${theme.checkboxRadio.size[componentSize]}px`};
		border: 1px solid ${(props): string => props.theme.colors.borderInput};
		background: #fff;
		top: 0;
		left: 0;
		transition: box-shadow 0.2s, background-color 0.2s, border 0.15s;
		box-shadow: 0 0 0 0 ${({ theme }): string => theme.colors.focus},
			1px 1px 4px rgba(0, 0, 0, 0.25);
	}

	/* Checkmark/circle of the fake checkbox/radio */
	label::after {
		//opacity: 0;
	}

	label:hover::before {
		border: 1px solid ${(props): string => props.theme.colors.borderInputHover};
	}

	input:checked + label::after {
		//opacity: 1;
	}

	/* Adding focus styles on the outer-box of the fake checkbox */
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }): string => theme.colors.focus},
			0 0 0 rgba(0, 0, 0, 0.25);
	}
`
