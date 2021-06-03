import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import SpacerComponent, { SpacerProps } from '.'

export default {
	title: 'components / Spacer',
	component: SpacerComponent,
	argTypes: {
		size: {
			options: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52]
		}
	}
}

export const Spacer: Story<PropsWithChildren<SpacerProps>> = (args) => (
	<SpacerComponent {...args} />
)
