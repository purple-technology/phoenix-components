import React from 'react'
import styled from 'styled-components'

import errorIcon from '../../icons/input-error.svg'
import warningIcon from '../../icons/input-warning.svg'
import { ColorTheme } from '../../theme/ColorTheme'

interface WarningErrorTextProps {
	colorTheme: ColorTheme
}

export const WarningErrorText = styled.div<WarningErrorTextProps>`
	padding: 7px 0 1px 28px;
	color: ${({ theme, colorTheme }) => theme.colors[colorTheme].dark};
	background: ${({ colorTheme }) =>
		`url(${
			colorTheme === ColorTheme.ERROR ? errorIcon : warningIcon
		}) 5px 6px / 16px 16px no-repeat`};
	font-size: 12px;
`
