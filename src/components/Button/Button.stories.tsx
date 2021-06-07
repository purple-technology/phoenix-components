import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'
import { withDesign } from 'storybook-addon-designs'

import iconFileUpload from '../../icons/file-upload-button.svg'
import { colorThemeArray } from '../../theme/ColorTheme'
import StyledButton, { ButtonProps } from './index'

export default {
	component: StyledButton,
	title: 'components / Button',
	argTypes: {
		children: {
			control: 'text'
		},
		disabled: {
			control: 'boolean'
		},
		size: {
			options: ['tiny', 'small', 'medium', 'large']
		},
		colorTheme: {
			options: colorThemeArray
		},
		iconAlignment: {
			options: ['left', 'right']
		},
		icon: {
			table: {
				disable: true
			}
		}
	},
	decorators: [withDesign]
}

const Template: Story<
	PropsWithChildren<
		React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
	>
> = (args) => <StyledButton {...args} />
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
