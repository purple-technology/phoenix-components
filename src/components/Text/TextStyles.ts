import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSizeSmallMediumLarge,
	ComponentSizeSmallMediumLargeValues
} from '../../enum/ComponentSize'

interface StyledTextProps {
	$size: ComponentSizeSmallMediumLarge | string
	colorTheme?: ColorTheme
	bold?: boolean
}

export const StyledText = styled.div<StyledTextProps>`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: ${({ theme, $size }): string =>
		ComponentSizeSmallMediumLargeValues.includes($size)
			? `${theme.text.size[$size as ComponentSizeSmallMediumLarge]}px`
			: $size};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	${({ colorTheme, theme }): string => {
		if (!colorTheme) return ''
		return `color: ${theme.colors[colorTheme].dark};`
	}}
`
