import type { StoryObj } from '@storybook/react'

import TextPageComponent from '.'

export default {
	title: 'demo / TextPage',
	component: TextPageComponent
}

export const TextPage: StoryObj = {
	render: (args) => <TextPageComponent {...args} />
}
TextPage.storyName = 'TextPage'
