import React from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledParagraph } from './ParagraphStyles'

export interface ParagraphProps
	extends CommonTextProps,
		PaddingProps,
		MarginProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string | number
}

/**
 * This component is for text paragraphs only. For generic text, you should use `Text` component instead.
 */
export const Paragraph: React.FC<ParagraphProps> = ({
	size = 'medium',
	color = 'darkest',
	...props
}) => {
	return <StyledParagraph $color={color} $size={size} {...props} />
}
