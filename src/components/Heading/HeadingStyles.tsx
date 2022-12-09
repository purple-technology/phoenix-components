import styled from 'styled-components'

import { getTextColor } from '../../tokens/helpers'
import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { HeadingSizing } from '../../types/Sizing'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { textAlignCss } from '../common/Text/TextStyles'
import { HeadingElement } from '.'

interface StyledHeadingProps extends TextAlignProp {
	as: HeadingElement
	size?: HeadingSizing | CSSValue
	bold?: boolean
	$color: Color
}

const FontSizeToHeadingElement: { [key in HeadingSizing]: HeadingElement } = {
	xl: 'h4',
	'2xl': 'h3',
	'3xl': 'h2',
	'4xl': 'h1'
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
	font-size: ${({ size, theme, as }): string =>
		size
			? typeof size === 'number'
				? `${size}px`
				: size in HeadingSizing
				? theme.tokens.heading.fontSize[
						FontSizeToHeadingElement[size as HeadingSizing]
				  ]
				: size
			: theme.tokens.heading.fontSize[as]};
	font-weight: ${({ as, bold, theme }): string =>
		bold === false || (typeof bold === 'undefined' && as === 'h1')
			? theme.tokens.ref.fontWeight.regular
			: theme.tokens.ref.fontWeight.bold};

	color: ${getTextColor()};

	${textAlignCss}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
