import type { StoryFn } from '@storybook/react'
import type { PropsWithChildren } from 'react'

import { ColorTheme } from '../../types/Color'
import { IconAlignment } from '../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../types/PhoenixIcons'
import { Link as LinkComponent, type LinkProps } from './index'

export default {
	component: LinkComponent,
	argTypes: {
		icon: {
			options: PhoenixIconsOutlined,
			control: 'select'
		},
		iconAlignment: {
			options: IconAlignment,
			control: 'radio'
		},
		colorTheme: {
			options: [undefined, ...ColorTheme],
			control: 'select'
		}
	}
}

const Template: StoryFn<PropsWithChildren<LinkProps>> = (args) => (
	<LinkComponent {...args} />
)
Template.args = {
	children: 'Click me',
	iconAlignment: 'left'
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
