import type { StoryFn } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import {
	ClosableButton as ClosableButtonComponent,
	ClosableButtonProps
} from './index'

export default {
	component: ClosableButtonComponent
}

export const ClosableButton: StoryFn<
	PropsWithChildren<
		React.PropsWithoutRef<ClosableButtonProps> &
			React.RefAttributes<HTMLButtonElement>
	>
> = (args) => (
	<ClosableButtonComponent {...args}>
		Status is In progress
	</ClosableButtonComponent>
)
ClosableButton.storyName = 'ClosableButton'
