import type { StoryObj } from '@storybook/react'
import type { PropsWithChildren } from 'react'

import { Sizing } from '../../types/Sizing'
import { argTypes } from '../common/Text/stories'
import { Heading as HeadingComponent, type HeadingProps } from '.'

export default {
	component: HeadingComponent,
	argTypes: {
		...argTypes,
		element: {
			options: ['h1', 'h2', 'h3', 'h4'],
			control: 'select'
		},
		size: {
			options: [undefined, ...Sizing],
			control: 'select'
		}
	},
	args: {
		children: 'Heading',
		bold: true,
		element: 'h1',
		color: 'primary'
	}
}

export const Heading: StoryObj<PropsWithChildren<HeadingProps>> = {}
