import { Story } from '@storybook/react'
import React from 'react'

import CheckboxComponent, { CheckboxProps } from './index'

export default {
	component: CheckboxComponent,
	title: 'components/Checkbox'
}

export const Checkbox: Story<CheckboxProps> = (args) => (
	<CheckboxComponent {...args}>{args.children}</CheckboxComponent>
)
Checkbox.args = {
	children: 'Click me'
}
