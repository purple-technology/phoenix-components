import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import iconFileUpload from '../../icons/file-upload-button.svg'
import LinkComponent, { LinkProps } from './index'

export default {
	title: 'components / Link',
	component: LinkComponent
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
