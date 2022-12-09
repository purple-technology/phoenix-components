import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import {
	PhoenixIcons,
	PhoenixIconsColored,
	PhoenixIconsOutlined
} from '../../types/PhoenixIcons'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Text } from '../Text'
import { Icon as IconComponent } from '.'
import { GalleryGrid, GalleryGridItem } from './IconStoriesStyles'

export default {
	title: 'components / Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			defaultValue: 'edit',
			options: PhoenixIcons
		},
		colorTheme: {
			options: [undefined, ...ColorTheme]
		},
		light: {
			control: 'radio',
			options: [undefined, true, false]
		}
	}
} as ComponentMeta<typeof IconComponent>

export const Icon: ComponentStory<typeof IconComponent> = (args) => {
	return <IconComponent {...args} />
}

const Gallery: React.FC<{
	heading: string
	description: string
	icons: PhoenixIcons[]
}> = ({ heading, description, icons }) => (
	<>
		<Heading mb="xs">{heading}</Heading>
		<Paragraph mb="l">{description}</Paragraph>
		<GalleryGrid>
			{icons.map((icon, index) => (
				<GalleryGridItem key={index}>
					<IconComponent icon={icon} />
					<Text color="light" mt="s">
						{icon}
					</Text>
				</GalleryGridItem>
			))}
		</GalleryGrid>
	</>
)

export const OutlinedIcons: ComponentStory<typeof IconComponent> = () => {
	return (
		<Gallery
			heading="Outlined icons"
			description="These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component."
			icons={PhoenixIconsOutlined}
		/>
	)
}
OutlinedIcons.storyName = 'Gallery - outlined'

export const ColoredIcons: ComponentStory<typeof IconComponent> = () => {
	return (
		<Gallery
			heading="Colored icons"
			description="Colored verions can be used only as standalone icons directly through this Icon component."
			icons={PhoenixIconsColored}
		/>
	)
}
ColoredIcons.storyName = 'Gallery - colored'
