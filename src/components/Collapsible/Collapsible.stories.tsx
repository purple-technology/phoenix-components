import { Story } from '@storybook/react'
import * as React from 'react'

import { Collapsible as CollapsibleComponent, CollapsibleProps } from './index'

export default {
	title: 'components / Collapsible',
	component: CollapsibleComponent
}

export const Collapsible: Story<CollapsibleProps> = (args) => (
	<CollapsibleComponent {...args}>
		<ul>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
		</ul>
	</CollapsibleComponent>
)
