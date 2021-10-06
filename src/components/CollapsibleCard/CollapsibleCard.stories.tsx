import { Story } from '@storybook/react'
import * as React from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import {
	CollapsibleCard as CollapsibleCardComponent,
	CollapsibleCardProps
} from './index'

export default {
	title: 'components / CollapsibleCard',
	component: CollapsibleCardComponent,
	argTypes: {
		...paddingArgTypes,
		...marginArgTypes
	}
}

export const CollapsibleCard: Story<CollapsibleCardProps> = (args) => (
	<CollapsibleCardComponent {...args}>
		<ul>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
			<li>Content</li>
		</ul>
	</CollapsibleCardComponent>
)

CollapsibleCard.args = {
	heading: 'Heading'
}

CollapsibleCard.storyName = 'CollapsibleCard'
