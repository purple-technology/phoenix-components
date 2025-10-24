import type { Meta, StoryObj } from '@storybook/react'

import { ClosableButton as ClosableButtonComponent } from './index'

export default {
	component: ClosableButtonComponent
} as Meta<typeof ClosableButtonComponent>

export const ClosableButton: StoryObj<typeof ClosableButtonComponent> = {
	render: (args) => <ClosableButtonComponent {...args} />,
	args: {
		children: 'Status is In progress'
	}
}
