import { Meta, StoryObj } from '@storybook/react'

import { HorizontalDivider as HorizontalDividerComponent } from '.'

export default {
	title: 'components / HorizontalDivider',
	component: HorizontalDividerComponent
} as Meta<typeof HorizontalDividerComponent>

export const HorizontalDivider: StoryObj<typeof HorizontalDividerComponent> = {
	name: 'HorizontalDivider'
}
