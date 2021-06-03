import { Story } from '@storybook/react'
import React from 'react'

import RadioComponent, { RadioProps } from './index'

export default {
	component: RadioComponent,
	title: 'components/Radio'
}

export const Radio: Story<RadioProps> = (args) => <RadioComponent {...args} />
Radio.args = {
	children: 'Click me'
}
