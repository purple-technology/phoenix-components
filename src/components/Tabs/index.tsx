import React from 'react'
import { TabsProps as ReactTabsProps } from 'react-tabs'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledTabs } from './styles'

export type TabsProps = ReactTabsProps & GenericComponentProps

export const Tabs: React.FC<TabsProps> = ({ testId = 'Tabs', ...props }) => (
	<StyledTabs data-testid={testId} {...props} />
)
