import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { colorThemeArray } from '../../theme/ColorTheme'
import TextComponent, { TextProps } from '.'

export default {
	title: 'components / Text',
	component: TextComponent,
	argTypes: {
		size: {
			options: ['small', 'medium', 'large']
		},
		colorTheme: {
			options: [undefined, ...colorThemeArray]
		}
	}
}

export const Text: Story<PropsWithChildren<TextProps>> = (args) => {
	return <TextComponent {...args} />
}

Text.args = {
	children: 'One line text'
}
