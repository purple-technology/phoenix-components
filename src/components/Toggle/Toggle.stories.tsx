import { StoryObj } from '@storybook/react'
import React from 'react'

import { ColorTheme } from '../../types/Color'
import { Toggle as ToggleComponent, ToggleProps } from './Toggle'

export default {
	component: ToggleComponent,
	argTypes: {
		/** Prop error was by default JSON but we need text. */
		error: {
			control: 'text'
		},
		/** Prop warning was by default JSON but we need text. */
		warning: {
			control: 'text'
		},
		label: {
			control: 'text'
		},
		colorTheme: {
			options: [undefined, ...ColorTheme],
			control: 'select',
			defaultValue: 'brand'
		},
		disabled: {
			control: 'boolean'
		}
	}
}

export const Toggle: StoryObj<ToggleProps> = {
	render: (args) => (
		<ToggleComponent {...args}>{args.children}</ToggleComponent>
	),

	args: {
		label: 'Click me'
	}
}
