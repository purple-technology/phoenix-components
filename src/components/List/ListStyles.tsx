import SVG from 'react-inlinesvg'
import styled, { css } from 'styled-components'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { TextColor } from '../../types/TextColor'
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
	$color: TextColor
	$size: ComponentSizeSmallMediumLarge | string | number
}

export const StyledListItem = styled.li<StyledListItemProps>`
	font-size: ${({ theme, $size }): string =>
		ComponentSizeSmallMediumLarge.includes(
			$size as ComponentSizeSmallMediumLarge
		)
			? `${theme.$pc.text.size[$size as ComponentSizeSmallMediumLarge]}px`
			: typeof $size === 'number'
			? `${$size}px`
			: $size};

	color: ${({ $color, theme }): string => theme.$pc.colors.text[$color]};
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

	${({ theme, icon, bulletColor, colorTheme }): string =>
		!isPhoenixIconColored(icon ?? undefined)
			? `
					path {
						fill: ${
							colorTheme
								? theme.$pc.colors[colorTheme].dark
								: bulletColor
								? theme.$pc.colors.text[bulletColor]
								: theme.$pc.colors.text.dark
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
