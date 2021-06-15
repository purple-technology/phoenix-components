import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'
import { withDesign } from 'storybook-addon-designs'

import iconFileUpload from '../../icons/file-upload-button.svg'
import { argTypes } from '../common/Button/stories'
import { Button as ButtonComponent, ButtonProps } from './index'

export default {
	component: ButtonComponent,
	title: 'components / Button',
	argTypes,
	decorators: [withDesign]
}

const Template: Story<
	PropsWithChildren<
		React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
	>
> = (args) => <ButtonComponent {...args} />
Template.args = {
	children: 'Click me'
}
Template.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DGocyaQPfb1oOy9eeGPUKQ/Phoenix-Design-System?node-id=895%3A11'
	}
}

export const Default = Template.bind({})
Default.args = {
	...Template.args
}
Default.parameters = {
	...Template.parameters
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	...Template.args,
	icon: iconFileUpload
}
WithIcon.parameters = {
	...Template.parameters
}
