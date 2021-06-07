import React from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { StyledText } from './TextStyles'

export interface TextProps {
	bold?: boolean
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
	colorTheme?: ColorTheme
	className?: string
}

const Text: React.FC<TextProps> = ({
	size = ComponentSize.MEDIUM,
	children,
	...props
}) => {
	return (
		<StyledText $size={size} {...props}>
			{children}
		</StyledText>
	)
}

export default Text
