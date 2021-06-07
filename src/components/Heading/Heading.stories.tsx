import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { colorThemeArray } from '../../theme/ColorTheme'
import HeadingComponent, { HeadingProps } from '.'

export default {
	title: 'components / Heading',
	component: HeadingComponent,
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4'],
			defaultValue: 'h1'
		},
		colorTheme: {
			options: [undefined, ...colorThemeArray]
		}
	}
}

export const Heading: Story<PropsWithChildren<HeadingProps>> = (args) => (
	<HeadingComponent {...args} />
)

Heading.args = {
	children: 'Heading'
}
