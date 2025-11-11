import type React from 'react'
import type { PropsWithChildren } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import { StyledMenu } from './MenuStyles'

export interface MenuProps
	extends MarginProps,
		PaddingProps,
		GenericComponentProps {}

export const Menu: React.FC<PropsWithChildren<MenuProps>> = ({
	testId = 'Menu',
	...props
}) => <StyledMenu p="xxxs" data-testid={testId} {...props} />
