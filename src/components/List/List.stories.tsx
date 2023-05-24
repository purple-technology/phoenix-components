import React, { Meta, StoryObj } from '@storybook/react'

import { ColorTheme, TextColor } from '../../types/Color'
import { PhoenixIcons } from '../../types/PhoenixIcons'
import { Sizing } from '../../types/Sizing'
import { List as ListComponent } from '.'
import { ListItem } from './ListItem'

export default {
	title: 'components / List',
	component: ListComponent,
	argTypes: {
		size: {
			options: Sizing
		},
		colorTheme: {
			options: [undefined, ...ColorTheme]
		},
		color: {
			control: 'radio',
			options: [...TextColor, ...ColorTheme],
			defaultValue: 'primary'
		},
		icon: {
			options: [undefined, null, ...PhoenixIcons]
		},
		bulletColor: {
			control: 'radio',
			options: [...TextColor, ...ColorTheme],
			defaultValue: 'tertiary'
		}
	}
} as Meta<typeof ListComponent>

export const List: StoryObj<typeof ListComponent> = {
	render: (args) => {
		return (
			<ListComponent {...args}>
				<ListItem>First item</ListItem>
				<ListItem>Second item</ListItem>
				<ListItem>Third item</ListItem>
			</ListComponent>
		)
	}
}
