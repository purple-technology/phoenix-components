import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ClosableItem as ClosableItemComponent } from './index'

export default {
	title: 'components / ClosableItem',
	component: ClosableItemComponent
} as ComponentMeta<typeof ClosableItemComponent>

export const ClosableItem: ComponentStory<typeof ClosableItemComponent> = (
	args
) => (
	<ClosableItemComponent {...args}>Status is In progress</ClosableItemComponent>
)
ClosableItem.storyName = 'ClosableItem'
