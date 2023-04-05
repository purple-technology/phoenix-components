import React from 'react'

import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledHeading } from './HeadingStyles'

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps
	extends CommonTextProps<HTMLHeadingElement>,
		PaddingProps,
		MarginProps {
	/** Size of the heading - h1, h2, h3 or h4 */
	element?: HeadingElement
}

export const Heading: React.FC<HeadingProps> = ({
	element = 'h1',
	color = 'primary',
	testId = 'Heading',
	children,
	...props
}) => {
	return (
		<StyledHeading as={element} $color={color} data-testid={testId} {...props}>
			{children}
		</StyledHeading>
	)
}
