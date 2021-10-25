import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { TextColor } from '../..'
import { ColorTheme } from '../../types/ColorTheme'
import { IconAlignment } from '../../types/IconAlignment'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { Icon } from '../Icon'

interface StyledLinkProps {
	colorTheme?: ColorTheme
	$color?: TextColor
	bold?: boolean
	noUnderline?: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
	text-decoration: ${({ noUnderline }): string =>
		noUnderline ? ' none' : 'underline'};
	color: ${({ colorTheme, $color, theme }): string =>
		colorTheme
			? theme.$pc.colors[colorTheme].dark
			: $color
			? theme.$pc.colors.text[$color]
			: theme.$pc.colors.primary.dark};
	cursor: pointer;
	${({ bold }): string => (bold ? 'font-weight: 500;' : '')}

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
	colorTheme?: ColorTheme
	color?: TextColor
}

export const styledIconCss = css<StyledIconCssProps>`
	path {
		fill: ${({ colorTheme, color, theme }): string =>
			colorTheme
				? theme.$pc.colors[colorTheme].dark
				: color
				? theme.$pc.colors.text[color]
				: theme.$pc.colors.primary.dark};
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
