import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMedium } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledTag } from './TagStyles'

export interface TagProps extends GenericComponentProps, MarginProps {
	colorTheme?: ColorTheme
	size?: ComponentSizeSmallMedium
}

export const Tag: React.FC<TagProps> = ({
	colorTheme = 'primary',
	size = 'medium',
	testId = 'Tag',
	...props
}) => {
	return (
		<StyledTag
			colorTheme={colorTheme}
			size={size}
			data-testid={testId}
			{...props}
		/>
	)
}
