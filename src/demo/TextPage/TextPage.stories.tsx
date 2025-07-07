import { Story } from '@storybook/react'
import React from 'react'

import TextPageComponent from '.'

export default {
	title: 'demo / TextPage',
	component: TextPageComponent
}

export const TextPage: Story = (args) => <TextPageComponent {...args} />
TextPage.storyName = 'TextPage'
