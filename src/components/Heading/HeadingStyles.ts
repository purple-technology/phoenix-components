import styled from 'styled-components'

import { HeadingSizes } from '.'

interface StyledHeadingProps {
	as: HeadingSizes
	size?: string
	bold?: boolean
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
	font-size: ${({ size, theme, as }): string =>
		size ?? `${theme.heading.size[as]}px`};
	margin: 0;
	font-weight: ${({ bold }): number => (bold ? 500 : 400)};
`
