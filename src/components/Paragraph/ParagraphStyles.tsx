import styled from 'styled-components'

import {
	commonTextStyles,
	StyledTextParagraphProps
} from '../common/Text/TextStyles'

export const StyledParagraph = styled.p<StyledTextParagraphProps>`
	${commonTextStyles}

	line-height: ${({ theme }): string => theme.tokens.paragraph.lineHeight};
`
