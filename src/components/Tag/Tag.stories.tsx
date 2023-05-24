import { StoryObj } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { Tag as TagComponent, TagProps } from './index'

export default {
	component: TagComponent,
	argTypes: {
		colorTheme: {
			defaultValue: 'brand'
		},
		size: {
			defaultValue: 'md'
		}
	}
}

export const Tag: StoryObj<PropsWithChildren<TagProps>> = {
	render: (args) => <TagComponent {...args}>{args.children}</TagComponent>,

	args: {
		children: 'E-wallet'
	}
}
