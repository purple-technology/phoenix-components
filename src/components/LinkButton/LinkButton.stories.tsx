import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

import iconFileUpload from '../../icons/file-upload-button.svg'
import { argTypes } from '../common/Button/stories'
import { LinkButton as LinkButtonComponent, LinkButtonProps } from '.'

export default {
	component: LinkButtonComponent,
	title: 'components / LinkButton',
	argTypes,
	parameters: {
		componentSubtitle: 'Anchor tag <a> styled as a Button component'
	}
}

const Template: Story<PropsWithChildren<LinkButtonProps>> = (args) => (
	<LinkButtonComponent {...args} />
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
