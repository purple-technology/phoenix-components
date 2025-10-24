import styled, { css, type RuleSet } from 'styled-components'

import { getLineHeightUnitless } from '../../tokens/helpers'
import {
	commonTextStyles,
	type StyledTextParagraphProps
} from '../common/Text/TextStyles'

interface StyledTextProps extends StyledTextParagraphProps {
	ellipsize: boolean
}

export const StyledText = styled.div<StyledTextProps>`
	${commonTextStyles};

	line-height: ${({ theme }): number =>
		getLineHeightUnitless(theme.tokens.text.lineHeight)};

	${({ ellipsize }): RuleSet | undefined =>
		ellipsize
			? css`
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
			  `
			: undefined}
`
