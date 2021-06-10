import styled from 'styled-components'

import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledRadio = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({ size, theme }): string =>
				`${theme.$pc.checkboxRadio.size[size] / 4 + 1}px`}
			solid ${({ theme, colorTheme }): string => theme.$pc.colors[colorTheme].dark};
	}
`
