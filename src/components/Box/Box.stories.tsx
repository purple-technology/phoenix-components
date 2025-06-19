import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { marginArgTypes, paddingArgTypes } from '../common/Spacing/stories'
import { Box } from '.'

export default {
	title: 'components / Box',
	component: Box,
	argTypes: {
		...marginArgTypes,
		...paddingArgTypes,
		gap: {
			control: 'text'
		},
		rowGap: {
			control: 'text'
		},
		columnGap: {
			control: 'text'
		}
	}
} as Meta<typeof Box>

export const TextAlign: StoryObj<typeof Box> = {
	render: (args) => (
		<Box {...args} textAlign="center">
			Text centered
		</Box>
	)
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
