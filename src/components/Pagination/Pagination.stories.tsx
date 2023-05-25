import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { Pagination as PaginationComponent } from '.'

export default {
	title: 'components / Pagination',
	component: PaginationComponent,
	args: {
		totalPages: 10
	}
} as Meta<typeof PaginationComponent>

export const Pagination: StoryFn<typeof PaginationComponent> = (args) => {
	const [page, setPage] = useState(1)

	return <PaginationComponent {...args} page={page} onChange={setPage} />
}
