import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

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
			options: Sizing,
			control: 'radio'
		},
		colorTheme: {
			options: [undefined, ...ColorTheme],
			control: 'select'
		},
		color: {
			control: 'select',
			options: [...TextColor, ...ColorTheme]
		},
		icon: {
			options: [undefined, null, ...PhoenixIcons],
			control: 'select'
		},
		bulletColor: {
			control: 'select',
			options: [...TextColor, ...ColorTheme]
		}
	},
	args: {
		color: 'primary',
		bulletColor: 'tertiary'
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
