import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import { Spinner as SpinnerComponent } from '.'

export default {
	component: SpinnerComponent,
	title: 'components / Spinner',
	argTypes: {
		colorTheme: {
			options: [undefined, ...ColorTheme]
		}
	}
} as ComponentMeta<typeof SpinnerComponent>

export const Spinner: ComponentStory<typeof SpinnerComponent> = (args) => {
	return <SpinnerComponent {...args} />
}
Spinner.args = {
	size: 'large'
}
