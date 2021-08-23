import styled from 'styled-components'

import checkmark from '../../images/check.svg'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledCheckbox = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: ${(props): string => props.theme.$pc.borderRadius['small']};
	}

	label::after {
		background: url(${checkmark});
		background-size: 100% 100%;
		${({ size }): string =>
			size === 'large'
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
		border: ${({ size, theme }): string =>
				`${theme.$pc.checkboxRadio.size[size] / 2}px`}
			solid
			${({ theme, colorTheme }): string => theme.$pc.colors[colorTheme].dark};
	}
`
