import React from 'react'

import { StyledSpacer } from './SpacerStyles'

export type SpacerSizes =
	| 4
	| 8
	| 12
	| 16
	| 20
	| 24
	| 28
	| 32
	| 36
	| 40
	| 44
	| 48
	| 52

export interface SpacerProps {
	x?: SpacerSizes
	y?: SpacerSizes
	className?: string
}

const Spacer: React.FC<SpacerProps> = ({ y = 16, x, ...props }) => {
	return <StyledSpacer $x={x} $y={y} {...props} />
}

export default Spacer
