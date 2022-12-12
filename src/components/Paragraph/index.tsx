import React from 'react'

import { CSSValue } from '../../types/CSSValue'
import { Sizing } from '../../types/Sizing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledParagraph } from './ParagraphStyles'

export interface ParagraphProps
	extends CommonTextProps<HTMLParagraphElement>,
		PaddingProps,
		MarginProps {
	/** Text size - xs, sm, md, lg; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: Sizing | CSSValue
}

/**
 * This component is for text paragraphs only. For generic text, you should use `Text` component instead.
 */
export const Paragraph: React.FC<ParagraphProps> = ({
	testId = 'Paragraph',
	size = 'md',
	color = 'primary',
	...props
}) => {
	return (
		<StyledParagraph
			$color={color}
			$size={size}
			data-testid={testId}
			{...props}
		/>
	)
}
