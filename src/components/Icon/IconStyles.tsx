import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { getTextColor } from '../../tokens/helpers'
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

	path {
		fill: ${getTextColor()};
	}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
