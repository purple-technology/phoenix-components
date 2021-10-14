import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { TextAlign as TextAlignComponent } from '.'

export default {
	title: 'components / TextAlign',
	component: TextAlignComponent
} as ComponentMeta<typeof TextAlignComponent>

export const TextAlign: ComponentStory<typeof TextAlignComponent> = (args) => {
	return <TextAlignComponent {...args}>Example content</TextAlignComponent>
}
TextAlign.storyName = 'TextAlign'
