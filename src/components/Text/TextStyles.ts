import styled from 'styled-components'

import { ColorTheme } from '../../theme/ColorTheme'
import { TextSizes } from '.'

interface StyledTextProps {
	$size: TextSizes
	colorTheme?: ColorTheme
	bold?: boolean
}

export const StyledText = styled.div<StyledTextProps>`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: ${({ $size }): string => `${$size}px`};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	${({ colorTheme, theme }): string => {
		if (!colorTheme) return ''
		return `color: ${theme.colors[colorTheme].dark};`
	}}
`
