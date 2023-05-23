import React, { StoryFn } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { Sizing } from '../../types/Sizing'
import { argTypes } from '../common/Text/stories'
import { Heading as HeadingComponent, HeadingProps } from '.'

export default {
	component: HeadingComponent,
	argTypes: {
		...argTypes,
		element: {
			options: ['h1', 'h2', 'h3', 'h4'],
			defaultValue: 'h1'
		},
		size: {
			options: [undefined, ...Sizing],
			defaultValue: undefined
		}
	}
}

export const Heading: StoryFn<PropsWithChildren<HeadingProps>> = (args) => (
	<HeadingComponent {...args} />
)

Heading.args = {
	children: 'Heading',
	bold: true
}
