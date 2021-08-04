import styled from 'styled-components'

import { ColorTheme } from '../../../types/ColorTheme'
import { Icon } from '../../Icon'

interface WarningErrorTextProps {
	colorTheme: ColorTheme
}

export const WarningErrorText = styled.div<WarningErrorTextProps>`
	position: relative;
	padding: 7px 0 1px 28px;
	color: ${({ theme, colorTheme }): string =>
		theme.$pc.colors[colorTheme].dark};
	font-size: 12px;
	line-height: 1.2;
`

export const StyledIcon = styled(Icon)`
	position: absolute;
	top: 6px;
	left: 5px;
`
