import { Story } from '@storybook/react'
import React from 'react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Checkbox as CheckboxComponent, CheckboxProps } from './index'

export default {
	component: CheckboxComponent,
	title: 'components/Checkbox',
	argTypes
}

export const Checkbox: Story<CheckboxProps> = (args) => (
	<CheckboxComponent {...args}>{args.children}</CheckboxComponent>
)
Checkbox.args = {
	label: 'Click me'
}
