import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { HorizontalDivider as HorizontalDividerComponent } from '.'

export default {
	title: 'components / HorizontalDivider',
	component: HorizontalDividerComponent
} as ComponentMeta<typeof HorizontalDividerComponent>

export const HorizontalDivider: ComponentStory<
	typeof HorizontalDividerComponent
> = (args) => <HorizontalDividerComponent {...args} />

HorizontalDivider.storyName = 'HorizontalDivider'
