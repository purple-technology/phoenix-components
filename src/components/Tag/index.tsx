import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { StyledTag } from './TagStyles'

export interface TagProps {
	colorTheme: ColorTheme
	className?: string
}

const Tag: React.FC<TagProps> = ({ children, ...props }) => {
	return <StyledTag {...props}>{children}</StyledTag>
}

export default Tag
