import styled from 'styled-components'

import { getLineHeightUnitless, getTextColor } from '../../tokens/helpers'
import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { isSizing, Sizing } from '../../types/Sizing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { textAlignCss } from '../common/Text/TextStyles'
import { HeadingElement } from '.'

interface StyledHeadingProps extends TextAlignProp {
	as: HeadingElement
	size?: Sizing | CSSValue
	$bold?: boolean
	$color: Color
}

const HeadingElementToSize: { [key in HeadingElement]: Sizing } = {
	h4: 'xs',
	h3: 'sm',
	h2: 'md',
	h1: 'lg'
}

export const StyledHeading = styled.h1<
	StyledHeadingProps & PaddingProps & MarginProps
>`
	font-size: ${({ size, theme, as }): string =>
		size
			? typeof size === 'number'
				? `${size}px`
				: isSizing(size)
				? theme.tokens.heading.fontSize[size]
				: size
			: theme.tokens.heading.fontSize[HeadingElementToSize[as]]};
	font-weight: ${({ as, $bold, theme }): string =>
		$bold === false || (typeof $bold === 'undefined' && as === 'h1')
			? theme.tokens.ref.fontWeight.regular
			: theme.tokens.ref.fontWeight.bold};
	line-height: ${({ theme }): number =>
		getLineHeightUnitless(theme.tokens.heading.lineHeight)};
	color: ${getTextColor()};

	${textAlignCss}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
