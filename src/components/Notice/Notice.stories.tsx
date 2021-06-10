import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { ColorTheme } from '../../enum/ColorTheme'
import Notice, { NoticeProps } from './index'

export default {
	component: Notice,
	title: 'components/Notice',
	argTypes: {
		onClose: {
			control: 'boolean'
		},
		colorTheme: {
			defaultValue: ColorTheme.PRIMARY
		}
	}
}

const Template: Story<PropsWithChildren<NoticeProps>> = (args) => {
	const onClose = args.onClose
		? (): void => {
				console.log('close')
		  }
		: undefined

	return <Notice {...args} onClose={onClose} />
}

export const Default = Template.bind({})
Default.args = {
	children: 'A random notice text',
	onClose: undefined
}

export const WithButton = Template.bind({})
WithButton.args = {
	...Default.args,
	buttonText: 'Action Button'
}
