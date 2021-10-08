import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledMenu } from './MenuStyles'

export interface MenuProps extends PaddingProps, GenericComponentProps {
	className?: string
}

export const Menu: React.FC<MenuProps> = ({ testId = 'Menu', ...props }) => (
	<StyledMenu p="xxxs" data-testid={testId} {...props} />
)
