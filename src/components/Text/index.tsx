import React from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../enum/ComponentSize'
import { TextColor } from '../../enum/TextColor'
import { CommonTextProps } from '../common/Text/CommonTextProps'
import { StyledText } from './TextStyles'

export interface TextProps extends CommonTextProps {
	/** Text size - small, medium, large; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: ComponentSizeSmallMediumLarge | string
}

const Text: React.FC<TextProps> = ({
	size = ComponentSize.MEDIUM,
	color = TextColor.DARK,
	children,
	...props
}) => {
	return (
		<StyledText $size={size} color={color} {...props}>
			{children}
		</StyledText>
	)
}

export default Text
