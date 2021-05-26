import React, { PropsWithChildren } from 'react'

import LinkComponent, { LinkProps } from './index'
import iconFileUpload from '../../icons/file-upload-button.svg'

export default {
	title: 'components / Link',
	component: LinkComponent
}

const Template = (args: PropsWithChildren<LinkProps>) => (
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
