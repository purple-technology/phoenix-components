import React from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledText } from './TextStyles'

export interface TextProps extends CommonTextProps, PaddingProps, MarginProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
}

/**
 * If multi line text is needed, use `Paragraph` component.
 */
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
