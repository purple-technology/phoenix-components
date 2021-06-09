import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSizeSmallMediumLarge,
	ComponentSizeSmallMediumLargeValues
} from '../../enum/ComponentSize'

interface StyledParagraphProps {
	$size: ComponentSizeSmallMediumLarge | string
	colorTheme?: ColorTheme
	bold?: boolean
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
	font-size: ${({ theme, $size }): string =>
		ComponentSizeSmallMediumLargeValues.includes($size)
			? `${theme.text.size[$size as ComponentSizeSmallMediumLarge]}px`
			: $size};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	line-height: 1.4;
	${({ colorTheme, theme }): string => {
		if (!colorTheme) return ''
		return `color: ${theme.colors[colorTheme].dark};`
	}}
	margin: 0;
`
