import { StoryFn } from '@storybook/react'
import React from 'react'

import { Image as ImageComponent, ImageProps } from './Image'
import exampleImage from './maintenance.svg'

export default {
	component: ImageComponent,
	argTypes: {
		width: {
			control: 'text'
		},
		height: {
			control: 'text'
		},
		maxWidth: {
			control: 'text'
		},
		maxHeight: {
			control: 'text'
		},
		display: {
			control: 'text'
		}
	}
}

export const Image: StoryFn<ImageProps> = (args) => (
	<ImageComponent src={exampleImage} {...args} />
)
