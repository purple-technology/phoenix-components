import styled from 'styled-components'

import { SpacerSizes } from '.'

interface StyledSpacerProps {
	$x?: SpacerSizes
	$y?: SpacerSizes
}

export const StyledSpacer = styled.div<StyledSpacerProps>`
	${({ $x }): string | undefined => {
		if ($x) {
			return `width: ${$x}px;`
		}
	}}
	${({ $y }): string | undefined => {
		if ($y) {
			return `height: ${$y}px;`
		}
	}}
`
