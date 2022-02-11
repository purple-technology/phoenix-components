import React, { ComponentMeta, ComponentStory } from '@storybook/react'

import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { PhoenixIcons } from '../../types/PhoenixIcons'
import { TextColor } from '../../types/TextColor'
import { List as ListComponent } from '.'
import { ListItem } from './ListItem'

export default {
	title: 'components / List',
	component: ListComponent,
	argTypes: {
		size: {
			options: ComponentSizeSmallMediumLarge
		},
		colorTheme: {
			options: [undefined, ...ColorTheme]
		},
		color: {
			control: 'radio',
			options: TextColor,
			defaultValue: 'dark'
		},
		icon: {
			options: [undefined, ...PhoenixIcons]
		},
		bulletColor: {
			control: 'radio',
			options: TextColor,
			defaultValue: 'dark'
		}
	}
} as ComponentMeta<typeof ListComponent>

export const List: ComponentStory<typeof ListComponent> = (args) => {
	return (
		<ListComponent {...args}>
			<ListItem>First item</ListItem>
			<ListItem>Second item</ListItem>
			<ListItem>Third item</ListItem>
		</ListComponent>
	)
}
