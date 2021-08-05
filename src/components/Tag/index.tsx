import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMedium } from '../../types/ComponentSize'
import { StyledTag } from './TagStyles'

export interface TagProps {
	colorTheme?: ColorTheme
	className?: string
	size?: ComponentSizeSmallMedium
}

export const Tag: React.FC<TagProps> = ({
	colorTheme = 'primary',
	size = 'medium',
	...props
}) => {
	return <StyledTag colorTheme={colorTheme} size={size} {...props} />
}
