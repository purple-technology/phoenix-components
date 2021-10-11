import React from 'react'

import { Text } from '../../components/Text'
import { ColorTheme } from '../../types/ColorTheme'
import { Color, Item, Row } from './styles'

const Colors: React.FC = () => {
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
					<Text>dark</Text>
				</Item>
				{ColorTheme.map((theme, index) => (
					<Item key={index}>
						<Color colorTheme={theme} />
					</Item>
				))}
			</Row>
			<Row>
				<Item>
					<Text>light</Text>
				</Item>
				{ColorTheme.map((theme, index) => (
					<Item key={index}>
						<Color colorTheme={theme} light />
					</Item>
				))}
			</Row>
		</>
	)
}

export default Colors