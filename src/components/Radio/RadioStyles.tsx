import styled from 'styled-components'

import { getUnitlessNumber } from '../../tokens/helpers'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({ theme, size }): string =>
				`${
					getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) / 4 + 1
				}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
