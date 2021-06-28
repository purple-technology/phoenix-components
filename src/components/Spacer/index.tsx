import React from 'react'

import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledSpacer } from './SpacerStyles'

export interface SpacerProps extends PaddingProps, MarginProps {
	/** Horizontal width of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	w?: Spacing | string
	/** Vertical height of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	h?: Spacing | string
	className?: string
}

export const Spacer: React.FC<SpacerProps> = (props) => {
	return <StyledSpacer {...props} />
}
