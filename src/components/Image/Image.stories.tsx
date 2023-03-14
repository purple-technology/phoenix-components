import { Story } from '@storybook/react'
import React from 'react'

import { Image as ImageComponent, ImageProps } from './Image'
import exampleImage from './maintenance.svg'

export default {
	title: 'components / Image',
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

export const Image: Story<ImageProps> = (args) => (
	<ImageComponent src={exampleImage} {...args} />
)
