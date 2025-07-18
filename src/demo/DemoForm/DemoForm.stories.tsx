import type { StoryObj } from '@storybook/react'
import React from 'react'

import DemoFormComponent from './index'

export default {
	title: 'demo / Form',
	component: DemoFormComponent
}

export const Form: StoryObj = {
	render: (args) => <DemoFormComponent {...args} />
}
