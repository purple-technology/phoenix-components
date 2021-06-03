import styled from 'styled-components'

import { ColorTheme } from '../../theme/ColorTheme'
import { ParagraphSizes } from '.'

interface StyledParagraphProps {
	size: ParagraphSizes
	colorTheme?: ColorTheme
	bold?: boolean
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
	font-size: ${({ size }): string => `${size}px`};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	line-height: 1.4;
	${({ colorTheme, theme }): string => {
		if (!colorTheme) return ''
		return `color: ${theme.colors[colorTheme].dark};`
	}}
	margin: 0;
`
