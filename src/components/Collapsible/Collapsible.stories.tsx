import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'

import { Collapsible as CollapsibleComponent } from './index'

export default {
	title: 'components / Collapsible',
	component: CollapsibleComponent
} as ComponentMeta<typeof CollapsibleComponent>

export const Collapsible: ComponentStory<typeof CollapsibleComponent> = (
	args
) => (
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
