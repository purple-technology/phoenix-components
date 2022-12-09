import styled from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { SizingSmMd } from '../../types/Sizing'
import { marginCss } from '../common/Spacing/SpacingStyles'

export interface StyledTagProps {
	colorTheme: ColorTheme
	size: SizingSmMd
	secondary?: boolean
	outline?: boolean
}

export const StyledTag = styled.div<StyledTagProps>`
	border-radius: 100px;
	background: ${({ colorTheme, theme }): string =>
		theme.tokens.color.background[colorTheme].secondary};
	color: ${({ colorTheme, theme }): string =>
		theme.tokens.color.text[colorTheme].primary};
	font-size: ${({ size, theme }): string => theme.tokens.tag.fontSize[size]};
	min-height: ${({ size, theme }): string =>
		theme.tokens.tag.sizing.height[size]};
	padding: ${({ size, theme }): string =>
		`${
			(parseInt(theme.tokens.tag.sizing.height[size], 10) -
				parseInt(theme.tokens.tag.fontSize[size], 10) * 1.4) /
			2
		}px ${theme.tokens.tag.spacing.x[size]};`};
	display: inline-block;
	white-space: nowrap;
	text-align: center;
	cursor: default;

	${marginCss}
`
