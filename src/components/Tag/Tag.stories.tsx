import { StoryObj } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { ColorTheme } from '../../types/Color'
import { SizingSmMd } from '../../types/Sizing'
import { Tag as TagComponent, TagProps } from './index'

export default {
	component: TagComponent,
	argTypes: {
		colorTheme: {
			options: ColorTheme,
			control: 'select'
		},
		size: {
			options: SizingSmMd,
			control: 'radio'
		}
	},
	args: {
		colorTheme: 'brand',
		size: 'md',
		children: 'E-wallet',
		secondary: false,
		outline: false
	}
}

export const Tag: StoryObj<PropsWithChildren<TagProps>> = {
	render: (args) => <TagComponent {...args}>{args.children}</TagComponent>
}
