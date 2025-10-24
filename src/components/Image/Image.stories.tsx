import type { StoryObj } from '@storybook/react'
import React from 'react'

import { Image as ImageComponent, type ImageProps } from './Image'
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

export const Image: StoryObj<ImageProps> = {
	render: (args) => <ImageComponent src={exampleImage} {...args} />
}
