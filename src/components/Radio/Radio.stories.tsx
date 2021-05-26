import React from 'react'

import RadioComponent, { RadioProps } from './index'

export default {
	component: RadioComponent,
	title: 'components/Radio'
}

export const Radio = (args: RadioProps) => (
	<RadioComponent {...args}>{args.children}</RadioComponent>
)
Radio.args = {
	children: 'Click me'
}
