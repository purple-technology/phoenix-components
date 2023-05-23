import { StoryFn } from '@storybook/react'
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

export const Tag: StoryFn<PropsWithChildren<TagProps>> = (args) => (
	<TagComponent {...args}>{args.children}</TagComponent>
)
Tag.args = {
	children: 'E-wallet'
}
