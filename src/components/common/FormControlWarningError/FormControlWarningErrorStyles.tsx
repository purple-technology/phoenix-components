import styled from 'styled-components'

import { ColorTheme } from '../../../types/ColorTheme'
import { left } from '../../../utils/rtl'
import { Icon } from '../../Icon'

interface WarningErrorTextProps {
	colorTheme: ColorTheme
}

export const WarningErrorText = styled.div<WarningErrorTextProps>`
	position: relative;
	padding-inline-start: 28px;
	padding-inline-end: 0;
	padding-top: 7px;
	padding-bottom: 1px;
	color: ${({ theme, colorTheme }): string =>
		theme.$pc.colors[colorTheme].dark};
	font-size: 12px;
	line-height: 1.2;
`

export const StyledIcon = styled(Icon)`
	position: absolute;
	top: 6px;
	${left('5px')}
`
