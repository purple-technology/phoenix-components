import styled from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { MarginProps } from '../common/Spacing/MarginProps'
import { marginCss } from '../common/Spacing/SpacingStyles'

interface StyledDividerProps extends MarginProps {
	$height: number
	colorTheme?: ColorTheme
}

export const StyledDivider = styled.hr<StyledDividerProps>`
	height: ${({ $height }): number => $height}px;
	background: ${({ colorTheme, theme }): string =>
		colorTheme
			? theme.tokens.color.border[colorTheme].primary
			: theme.tokens.color.border.secondary};
	border: none;

	${marginCss}
`
