import React from 'react'

import { CSSValue } from '../../types/CSSValue'
import { HeadingSizing } from '../../types/Sizing'
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
	/** Any CSS size value with valid unit (4px, .5rem, 50% etc.), overriding the default heading size. */
	size?: HeadingSizing | CSSValue
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
