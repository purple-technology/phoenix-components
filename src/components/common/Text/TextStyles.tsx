import { css, RuleSet } from 'styled-components'

import { getTextColor } from '../../../tokens/helpers'
import { Color } from '../../../types/Color'
import { CSSValue } from '../../../types/CSSValue'
import { isSizing, Sizing } from '../../../types/Sizing'
import { MarginProps } from '../Spacing/MarginProps'
import { PaddingProps } from '../Spacing/PaddingProps'
import { marginCss, paddingCss } from '../Spacing/SpacingStyles'
import { TextAlignProp } from './CommonTextProps'

export interface StyledTextParagraphProps
	extends TextAlignProp,
		PaddingProps,
		MarginProps {
	size: Sizing | CSSValue
	color: Color
	semibold?: boolean
	bold?: boolean
}

const TextAlignLogicalAttributes = {
	left: 'start',
	center: 'center',
	right: 'end',
	justify: 'justify'
}

export const textAlignCss = css<TextAlignProp>`
	${({ textAlign }): RuleSet | undefined => {
		if (!textAlign) return undefined
		return css`
			text-align: ${TextAlignLogicalAttributes[textAlign]};
		`
	}}
`

export const commonTextStyles = css<StyledTextParagraphProps>`
	font-size: ${({ theme, size }): string =>
		isSizing(size)
			? theme.tokens.textParagraph.fontSize[size]
			: typeof size === 'number'
				? `${size}px`
				: size};
	font-weight: ${({ bold, semibold, theme }): string =>
		bold
			? theme.tokens.ref.fontWeight.bold
			: semibold
				? theme.tokens.ref.fontWeight.semibold
				: theme.tokens.ref.fontWeight.regular};
	color: ${getTextColor()};

	${textAlignCss}

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
