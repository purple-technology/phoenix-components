import styled from 'styled-components'

import { Spacing } from '../../types/Spacing'

interface StyledSpacerProps {
	$x?: Spacing | string
	$y?: Spacing | string
}

export const StyledSpacer = styled.div<StyledSpacerProps>`
	${({ $x, theme }): string | undefined => {
		if ($x && Spacing.includes($x as Spacing)) {
			return `width: ${theme.$pc.spacing[$x as Spacing]}px;`
		} else if ($x) {
			return `width: ${$x};`
		}
	}}
	${({ $y, theme }): string | undefined => {
		if ($y && Spacing.includes($y as Spacing)) {
			return `height: ${theme.$pc.spacing[$y as Spacing]}px;`
		} else if ($y) {
			return `height: ${$y};`
		}
	}}
`
