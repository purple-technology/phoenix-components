import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { argTypes } from '../common/Text/stories'
import { Heading as HeadingComponent, HeadingProps } from '.'

export default {
	title: 'components / Heading',
	component: HeadingComponent,
	argTypes: {
		...argTypes,
		as: {
			options: ['h1', 'h2', 'h3', 'h4'],
			defaultValue: 'h1'
		}
	}
}

export const Heading: Story<PropsWithChildren<HeadingProps>> = (args) => (
	<HeadingComponent {...args} />
)

Heading.args = {
	children: 'Heading',
	bold: true
}
