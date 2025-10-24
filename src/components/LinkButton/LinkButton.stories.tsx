import type { StoryFn } from '@storybook/react'
import type { PropsWithChildren } from 'react'

import { argTypes } from '../common/Button/stories'
import { LinkButton as LinkButtonComponent, type LinkButtonProps } from '.'

export default {
	component: LinkButtonComponent,
	argTypes,
	parameters: {
		componentSubtitle: 'Anchor tag <a> styled as a Button component'
	}
}

const Template: StoryFn<PropsWithChildren<LinkButtonProps>> = (args) => (
	<LinkButtonComponent {...args} />
)
Template.args = {
	children: 'Click me'
}
Template.storyName = 'LinkButton'

export const Default = {
	args: {
		...Template.args
	}
}

export const WithIcon = {
	args: {
		...Template.args,
		icon: 'edit'
	}
}
