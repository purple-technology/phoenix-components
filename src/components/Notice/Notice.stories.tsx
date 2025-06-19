import { StoryFn } from '@storybook/react-vite'
import React, { PropsWithChildren } from 'react'

import { ColorTheme } from '../../types/Color'
import { Notice as NoticeComponent, NoticeProps } from './index'

export default {
	component: NoticeComponent,
	title: 'components/Notice',
	argTypes: {
		colorTheme: {
			control: 'select',
			options: ColorTheme
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
		onClose: false,
		colorTheme: 'brand'
	}
}

export const WithButton = {
	render: Template,
	args: {
		...Default.args,
		buttonText: 'Action Button'
	}
}
