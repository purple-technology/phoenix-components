import styled, { css, type RuleSet } from 'styled-components'

import { getLineHeightUnitless, getUnitlessNumber } from '../../tokens/helpers'
import type { ColorTheme } from '../../types/Color'
import type { SizingSmMd } from '../../types/Sizing'
import type { MarginProps } from '../common/Spacing/MarginProps'
import { marginCss } from '../common/Spacing/SpacingStyles'

export interface StyledTagProps extends MarginProps {
	colorTheme: ColorTheme
	size: SizingSmMd
	secondary?: boolean
	outline?: boolean
}

export const StyledTag = styled.div<StyledTagProps>`
	border-radius: ${({ theme }): string => theme.tokens.tag.borderRadius};

	${({ secondary, outline, colorTheme, theme: { tokens } }): RuleSet => {
		if (outline) {
			return css`
				border: ${tokens.tag.borderWidth} solid
					${tokens.color.border[colorTheme].primary};
				color: ${tokens.color.text[colorTheme].primary};
			`
		} else if (secondary) {
			return css`
				background: ${tokens.color.background[colorTheme].secondary};
				color: ${tokens.color.text[colorTheme].primary};
			`
		}
		return css`
			background: ${tokens.color.background[colorTheme].primary};
			color: #fff;
		`
	}}

	font-size: ${({ size, theme }): string => theme.tokens.tag.fontSize[size]};
	font-weight: ${({ theme }): string => theme.tokens.tag.fontWeight};
	line-height: ${({ theme }): number =>
		getLineHeightUnitless(theme.tokens.ref.lineHeight.sm)};
	min-height: ${({ size, theme }): string =>
		theme.tokens.tag.sizing.height[size]};
	padding: ${({ size, outline, theme: { tokens } }): string =>
		`${
			(
				getUnitlessNumber(tokens.tag.sizing.height[size]) -
					getUnitlessNumber(tokens.tag.fontSize[size]) *
						getLineHeightUnitless(tokens.ref.lineHeight.sm)
			) /
				2 -
			(outline ? getUnitlessNumber(tokens.tag.borderWidth) : 0)
		}px ${tokens.tag.spacing.x[size]};`};
	display: inline-block;
	white-space: nowrap;
	text-align: center;
	cursor: default;

	${marginCss}
`
