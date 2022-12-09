import { css, FlattenSimpleInterpolation } from 'styled-components'

import { getSpacingCssValue } from '../../types/Spacing'
import { GapProps } from './GapProps'

export const gapCss = css<GapProps>`
	${({ theme, gap, rowGap, columnGap }): FlattenSimpleInterpolation => {
		if (gap !== undefined) {
			return css`
				gap: ${gap};
			`
		}

		return css`
			row-gap: ${getSpacingCssValue(theme, rowGap)};
			column-gap: ${getSpacingCssValue(theme, columnGap)};
		`
	}}
`
