import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ClosableItem as ClosableItemComponent } from './index'

export default {
	title: 'components / ClosableItem',
	component: ClosableItemComponent
} as Meta<typeof ClosableItemComponent>

export const ClosableItem: StoryObj<typeof ClosableItemComponent> = {
	render: (args) => (
		<ClosableItemComponent {...args}>
			Status is In progress
		</ClosableItemComponent>
	),

	name: 'ClosableItem'
}
