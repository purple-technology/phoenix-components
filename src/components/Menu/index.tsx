import React, { PropsWithChildren } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledMenu } from './MenuStyles'

export interface MenuProps
	extends MarginProps,
		PaddingProps,
		GenericComponentProps {}

export const Menu: React.FC<PropsWithChildren<MenuProps>> = ({
	testId = 'Menu',
	...props
}) => <StyledMenu p="xxxs" data-testid={testId} {...props} />
