import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { getTextColor } from '../../tokens/helpers'
import { Color, ColorTheme, TextColor } from '../../types/Color'
import { IconAlignment } from '../../types/IconAlignment'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'

interface StyledLinkProps {
	$color?: Color
	bold?: boolean
	noUnderline?: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
	text-decoration: ${({ noUnderline }): string =>
		noUnderline ? ' none' : 'underline'};
	color: ${getTextColor(true)};
	cursor: pointer;
	${({ bold, theme }): string =>
		bold ? `font-weight: ${theme.tokens.ref.fontWeight.bold};` : ''}

	&:hover,
	&:active,
	&:focus {
		text-decoration: ${({ noUnderline }): string =>
			noUnderline ? 'underline' : 'none'};
	}

	${marginCss}
	${paddingCss}
`

interface StyledIconCssProps {
	color?: Color
}

export const styledIconCss = css<StyledIconCssProps>`
	path {
		fill: ${({ color, theme }): string =>
			color
				? color in ColorTheme
					? theme.tokens.color.text[color as ColorTheme].primary
					: color in TextColor
					? theme.tokens.color.text[color as TextColor]
					: color
				: theme.tokens.color.text.brand.primary};
	}
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
`

export const StyledCustomIcon = styled(SVG)`
	${styledIconCss}
`

export const StyledIcon = styled(Icon)`
	${styledIconCss}
`

interface LinkTextProps {
	icon?: boolean
	iconAlignment?: IconAlignment
}

export const LinkText = styled.span<LinkTextProps>`
	${({
		children,
		icon,
		iconAlignment
	}): FlattenSimpleInterpolation | undefined =>
		children && icon
			? iconAlignment === 'left'
				? css`
						margin-inline-start: 0.4em;
				  `
				: css`
						margin-inline-end: 0.4em;
				  `
			: undefined}
`
