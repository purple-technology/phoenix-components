import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import iconFileUpload from '../../icons/file-upload-button.svg'
import StyledLinkButton, { LinkButtonProps } from '.'

export default {
	component: StyledLinkButton,
	title: 'components / LinkButton',
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			}
		}
	}
}

const Template: Story<PropsWithChildren<LinkButtonProps>> = (args) => (
	<StyledLinkButton {...args} />
)
Template.args = {
	children: 'Click me'
}
Template.storyName = 'LinkButton'

export const Default = Template.bind({})
Default.args = {
	...Template.args
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	...Template.args,
	icon: iconFileUpload
}
