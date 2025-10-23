import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { getTextColor } from '../../tokens/helpers'
import { Color, isColorTheme, isTextColor } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { isSizing, Sizing } from '../../types/Sizing'
import { isPhoenixIconColored } from '../../utils/icons'
import { MarginProps } from '../common/Spacing/MarginProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'
import { ListItemIconProps } from './ListItemIcon'

export const StyledList = styled.ul`
	${marginCss}
	${paddingCss}
`

interface StyledListItemProps extends MarginProps {
	$color: Color
	$size: Sizing | CSSValue
}

export const StyledListItem = styled.li<StyledListItemProps>`
	font-size: ${({ theme, $size }): string =>
		isSizing($size)
			? theme.tokens.textParagraph.fontSize[$size]
			: typeof $size === 'number'
				? `${$size}px`
				: $size};

	color: ${getTextColor()};
	list-style-type: none;
	position: relative;
	padding-inline-start: 1.9em;
	${marginCss}
`

export const styledIconCss = css<ListItemIconProps>`
	width: 1.3em;
	height: 1.3em;
	position: absolute;
	left: 0;
	top: -0.1em;

	[dir='rtl'] & {
		right: 0;
		left: initial;
	}

	${({ theme, icon, bulletColor }): string =>
		!isPhoenixIconColored(icon ?? undefined)
			? `
					path {
						fill: ${
							bulletColor
								? isColorTheme(bulletColor)
									? theme.tokens.color.text[bulletColor].primary
									: isTextColor(bulletColor)
										? theme.tokens.color.text[bulletColor]
										: bulletColor
								: theme.tokens.color.text.secondary
						};
					}
			  `
			: ''}
`

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`
