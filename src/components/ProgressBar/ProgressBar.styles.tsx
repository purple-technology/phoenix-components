import styled from 'styled-components'

import { ColorTheme, isColorTheme } from '../../types/Color'
import { CSSColor } from '../../types/CSSValue'
import { marginCss } from '../common/Spacing/SpacingStyles'

export const Wrapper = styled.div`
	background-color: ${({ theme }): string =>
		theme.tokens.color.background.tertiary};
	border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.pill};
	height: 9px;

	${marginCss};
`

export interface ProgressBarStyledProps {
	$value?: number
	$color?: ColorTheme | CSSColor
}

export const Progress = styled.div<ProgressBarStyledProps>`
	background: ${({ theme, $color }): string =>
		!$color
			? theme.tokens.color.background.brand.primary
			: isColorTheme($color)
			? theme.tokens.color.background[$color].primary
			: $color};
	border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.pill};
	width: ${({ $value }): string => ($value ? `${$value}%` : '0%')};
	height: 100%;
	transition: width
		${({ theme }): string => theme.tokens.duration.transition.base};
`
