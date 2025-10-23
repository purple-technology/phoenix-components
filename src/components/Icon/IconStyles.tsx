import SVG from 'react-inlinesvg'
import styled, { css, RuleSet } from 'styled-components'

import { getTextColor } from '../../tokens/helpers'
import { Color, ColorTheme } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { PhoenixIcons } from '../../types/PhoenixIcons'
import { getSpacingCssValue, Spacing } from '../../types/Spacing'
import { isPhoenixIconColored } from '../../utils/icons'
import { MarginProps } from '../common/Spacing/MarginProps'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledIconProps {
	size: Spacing | CSSValue
	color?: Color
	icon: PhoenixIcons
}

export const StyledIconContainer = styled.span<StyledIconProps & MarginProps>`
	display: inline-flex;

	${({ size, theme }): RuleSet => css`
		width: ${getSpacingCssValue(theme, size)};
		height: ${getSpacingCssValue(theme, size)};
	`}

	${marginCss}

	${({ theme, color, icon }): RuleSet | undefined => {
		if (isPhoenixIconColored(icon)) {
			const colorTheme = icon.split('-').slice(-1)[0] as ColorTheme

			return css`
				path[id^='primary'] {
					fill: ${theme.tokens.color.text[colorTheme].primary};
				}
				path[id^='secondary'] {
					fill: ${theme.tokens.color.background[colorTheme].secondary};
				}
			`
		}
		if (color) {
			return css`
				path {
					fill: ${getTextColor()};
				}
			`
		}
	}}
`

export const StyledIcon = styled(SVG)`
	width: 100%;
	height: 100%;
`
