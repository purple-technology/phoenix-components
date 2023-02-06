import styled from 'styled-components'

import { getLineHeightUnitless } from '../../tokens/helpers'
import { CSSValue } from '../../types/CSSValue'
import { isSizing, Sizing } from '../../types/Sizing'
import {
	commonTextStyles,
	StyledTextParagraphProps
} from '../common/Text/TextStyles'

export interface StyledParagraphProps {
	$lineHeight: Sizing | CSSValue
}

export const StyledParagraph = styled.p<
	StyledTextParagraphProps & StyledParagraphProps
>`
	${commonTextStyles}

	line-height: ${({ theme, $lineHeight }): string | number =>
		isSizing($lineHeight)
			? getLineHeightUnitless(theme.tokens.ref.lineHeight[$lineHeight])
			: $lineHeight};
`
