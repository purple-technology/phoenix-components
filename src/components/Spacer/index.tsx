import React, { HTMLAttributes } from 'react'

import { CSSValue } from '../../types/CSSValue'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledSpacer } from './SpacerStyles'

export interface SpacerProps
	extends HTMLAttributes<HTMLDivElement>,
		PaddingProps,
		MarginProps {
	/** Horizontal width of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	w?: Spacing | CSSValue
	/** Vertical height of the element defined either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	h?: Spacing | CSSValue
	className?: string
}

/** @deprecated Will be removed in the next major version. Use generic Box component instead. */
export const Spacer: React.FC<SpacerProps> = (props) => {
	return <StyledSpacer {...props} />
}
