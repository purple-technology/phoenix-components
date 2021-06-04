import { Story } from '@storybook/react'
import React, { PropsWithChildren } from 'react'

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
		componentSize: {
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
	}
}

const Template: Story<
	PropsWithChildren<
		React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLButtonElement>
	>
> = (args) => <StyledButton {...args} />
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
