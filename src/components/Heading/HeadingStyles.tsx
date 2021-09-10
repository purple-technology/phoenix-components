import styled from 'styled-components'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { HeadingSizes } from '.'

interface StyledHeadingProps {
	as: HeadingSizes
	size?: string | number
	bold?: boolean
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
	font-size: ${({ size, theme, as }): string =>
		size
			? typeof size === 'number'
				? `${size}px`
				: size
			: `${theme.$pc.heading.size[as]}px`};
	font-weight: ${({ as, bold }): number =>
		bold === false || (typeof bold === 'undefined' && as === 'h1') ? 400 : 500};
	color: ${({ theme }): string => theme.$pc.colors.text.darkest};

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
