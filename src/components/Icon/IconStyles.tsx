import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { getSpacingCssValue, Spacing } from '../../types/Spacing'
import { getColorBasedOnColorThemeAndLightness } from '../../utils/colors'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledIconProps {
	$size: Spacing | CSSValue
	colorTheme?: ColorTheme
	secondary?: boolean
}

export const StyledIconContainer = styled.span<StyledIconProps>`
	display: inline-flex;

	${({ $size, theme }): FlattenSimpleInterpolation => css`
		width: ${getSpacingCssValue(theme, $size)};
		height: ${getSpacingCssValue(theme, $size)};
	`}

	${marginCss}

	${({ theme, colorTheme, secondary }): FlattenSimpleInterpolation | undefined =>
		colorTheme || typeof secondary !== 'undefined'
			? css`
					path {
						fill: ${getColorBasedOnColorThemeAndLightness(
							theme,
							colorTheme,
							secondary
						)};
					}
			  `
			: undefined}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
