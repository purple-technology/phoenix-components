import React from 'react'
import { FunctionComponent } from 'react'

import { ColorTheme } from '../../theme/ColorTheme'
import { StyledTag } from './TagStyles'

export interface TagProps {
	colorTheme: ColorTheme
	className?: string
}

const Tag: FunctionComponent<TagProps> = ({ children, ...props }) => {
	return <StyledTag {...props}>{children}</StyledTag>
}

Tag.defaultProps = {
	colorTheme: ColorTheme.PRIMARY
}

export default Tag
