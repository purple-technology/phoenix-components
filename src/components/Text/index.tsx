import React from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledText } from './TextStyles'

export interface TextProps extends CommonTextProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
}

export const Text: React.FC<TextProps> = ({
	size = 'medium',
	color = 'darkest',
	children,
	...props
}) => {
	return (
		<StyledText $size={size} $color={color} {...props}>
			{children}
		</StyledText>
	)
}
