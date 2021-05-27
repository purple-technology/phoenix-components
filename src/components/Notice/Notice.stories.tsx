import React from 'react'

import Notice, { NoticeProps } from './index'

export default {
	component: Notice,
	title: 'components/Notice'
}

const Template = (args: NoticeProps) => (
	<Notice {...args}>{args.children}</Notice>
)

export const Default = Template.bind({})
Default.args = {
	children: 'A random notice text'
}

export const WithButton = Template.bind({})
WithButton.args = {
	...Default.args,
	buttonText: 'Action Button'
}
