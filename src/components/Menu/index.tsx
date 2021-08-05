import React from 'react'

import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledMenu } from './MenuStyles'

export interface MenuProps extends PaddingProps {
	className?: string
}

export const Menu: React.FC<MenuProps> = (props) => (
	<StyledMenu p="xxxs" {...props} />
)
