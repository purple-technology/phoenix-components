import { StoryFn } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { ColorTheme } from '../../types/Color'
import { IconAlignment } from '../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../types/PhoenixIcons'
import { Link as LinkComponent, LinkProps } from './index'

export default {
	component: LinkComponent,
	argTypes: {
		icon: {
			options: PhoenixIconsOutlined
		},
		iconAlignment: {
			options: IconAlignment,
			defaultValue: 'left'
		},
		colorTheme: {
			options: [undefined, ...ColorTheme]
		}
	}
}

const Template: StoryFn<PropsWithChildren<LinkProps>> = (args) => (
	<LinkComponent {...args} />
)
Template.args = {
	children: 'Click me'
}

export const Link = {
	args: {
		...Template.args
	}
}

export const WithIcon = {
	args: {
		...Template.args,
		icon: 'paper'
	}
}
