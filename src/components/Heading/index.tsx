import React from 'react'

import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledHeading } from './HeadingStyles'

export type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps
	extends CommonTextProps,
		PaddingProps,
		MarginProps {
	/** Size of the heading - h1, h2, h3 or h4 */
	element?: HeadingSizes
	/** Any CSS size value with valid unit (4px, .5rem, 50% etc.), overriding the default heading size. */
	size?: string | number
}

export const Heading: React.FC<HeadingProps> = ({
	element = 'h1',
	children,
	...props
}) => {
	return (
		<StyledHeading as={element} {...props}>
			{children}
		</StyledHeading>
	)
}
