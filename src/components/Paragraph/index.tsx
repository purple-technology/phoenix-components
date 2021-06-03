import React from 'react'

import { ColorTheme } from '../../theme/ColorTheme'
import { StyledParagraph } from './ParagraphStyles'

export type ParagraphSizes = 12 | 14 | 18

export interface ParagraphProps {
	bold?: boolean
	size?: ParagraphSizes
	colorTheme?: ColorTheme
	className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({
	size = 14,
	children,
	...props
}) => {
	return (
		<StyledParagraph size={size} {...props}>
			{children}
		</StyledParagraph>
	)
}

export default Paragraph
