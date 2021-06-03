import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import TextComponent, { TextProps } from '.'

export default {
	title: 'components / Text',
	component: TextComponent,
	argTypes: {
		size: {
			options: [12, 14, 18, 20, 24, 28, 32]
		}
	}
}

export const Text: Story<PropsWithChildren<TextProps>> = (args) => (
	<TextComponent {...args} />
)

Text.args = {
	children: 'One line text'
}
