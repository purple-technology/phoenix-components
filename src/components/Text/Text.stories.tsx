import type { StoryObj } from '@storybook/react-vite'
import React from 'react'
import { PropsWithChildren } from 'react'

import { Sizing } from '../../types/Sizing'
import { argTypes } from '../common/Text/stories'
import { Text as TextComponent, TextProps } from '.'

export default {
	component: TextComponent,
	argTypes: {
		...argTypes,
		size: {
			control: 'radio',
			options: Sizing
		}
	},
	args: {
		size: 'md',
		children: 'Example text',
		bold: false,
		semibold: false
	},
	parameters: {
		componentSubtitle: 'Generic text component'
	}
}

export const Text: StoryObj<PropsWithChildren<TextProps>> = {
	render: (args) => {
		return <TextComponent {...args} />
	}
}
