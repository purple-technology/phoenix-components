import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ColorTheme, TextColor } from '../../types/Color'
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
	component: IconComponent,
	argTypes: {
		icon: {
			control: 'select',
			options: PhoenixIcons
		},
		color: {
			control: 'radio',
			options: [undefined, ...TextColor, ...ColorTheme]
		}
	}
} as Meta<typeof IconComponent>

export const Icon: StoryObj<typeof IconComponent> = {
	render: (args) => {
		return <IconComponent {...args} />
	},
	args: {
		icon: 'edit',
		color: 'primary'
	}
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
					<Text color="tertiary" mt="s">
						{icon}
					</Text>
				</GalleryGridItem>
			))}
		</GalleryGrid>
	</>
)

export const OutlinedIcons: StoryObj<typeof IconComponent> = {
	render: () => {
		return (
			<Gallery
				heading="Outlined icons"
				description="These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component."
				icons={PhoenixIconsOutlined}
			/>
		)
	},
	name: 'Gallery - outlined'
}

export const ColoredIcons: StoryObj<typeof IconComponent> = {
	render: () => {
		return (
			<Gallery
				heading="Colored icons"
				description="Colored verions can be used only as standalone icons directly through this Icon component."
				icons={PhoenixIconsColored}
			/>
		)
	},
	name: 'Gallery - colored'
}
