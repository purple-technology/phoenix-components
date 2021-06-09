import React from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../enum/ComponentSize'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledParagraph } from './ParagraphStyles'

export interface ParagraphProps extends CommonTextProps {
	bold?: boolean
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
}

const Paragraph: React.FC<ParagraphProps> = ({
	size = ComponentSize.MEDIUM,
	children,
	...props
}) => {
	return (
		<StyledParagraph $size={size} {...props}>
			{children}
		</StyledParagraph>
	)
}

export default Paragraph
