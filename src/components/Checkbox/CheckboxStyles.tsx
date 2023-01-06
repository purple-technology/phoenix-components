import styled from 'styled-components'

import checkmark from '../../images/check.svg'
import { left } from '../../utils/rtl'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledCheckbox = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: ${(props): string => props.theme.tokens.ref.borderRadius.sm};
	}

	label::after {
		background: url(${checkmark});
		background-size: 100% 100%;
		height: 10px;
		width: 12px;
		top: 5px;
		${left('4px')}
	}

	input:checked + label::before {
		border: ${({ theme }): string =>
				`${parseInt(theme.tokens.checkboxRadio.sizing.md, 10) / 2}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
