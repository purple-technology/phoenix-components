import { StoryObj } from '@storybook/react'
import React from 'react'

import { Box } from '.'

export default {
	title: 'components / Box',

	parameters: {
		viewMode: 'docs',
		docs: {
			source: {
				type: 'dynamic'
			}
		}
	}
}

export const TextAlign: StoryObj<typeof Box> = {
	render: () => <Box textAlign="center">Text centered</Box>
}

export const MarginPadding: StoryObj<typeof Box> = {
	render: () => (
		<Box ml="xxl" py={20}>
			Content with margin and padding
		</Box>
	)
}

export const Gap: StoryObj<typeof Box> = {
	render: () => (
		<Box display="flex" flexWrap="wrap" columnGap="s" rowGap={40}>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
			<Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
				Content with gaps
			</Box>
		</Box>
	)
}

export const OtherExamples: StoryObj<typeof Box> = {
	render: () => (
		<Box opacity="0.5" position="relative" left="12px">
			Other CSS attributes
		</Box>
	)
}
