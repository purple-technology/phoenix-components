import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { ColorTheme } from '../../types/Color'
import { Sizing } from '../../types/Sizing'
import { Pagination as PaginationComponent } from '.'

export default {
	title: 'components / Pagination',
	component: PaginationComponent,
	argTypes: {
		colorTheme: {
			control: 'select',
			options: ColorTheme
		},
		size: {
			control: 'radio',
			options: Sizing
		}
	},
	args: {
		totalPages: 10,
		page: 1,
		previousLabel: 'Previous page',
		nextLabel: 'Next page'
	}
} as Meta<typeof PaginationComponent>

export const Pagination: StoryFn<typeof PaginationComponent> = (args) => {
	const [page, setPage] = useState(1)

	return <PaginationComponent {...args} page={page} onChange={setPage} />
}
