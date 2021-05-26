import React, { PropsWithChildren } from 'react'

import StyledButton, { ButtonProps } from './index'
import iconFileUpload from '../../icons/file-upload-button.svg'

export default {
	component: StyledButton,
	title: 'components / Button',
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		}
	}
}

const Template = (args: PropsWithChildren<ButtonProps>) => (
	<StyledButton {...args} />
)
Template.args = {
	children: 'Click me'
}

export const Default = Template.bind({})
Default.args = {
	...Template.args
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	...Template.args,
	icon: iconFileUpload
}
