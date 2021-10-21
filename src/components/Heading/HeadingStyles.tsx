import styled from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { TextColor } from '../../types/TextColor'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { textAlignCss } from '../common/Text/TextStyles'
import { HeadingSizes } from '.'

interface StyledHeadingProps extends TextAlignProp {
	as: HeadingSizes
	size?: string | number
	bold?: boolean
	colorTheme?: ColorTheme
	$color: TextColor
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
	font-size: ${({ size, theme, as }): string =>
		size
			? typeof size === 'number'
				? `${size}px`
				: size
			: `${theme.$pc.heading.size[as]}px`};
	font-weight: ${({ as, bold }): number =>
		bold === false || (typeof bold === 'undefined' && as === 'h1') ? 400 : 500};
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
