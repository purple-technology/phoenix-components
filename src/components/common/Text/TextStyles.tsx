import { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../../types/ComponentSize'
import { TextColor } from '../../../types/TextColor'
import { marginCss, paddingCss } from '../Spacing/SpacingStyles'
import { TextAlignProp } from './CommonTextProps'

export interface StyledTextParagraphProps extends TextAlignProp {
	$size: ComponentSizeSmallMediumLarge | string | number
	$color: TextColor
	colorTheme?: ColorTheme
	bold?: boolean
}

const TextAlignLogicalAttributes = {
	left: 'start',
	center: 'center',
	right: 'end',
	justify: 'justify'
}

export const textAlignCss = css<TextAlignProp>`
	${({ textAlign }): FlattenSimpleInterpolation | undefined => {
		if (!textAlign) return undefined
		return css`
			text-align: ${TextAlignLogicalAttributes[textAlign]};
		`
	}}
`

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

	${textAlignCss}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
