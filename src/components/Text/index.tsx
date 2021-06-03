import React from 'react'

import { ColorTheme } from '../../theme/ColorTheme'
import { StyledText } from './TextStyles'

export type TextSizes = 12 | 14 | 18 | 20 | 24 | 28 | 32

export interface TextProps {
	bold?: boolean
	size?: TextSizes
	colorTheme?: ColorTheme
	className?: string
}

const Text: React.FC<TextProps> = ({ size = 14, children, ...props }) => {
	return (
		<StyledText $size={size} {...props}>
			{children}
		</StyledText>
	)
}

export default Text
