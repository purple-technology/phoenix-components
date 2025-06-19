import { StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Box } from '../Box'
import { Grid as GridComponent } from '.'

export default {
	title: 'components / Grid',
	parameters: {
		viewMode: 'docs',
		docs: {
			source: {
				type: 'dynamic'
			}
		}
	}
}

export const Grid: StoryObj<typeof GridComponent> = {
	render: () => (
		<GridComponent gridTemplateColumns="1fr 1fr" gap="20px">
			<Box>Item 1</Box>
			<Box>Item 2</Box>
		</GridComponent>
	)
}
