import { css, DefaultTheme } from 'styled-components'

import { Spacing } from '../../../types/Spacing'
import { MarginProps } from '../../common/Spacing/MarginProps'
import { PaddingProps } from '../../common/Spacing/PaddingProps'

/**
 * Returns correct padding in a specific direction based on values of padding for a specific direction,
 * if not defined then horizontal or vertical direction, if not defined then general padding, and if not
 * defined then zero (0).
 * @param theme
 * @param spacingSingleDirection Padding in a specific direction (top, left, right or bottom) - 1st priority
 * @param spacingXY Padding in horizontal or vertical direction - 2nd priority
 * @param spacing General padding - 3rd priority
 * @returns string
 */
const getSpacing = (
	theme: DefaultTheme,
	spacingSingleDirection?: Spacing | string,
	spacingXY?: Spacing | string,
	spacing?: Spacing | string
): string => {
	if (
		spacingSingleDirection &&
		Spacing.includes(spacingSingleDirection as Spacing)
	) {
		return `${theme.$pc.spacing[spacingSingleDirection as Spacing]}px`
	} else if (spacingSingleDirection) {
		return spacingSingleDirection
	} else if (spacingXY && Spacing.includes(spacingXY as Spacing)) {
		return `${theme.$pc.spacing[spacingXY as Spacing]}px`
	} else if (spacingXY) {
		return spacingXY
	} else if (spacing && Spacing.includes(spacing as Spacing)) {
		return `${theme.$pc.spacing[spacing as Spacing]}px`
	} else if (spacing) {
		return spacing
	}
	return '0'
}

export const paddingCss = css<PaddingProps>`
	${({ theme, pt, pb, pl, pr, px, py, p }): string => {
		const top = getSpacing(theme, pt, py, p)
		const right = getSpacing(theme, pr, px, p)
		const bottom = getSpacing(theme, pb, py, p)
		const left = getSpacing(theme, pl, px, p)
		return `padding: ${top} ${right} ${bottom} ${left};`
	}}
`

export const marginCss = css<MarginProps>`
	${({ theme, mt, mb, ml, mr, mx, my, m }): string => {
		const top = getSpacing(theme, mt, my, m)
		const right = getSpacing(theme, mr, mx, m)
		const bottom = getSpacing(theme, mb, my, m)
		const left = getSpacing(theme, ml, mx, m)
		return `margin: ${top} ${right} ${bottom} ${left};`
	}}
`
