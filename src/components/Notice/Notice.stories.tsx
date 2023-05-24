import { StoryFn } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { Notice as NoticeComponent, NoticeProps } from './index'

export default {
	component: NoticeComponent,
	title: 'components/Notice',
	argTypes: {
		onClose: {
			control: 'boolean'
		},
		colorTheme: {
			defaultValue: 'brand'
		},
		borderRadius: {
			control: 'text'
		}
	}
}

const Template: StoryFn<PropsWithChildren<NoticeProps>> = (args) => {
	const onClose = args.onClose
		? (): void => {
				console.log('close')
		  }
		: undefined

	return <NoticeComponent {...args} onClose={onClose} />
}

export const Default = {
	render: Template,

	args: {
		children: 'A random notice text',
		onClose: undefined
	}
}

export const WithButton = {
	render: Template,

	args: {
		...Default.args,
		buttonText: 'Action Button'
	}
}
