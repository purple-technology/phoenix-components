import React from 'react'
import { Tabs as ReactTabs, TabsProps as ReactTabsProps } from 'react-tabs'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'

export type TabsProps = ReactTabsProps & GenericComponentProps

export const Tabs: React.FC<TabsProps> = ({ testId = 'Tabs', ...props }) => (
	<ReactTabs data-testid={testId} {...props} />
)
