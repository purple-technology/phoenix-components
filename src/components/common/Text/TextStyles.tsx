import { css } from 'styled-components'

import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../../types/ComponentSize'
import { TextColor } from '../../../types/TextColor'
import { marginCss, paddingCss } from '../Spacing/SpacingStyles'

export interface StyledTextParagraphProps {
	$size: ComponentSizeSmallMediumLarge | string | number
	$color: TextColor
	colorTheme?: ColorTheme
	bold?: boolean
}

export const commonTextStyles = css<StyledTextParagraphProps>`
	font-size: ${({ theme, $size }): string =>
		ComponentSizeSmallMediumLarge.includes(
			$size as ComponentSizeSmallMediumLarge
		)
			? `${theme.$pc.text.size[$size as ComponentSizeSmallMediumLarge]}px`
			: typeof $size === 'number'
			? `${$size}px`
			: $size};
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
	${({ colorTheme, $color, theme }): string => {
		if (colorTheme) {
			return `color: ${theme.$pc.colors[colorTheme].dark};`
		}
		return `color: ${theme.$pc.colors.text[$color]};`
	}}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
