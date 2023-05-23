import React, { StoryFn } from '@storybook/react'
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
			options: Sizing,
			defaultValue: 'md'
		}
	},
	parameters: {
		componentSubtitle: 'Generic text component'
	}
}

export const Text: StoryFn<PropsWithChildren<TextProps>> = (args) => {
	return <TextComponent {...args} />
}

Text.args = {
	children: 'Example text'
}
