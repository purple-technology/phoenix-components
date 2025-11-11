import type { Meta, StoryObj } from '@storybook/react'
import type React from 'react'

import { Text } from '../../components/Text'
import { ColorTheme } from '../../types/Color'
import { Color, Item, Row } from './styles'

export const ColorsComponent: React.FC = () => {
	return (
		<>
			<Row>
				<Item />
				{ColorTheme.map((theme, index) => (
					<Item key={index}>
						<Text bold>{theme}</Text>
					</Item>
				))}
			</Row>
			<Row>
				<Item>
					<Text>primary</Text>
				</Item>
				{ColorTheme.map((theme, index) => (
					<Item key={index}>
						<Color colorTheme={theme} />
					</Item>
				))}
			</Row>
			<Row>
				<Item>
					<Text>secondary</Text>
				</Item>
				{ColorTheme.map((theme, index) => (
					<Item key={index}>
						<Color colorTheme={theme} secondary />
					</Item>
				))}
			</Row>
		</>
	)
}

export default {
	component: ColorsComponent,
	tags: ['!dev'],
	title: 'Foundation / Colors'
} as Meta<typeof Colors>

export const Colors: StoryObj = {
	render: (args) => <ColorsComponent {...args} />
}
