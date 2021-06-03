import styled from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import checkmark from '../../icons/check.svg'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledCheckbox = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: ${(props): string =>
			props.theme.borderRadius[ComponentSize.SMALL]};
	}

	label::after {
		background: url(${checkmark});
		background-size: 100% 100%;
		${({ componentSize }): string =>
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
		border: ${({ componentSize, theme }): string =>
				`${theme.checkboxRadio.size[componentSize] / 2}px`}
			solid ${({ theme, colorTheme }): string => theme.colors[colorTheme].dark};
	}
`
