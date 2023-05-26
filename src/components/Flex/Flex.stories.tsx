import { StoryObj } from '@storybook/react'
import React from 'react'

import { Box } from '../Box'
import { Flex as FlexComponent } from './index'

export default {
	title: 'components / Flex',
	parameters: {
		viewMode: 'docs',
		docs: {
			source: {
				type: 'dynamic'
			}
		}
	}
}

export const Flex: StoryObj<typeof FlexComponent> = {
	render: () => (
		<FlexComponent alignItems="center" justifyContent="space-around">
			<Box>Item 1</Box>
			<Box>Item 2</Box>
		</FlexComponent>
	)
}
