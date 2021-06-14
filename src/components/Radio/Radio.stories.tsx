import { Story } from '@storybook/react'
import React from 'react'

import { argTypes } from '../common/CheckboxRadio/stories'
import { Radio as RadioComponent, RadioProps } from './index'

export default {
	component: RadioComponent,
	title: 'components/Radio',
	argTypes
}

export const Radio: Story<RadioProps> = (args) => <RadioComponent {...args} />
Radio.args = {
	children: 'Click me'
}
