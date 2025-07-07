import { Story } from '@storybook/react'
import React from 'react'

import DemoFormComponent from './index'

export default {
	title: 'demo / Form',
	component: DemoFormComponent
}

export const Form: Story = () => <DemoFormComponent />
