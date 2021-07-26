import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import { IconAlignment } from '../../types/IconAlignment'
import { PhoenixIconsOutlined } from '../../types/PhoenixIcons'
import { Link as LinkComponent, LinkProps } from './index'

export default {
	title: 'components / Link',
	component: LinkComponent,
	argTypes: {
		icon: {
			options: PhoenixIconsOutlined
		},
		iconAlignment: {
			options: IconAlignment,
			defaultValue: 'left'
		}
	}
}

const Template: Story<PropsWithChildren<LinkProps>> = (args) => (
	<LinkComponent {...args} />
)
Template.args = {
	children: 'Click me'
}

export const Link = Template.bind({})
Link.args = {
	...Template.args
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	...Template.args,
	icon: 'paper'
}
