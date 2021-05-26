import styled from 'styled-components'
import { Checkbox as BPCheckbox } from '@blueprintjs/core'

import checkmark from '../../icons/check.svg'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'
import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'

export const StyledCheckbox = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: ${props => props.theme.borderRadius[ComponentSize.SMALL]};
	}

	label::after {
		background: url(${checkmark});
		background-size: 100% 100%;
		${({ componentSize }) =>
			componentSize === ComponentSize.LARGE
				? `
			height: 11px;
			width: 16px;
			left: 4px;
			top: 6px;
		`
				: `
			height: 10px;
			width: 12px;
			left: 4px;
			top: 5px;
		`}
	}

	input:checked + label::before {
		border: ${({ componentSize, theme }) =>
				`${theme.checkboxRadio.size[componentSize] / 2}px`}
			solid ${({ theme, colorTheme }) => theme.colors[colorTheme].dark};
	}
`

interface StyledBPCheckboxProps {
	colorTheme: ColorTheme
	componentSize: ComponentSize
}
