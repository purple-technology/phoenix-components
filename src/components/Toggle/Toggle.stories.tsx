import type { StoryObj } from '@storybook/react'

import { ColorTheme } from '../../types/Color'
import { Toggle as ToggleComponent, type ToggleProps } from './Toggle'

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
			control: 'select'
		}
	},
	args: {
		colorTheme: 'brand',
		label: 'Click me',
		disabled: false
	}
}

export const Toggle: StoryObj<ToggleProps> = {
	render: (args) => <ToggleComponent {...args}>{args.children}</ToggleComponent>
}
