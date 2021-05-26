import styled from 'styled-components'
import { ColorTheme } from '../../../theme/ColorTheme'
import { ComponentSize } from '../../../enum/ComponentSize'

export interface CommonStyledCheckboxRadioProps {
	colorTheme: ColorTheme
	componentSize: ComponentSize
}

export const CommonStyledCheckboxRadio = styled.div<
	CommonStyledCheckboxRadioProps
>`
	input {
		position: absolute;
		width: 1px;
		height: 1px;
		//visibility: hidden;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: ${({ componentSize, theme }) =>
			`${(theme.checkboxRadio.size[componentSize] - 16) / 2}px`};
		padding-left: ${({ componentSize, theme }) =>
			`${theme.checkboxRadio.size[componentSize] + 8}px`};
		min-height: ${({ componentSize, theme }) =>
			`${theme.checkboxRadio.size[componentSize]}px`};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	/* Outer box of the fake checkbox/radio */
	label::before {
		height: ${({ componentSize, theme }) =>
			`${theme.checkboxRadio.size[componentSize]}px`};
		width: ${({ componentSize, theme }) =>
			`${theme.checkboxRadio.size[componentSize]}px`};
		border: 1px solid ${props => props.theme.colors.borderInput};
		background: #fff;
		top: 0;
		left: 0;
		transition: box-shadow 0.2s, background-color 0.2s, border 0.15s;
		box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.focus},
			1px 1px 4px rgba(0, 0, 0, 0.25);
	}

	/* Checkmark/circle of the fake checkbox/radio */
	label::after {
		//opacity: 0;
	}

	label:hover::before {
		border: 1px solid ${props => props.theme.colors.borderInputHover};
	}

	input:checked + label::after {
		//opacity: 1;
	}

	/* Adding focus styles on the outer-box of the fake checkbox */
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus},
			0 0 0 rgba(0, 0, 0, 0.25);
	}
`
