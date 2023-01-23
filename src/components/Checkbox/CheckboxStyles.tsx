import styled, {
	css,
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps
} from 'styled-components'

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
		${({ theme, size }): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
			width: ${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 2 + 2}px;
			height: ${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 2}px;
			top: ${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 4}px;
			${left(
				`${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 4 - 1}px`
			)};
		`}
	}

	input:checked + label::before {
		border: ${({ theme, size }): string =>
				`${parseInt(theme.tokens.checkboxRadio.sizing[size], 10) / 2}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
