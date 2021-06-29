import styled from 'styled-components'

import { Spacing } from '../../types/Spacing'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { SpacerProps } from '.'

export const StyledSpacer = styled.div<SpacerProps>`
	// Width
	${({ w, theme }): string | undefined => {
		if (w && Spacing.includes(w as Spacing)) {
			return `width: ${theme.$pc.spacing[w as Spacing]}px;`
		} else if (w) {
			return `width: ${w};`
		}
	}}

	// Height
	${({ h, theme }): string | undefined => {
		if (h && Spacing.includes(h as Spacing)) {
			return `height: ${theme.$pc.spacing[h as Spacing]}px;`
		} else if (h) {
			return `height: ${h};`
		}
	}}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
