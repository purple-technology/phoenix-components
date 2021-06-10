import styled from 'styled-components'

import { Spacing, SpacingValues } from '../../enum/Spacing'

interface StyledSpacerProps {
	$x?: Spacing | string
	$y?: Spacing | string
}

export const StyledSpacer = styled.div<StyledSpacerProps>`
	${({ $x, theme }): string | undefined => {
		if ($x && SpacingValues.includes($x)) {
			return `width: ${theme.$pc.spacing[$x as Spacing]}px;`
		} else if ($x) {
			return `width: ${$x};`
		}
	}}
	${({ $y, theme }): string | undefined => {
		if ($y && SpacingValues.includes($y)) {
			return `height: ${theme.$pc.spacing[$y as Spacing]}px;`
		} else if ($y) {
			return `height: ${$y};`
		}
	}}
`
