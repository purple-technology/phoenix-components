import React, { HTMLAttributes } from 'react'

import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledSpacer } from './SpacerStyles'

export interface SpacerProps
	extends HTMLAttributes<HTMLDivElement>,
		PaddingProps,
		MarginProps {
	/** Horizontal width of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	w?: Spacing | string | number
	/** Vertical height of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	h?: Spacing | string | number
	className?: string
}

export const Spacer: React.FC<SpacerProps> = (props) => {
	return <StyledSpacer {...props} />
}
