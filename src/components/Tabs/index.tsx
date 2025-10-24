import type React from 'react'
import type { TabsProps as ReactTabsProps } from 'react-tabs'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledTabs } from './styles'

export type TabsProps = ReactTabsProps & GenericComponentProps

export const Tabs: React.FC<TabsProps> = ({ testId = 'Tabs', ...props }) => (
	<StyledTabs data-testid={testId} {...props} />
)
