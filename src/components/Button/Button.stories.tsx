import type { StoryFn } from '@storybook/react-vite'
import React, { PropsWithChildren } from 'react'

import { argTypes } from '../common/Button/stories'
import { Button as ButtonComponent, ButtonProps } from './index'

export default {
	component: ButtonComponent,

	argTypes: {
		...argTypes,
		disabled: {
			control: 'boolean'
		}
	}
}

const Template: StoryFn<
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

export const Default = {
	args: {
		...Template.args
	},

	parameters: {
		...Template.parameters
	}
}

export const WithIcon = {
	args: {
		...Template.args,
		icon: 'edit'
	},

	parameters: {
		...Template.parameters
	}
}
