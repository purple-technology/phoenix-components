import type { StoryFn } from '@storybook/react'
import React from 'react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Checkbox as CheckboxComponent, CheckboxProps } from './index'

export default {
	component: CheckboxComponent,
	argTypes
}

export const Checkbox: StoryFn<CheckboxProps> = (args) => (
	<CheckboxComponent {...args}>{args.children}</CheckboxComponent>
)
Checkbox.args = {
	label: 'Click me'
}
