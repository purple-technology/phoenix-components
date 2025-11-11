import type { Meta, StoryObj } from '@storybook/react'
import type React from 'react'

import { Heading } from '../../components/Heading'

const HeadingsComponent: React.FC = () => {
	return (
		<>
			<Heading color="primary" element="h3" mb="s">
				Primary text
			</Heading>
			<Heading color="secondary" element="h3" mb="s">
				Secondary text
			</Heading>
			<Heading color="tertiary" element="h3" mb="s">
				Tertiary text
			</Heading>
			<Heading color="quaternary" element="h3" mb="s">
				Quaternary text
			</Heading>
		</>
	)
}

export default {
	component: HeadingsComponent,
	tags: ['!dev'],
	title: 'Foundation / Colors'
} as Meta<typeof Headings>

export const Headings: StoryObj = {
	render: (args) => <HeadingsComponent {...args} />
}
