import { css } from 'styled-components'

import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../../types/ComponentSize'
import { TextColor } from '../../../types/TextColor'

export interface StyledTextParagraphProps {
	$size: ComponentSizeSmallMediumLarge | string
	$color: TextColor
	colorTheme?: ColorTheme
	bold?: boolean
}

export const commonTextStyles = css<StyledTextParagraphProps>`
	font-size: ${({ theme, $size }): string =>
		ComponentSizeSmallMediumLarge.includes($size)
			? `${theme.$pc.text.size[$size as ComponentSizeSmallMediumLarge]}px`
			: $size};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	${({ colorTheme, $color, theme }): string => {
		if (colorTheme) {
			return `color: ${theme.$pc.colors[colorTheme].dark};`
		}
		return `color: ${theme.$pc.colors.text[$color]};`
	}}
`
