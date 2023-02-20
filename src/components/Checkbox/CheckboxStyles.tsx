import styled, {
	css,
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps
} from 'styled-components'

import checkmark from '../../images/check.svg'
import { getUnitlessNumber } from '../../tokens/helpers'
import { left } from '../../utils/rtl'
import { CommonStyledCheckboxRadio } from '../common/CheckboxRadio/CheckboxRadioStyles'

export const StyledCheckbox = styled(CommonStyledCheckboxRadio)`
	label::before {
		border-radius: ${(props): string =>
			props.theme.tokens.inputButton.borderRadius.xs};
	}

	label::after {
		background: url(${checkmark});
		background-size: 100% 100%;
		${({ theme, size }): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
			width: ${getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) / 2 +
			2}px;
			height: ${getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) /
			2}px;
			top: ${getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) / 4}px;
			${left(
				`${
					getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) / 4 - 1
				}px`
			)};
		`}
	}

	input:checked + label::before {
		border: ${({ theme, size }): string =>
				`${getUnitlessNumber(theme.tokens.checkboxRadio.sizing[size]) / 2}px`}
			solid
			${({ theme, colorTheme }): string =>
				theme.tokens.color.background[colorTheme].primary};
	}
`
