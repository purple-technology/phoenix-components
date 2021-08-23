import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PhoenixIcons } from '../../types/PhoenixIcons'
import { Icon as IconComponent } from '.'

export default {
	title: 'components / Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			defaultValue: 'edit',
			options: PhoenixIcons
		}
	}
} as ComponentMeta<typeof IconComponent>

export const Icon: ComponentStory<typeof IconComponent> = (args) => (
	<IconComponent {...args} />
)
