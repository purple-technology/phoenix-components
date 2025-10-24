import type { StoryObj } from '@storybook/react'
import React from 'react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Checkbox as CheckboxComponent, type CheckboxProps } from './index'

export default {
	component: CheckboxComponent,
	argTypes
}

export const Checkbox: StoryObj<CheckboxProps> = {
	render: (args) => (
		<CheckboxComponent {...args}>{args.children}</CheckboxComponent>
	),

	args: {
		label: 'Click me',
		size: 'lg',
		colorTheme: 'brand'
	}
}
