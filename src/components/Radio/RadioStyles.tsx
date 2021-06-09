import styled from 'styled-components'

import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({ size, theme }): string =>
				`${theme.checkboxRadio.size[size] / 4 + 1}px`}
			solid ${({ theme, colorTheme }): string => theme.colors[colorTheme].dark};
	}
`
