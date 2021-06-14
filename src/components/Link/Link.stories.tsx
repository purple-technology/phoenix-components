import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import iconFileUpload from '../../icons/file-upload-button.svg'
import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { Link as LinkComponent, LinkProps } from './index'

export default {
	title: 'components / Link',
	component: LinkComponent,
	argTypes: {
		icon: {
			table: {
				disable: true
			}
		},
		iconAlignment: {
			options: ButtonIconAlignment,
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
	icon: iconFileUpload
}