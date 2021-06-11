import React from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledParagraph } from './ParagraphStyles'

export interface ParagraphProps extends CommonTextProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
}

const Paragraph: React.FC<ParagraphProps> = ({
	size = 'medium',
	color = 'darkest',
	children,
	...props
}) => {
	return (
		<StyledParagraph $color={color} $size={size} {...props}>
			{children}
		</StyledParagraph>
	)
}

export default Paragraph
