import styled from 'styled-components'

import {
	commonTextStyles,
	StyledTextParagraphProps
} from '../common/Text/TextStyles'

export const StyledParagraph = styled.p<StyledTextParagraphProps>`
	${commonTextStyles}
	line-height: 1.4;
	margin: 0;
`
