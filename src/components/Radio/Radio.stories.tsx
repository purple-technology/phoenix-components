import { StoryFn } from '@storybook/react'
import React from 'react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Radio as RadioComponent, RadioProps } from './index'

export default {
	component: RadioComponent,
	argTypes
}

export const Radio: StoryFn<RadioProps> = (args) => <RadioComponent {...args} />
Radio.args = {
	label: 'Click me'
}
