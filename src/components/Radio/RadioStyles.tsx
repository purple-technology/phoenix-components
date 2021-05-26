import styled, { DefaultTheme } from 'styled-components'

import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	//label::after {
	//	border-radius: 100%;
	//	width: 10px;
	//	height: 10px;
	//	background: white;
	//	top: 5px;
	//	left: 5px;
	//	transition: transform .15s .15s;
	//	transform: scale(.7);
	//}

	input:checked + label::before {
		border: ${({ componentSize, theme }) =>
				`${theme.checkboxRadio.size[componentSize] / 4 + 1}px`}
			solid ${({ theme, colorTheme }) => theme.colors[colorTheme].dark};
	}

	//input:checked + label::after {
	//	transform: scale(1);
	//	transition: transform .15s .15s;
	//}
`
