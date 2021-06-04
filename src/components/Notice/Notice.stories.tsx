import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import Notice, { NoticeProps } from './index'

export default {
	component: Notice,
	title: 'components/Notice',
	onClose: {
		disabled: true
	}
}

const Template: Story<PropsWithChildren<NoticeProps>> = (args) => (
	<Notice {...args} />
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
