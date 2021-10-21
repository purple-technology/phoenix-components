import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Pagination as PaginationComponent } from '.'

export default {
	title: 'components / Pagination',
	component: PaginationComponent
} as ComponentMeta<typeof PaginationComponent>

export const Pagination: ComponentStory<typeof PaginationComponent> = (
	args
) => {
	const [page, setPage] = useState(1)

	return <PaginationComponent {...args} page={page} onChange={setPage} />
}
Pagination.args = {
	totalPages: 10
}
