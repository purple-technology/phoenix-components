import type { StoryObj } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import {
	ClosableButton as ClosableButtonComponent,
	ClosableButtonProps
} from './index'

export default {
	component: ClosableButtonComponent
}

export const ClosableButton: StoryObj<
	PropsWithChildren<
		React.PropsWithoutRef<ClosableButtonProps> &
			React.RefAttributes<HTMLButtonElement>
	>
> = {
	render: (args) => (
		<ClosableButtonComponent {...args}>
			Status is In progress
		</ClosableButtonComponent>
	),

	name: 'ClosableButton'
}
