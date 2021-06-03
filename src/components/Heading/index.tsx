import React from 'react'
import styled from 'styled-components'

type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4'

const StyledHeading = styled.h1<{ as: HeadingSizes }>`
	font-size: ${({ theme, as }): string => `${theme.heading[as]}px`};
	margin: 0;
	font-weight: 500;
`

export interface HeadingProps {
	/** Size of the heading - h1, h2, h3 or h4 */
	as?: HeadingSizes
	className?: string
}

const Heading: React.FC<HeadingProps> = ({ as = 'h1', ...props }) => {
	return <StyledHeading as={as}>{props.children}</StyledHeading>
}

export default Heading
