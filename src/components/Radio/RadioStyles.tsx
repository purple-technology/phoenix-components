import styled from 'styled-components'

import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({ theme }): string =>
				`${parseInt(theme.tokens.checkboxRadio.sizing.base, 10) / 4 + 1}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
