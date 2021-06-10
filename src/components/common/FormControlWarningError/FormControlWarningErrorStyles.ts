import styled from 'styled-components'

import { ColorTheme } from '../../../enum/ColorTheme'
import errorIcon from '../../../icons/input-error.svg'
import warningIcon from '../../../icons/input-warning.svg'

interface WarningErrorTextProps {
	colorTheme: ColorTheme
}

export const WarningErrorText = styled.div<WarningErrorTextProps>`
	padding: 7px 0 1px 28px;
	color: ${({ theme, colorTheme }): string =>
		theme.$pc.colors[colorTheme].dark};
	background: ${({ colorTheme }): string =>
		`url(${
			colorTheme === ColorTheme.ERROR ? errorIcon : warningIcon
		}) 5px 6px / 16px 16px no-repeat`};
	font-size: 12px;
`
