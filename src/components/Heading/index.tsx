import React from 'react'

import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledHeading } from './HeadingStyles'

export type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps extends CommonTextProps {
	/** Size of the heading - h1, h2, h3 or h4 */
	as?: HeadingSizes
	/** Any CSS size value with valid unit (4px, .5rem, 50% etc.), overriding the default heading size. */
	size?: string
}

export const Heading: React.FC<HeadingProps> = ({
	as = 'h1',
	children,
	...props
}) => {
	return (
		<StyledHeading as={as} {...props}>
			{children}
		</StyledHeading>
	)
}