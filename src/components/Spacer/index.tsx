import React from 'react'

import { Spacing } from '../../types/Spacing'
import { StyledSpacer } from './SpacerStyles'

export interface SpacerProps {
	/** Horizontal width of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	x?: Spacing | string
	/** Vertical height of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	y?: Spacing | string
	className?: string
}

const Spacer: React.VoidFunctionComponent<SpacerProps> = ({
	x,
	y,
	...props
}) => {
	return <StyledSpacer $x={x} $y={y} {...props} />
}

export default Spacer
