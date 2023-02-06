import SVG from 'react-inlinesvg'
import styled, {
	css,
	DefaultTheme,
	FlattenInterpolation,
	FlattenSimpleInterpolation,
	ThemedStyledProps
} from 'styled-components'

import { ColorAndTheme, getTextColor } from '../../tokens/helpers'
import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { getSpacingCssValue, Spacing } from '../../types/Spacing'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledIconProps {
	$size: Spacing | CSSValue
	$color?: Color
}

export const StyledIconContainer = styled.span<StyledIconProps>`
	display: inline-flex;

	${({ $size, theme }): FlattenSimpleInterpolation => css`
		width: ${getSpacingCssValue(theme, $size)};
		height: ${getSpacingCssValue(theme, $size)};
	`}

	${marginCss}

	${({
		$color
	}):
		| FlattenInterpolation<ThemedStyledProps<ColorAndTheme, DefaultTheme>>
		| undefined =>
		$color
			? css`
					path {
						fill: ${getTextColor()};
					}
			  `
			: undefined}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
