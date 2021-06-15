import styled from 'styled-components'

import {
	commonTextStyles,
	StyledTextParagraphProps
} from '../common/Text/TextStyles'

export const StyledText = styled.div<StyledTextParagraphProps>`
	${commonTextStyles}
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`
