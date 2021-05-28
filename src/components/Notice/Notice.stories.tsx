import React, { PropsWithChildren } from 'react'

import Notice, { NoticeProps } from './index'

export default {
	component: Notice,
	title: 'components/Notice'
}

const Template = (args: PropsWithChildren<NoticeProps>) => (
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
