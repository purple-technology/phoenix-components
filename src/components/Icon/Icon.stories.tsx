import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Icon as IconComponent } from '.'

export default {
	title: 'components / Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			defaultValue: 'edit'
		}
	}
} as ComponentMeta<typeof IconComponent>

export const Icon: ComponentStory<typeof IconComponent> = (args) => (
	<IconComponent {...args} />
)
