import React from 'react'

import { ColorTheme } from '../../theme/ColorTheme'
import { StyledHeading } from './HeadingStyles'

export type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4'

export interface HeadingProps {
	/** Size of the heading - h1, h2, h3 or h4 */
	as?: HeadingSizes
	className?: string
	colorTheme?: ColorTheme
	/** Any CSS size value with valid unit (4px, .5rem, 50% etc.), overriding the default heading size. */
	size?: string
}

const Heading: React.FC<HeadingProps> = ({ as = 'h1', size, ...props }) => {
	return (
		<StyledHeading as={as} size={size}>
			{props.children}
		</StyledHeading>
	)
}

export default Heading
