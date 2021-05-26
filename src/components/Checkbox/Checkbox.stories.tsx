import React from 'react'

import CheckboxComponent, { CheckboxProps } from './index'

export default {
	component: CheckboxComponent,
	title: 'components/Checkbox'
}

export const Checkbox = (args: CheckboxProps) => (
	<CheckboxComponent {...args}>{args.children}</CheckboxComponent>
)
Checkbox.args = {
	children: 'Click me'
}
