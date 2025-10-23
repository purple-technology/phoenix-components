import { css, DefaultTheme, RuleSet } from 'styled-components'

import { CSSValue } from '../../../types/CSSValue'
import { getSpacingCssValue, Spacing } from '../../../types/Spacing'
import { MarginProps } from '../../common/Spacing/MarginProps'
import { PaddingProps } from '../../common/Spacing/PaddingProps'

/**
 * Returns correct padding/margin in a specific direction based on values of padding/margin for a specific direction,
 * if not defined then horizontal or vertical direction, if not defined then general padding/margin, and if not
 * defined then zero (0).
 * @param theme
 * @param spacingSingleDirection Padding/margin in a specific direction (top, left, right or bottom) - 1st priority
 * @param spacingXY Padding/margin in horizontal or vertical direction - 2nd priority
 * @param spacing General padding/margin - 3rd priority
 * @returns string
 */
const getSpacing = (
	theme: DefaultTheme,
	spacingSingleDirection?: Spacing | CSSValue,
	spacingXY?: Spacing | CSSValue,
	spacing?: Spacing | CSSValue
): string => {
	if (typeof spacingSingleDirection !== 'undefined') {
		return getSpacingCssValue(theme, spacingSingleDirection)
	} else if (typeof spacingXY !== 'undefined') {
		return getSpacingCssValue(theme, spacingXY)
	} else if (typeof spacing !== 'undefined') {
		return getSpacingCssValue(theme, spacing)
	}
	return '0'
}

export const paddingCss = css<PaddingProps>`
	${({ theme, pt, pb, pl, pr, px, py, p }): RuleSet => {
		const top = getSpacing(theme, pt, py, p)
		const right = getSpacing(theme, pr, px, p)
		const bottom = getSpacing(theme, pb, py, p)
		const left = getSpacing(theme, pl, px, p)
		return css`
			padding-top: ${top};
			padding-bottom: ${bottom};
			padding-inline-start: ${left};
			padding-inline-end: ${right};
		`
	}}
`

export const marginCss = css<MarginProps>`
	${({ theme, mt, mb, ml, mr, mx, my, m }): RuleSet => {
		const top = getSpacing(theme, mt, my, m)
		const right = getSpacing(theme, mr, mx, m)
		const bottom = getSpacing(theme, mb, my, m)
		const left = getSpacing(theme, ml, mx, m)
		return css`
			margin-top: ${top};
			margin-bottom: ${bottom};
			margin-inline-start: ${left};
			margin-inline-end: ${right};
		`
	}}
`
