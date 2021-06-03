import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import ClosableButtonComponent, { ClosableButtonProps } from './index'

export default {
	title: 'components / ClosableButton',
	component: ClosableButtonComponent
}

export const ClosableButton: Story<
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
