import SVG from 'react-inlinesvg'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { Spacing } from '../../types/Spacing'
import { getColorBasedOnColorThemeAndLightness } from '../../utils/colors'
import { marginCss } from '../common/Spacing/SpacingStyles'
import { isSpacing } from '../common/Spacing/utils'

interface StyledIconProps {
	$size: Spacing | string | number
	colorTheme?: ColorTheme
	light?: boolean
}

export const StyledIconContainer = styled.span<StyledIconProps>`
	display: inline-flex;

	${({ $size, theme }): string => {
		if (isSpacing($size)) {
			return `
				width: ${theme.$pc.spacing[$size]}px;
				height: ${theme.$pc.spacing[$size]}px;
			`
		} else if (typeof $size === 'number') {
			return `
				width: ${$size}px;
				height: ${$size}px;
			`
		}
		return `
				width: ${$size};
				height: ${$size};
			`
	}}

	${marginCss}

	${({ theme, colorTheme, light }): FlattenSimpleInterpolation | undefined =>
		colorTheme || typeof light !== 'undefined'
			? css`
					path {
						fill: ${getColorBasedOnColorThemeAndLightness(
							theme,
							colorTheme,
							light
						)};
					}
			  `
			: undefined}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
