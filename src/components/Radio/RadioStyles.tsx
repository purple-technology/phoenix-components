import styled from 'styled-components'

import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({ theme, size }): string =>
				`${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 4 + 1}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
