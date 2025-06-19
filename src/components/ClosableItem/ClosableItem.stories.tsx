import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ClosableItem as ClosableItemComponent } from './index'

export default {
	component: ClosableItemComponent,
	args: {
		children: 'Status is In progress'
	}
} as Meta<typeof ClosableItemComponent>

export const ClosableItem: StoryObj<typeof ClosableItemComponent> = {
	render: (args) => <ClosableItemComponent {...args} />
}
