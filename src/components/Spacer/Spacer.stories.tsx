import React, { Story } from '@storybook/react'

import { spacingArgType } from '../common/Spacing/stories'
import { Text } from '../Text'
import { Spacer as SpacerComponent, SpacerProps } from '.'

export default {
	title: 'components / Spacer',
	component: SpacerComponent,
	argTypes: {
		x: spacingArgType,
		y: spacingArgType
	}
}

export const Vertical: Story<SpacerProps> = (args) => (
	<>
		<Text>Spacer is inserted between this line...</Text>
		<SpacerComponent {...args} />
		<Text>...and this line.</Text>
		<SpacerComponent y={'m'} />
		<Text>
			You can adjust the <em>y</em> prop.
		</Text>
	</>
)

export const Horizontal: Story<SpacerProps> = (args) => (
	<>
		<div style={{ display: 'flex ' }}>
			<Text>Spacer is inserted between -&gt;</Text>
			<SpacerComponent {...args} />
			<Text>&lt;- these arrows.</Text>
		</div>
		<SpacerComponent y={'m'} />
		<Text>
			You can adjust the <em>x</em> prop.
		</Text>
	</>
)
