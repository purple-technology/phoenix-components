import { StoryObj } from '@storybook/react-vite'
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
