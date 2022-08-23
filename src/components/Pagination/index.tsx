import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSize } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { Button, Ellipsis, PaginationContainer } from './PaginationStyles'
import { usePagination } from './usePagination'

export interface PaginationProps extends GenericComponentProps, MarginProps {
	onChange: (page: number) => void
	totalPages: number
	page: number
	previousLabel?: string | null
	nextLabel?: string | null
	colorTheme?: ColorTheme
	size?: ComponentSize
}

export const Pagination: React.FC<PaginationProps> = ({
	testId = 'Pagination',
	size = 'medium',
	colorTheme = 'primary',
	previousLabel = 'Previous page',
	nextLabel = 'Next page',
	page,
	totalPages,
	onChange,
	...props
}) => {
	const pages = usePagination({ page, totalPages })

	const buttonProps = {
		colorTheme,
		size,
		light: true,
		mx: 'xxxs',
		mb: 'xxs'
	}

	return (
		<PaginationContainer mx="-4px" {...props} data-testid={testId}>
			<Button
				{...buttonProps}
				disabled={page <= 1}
				onClick={(): void => onChange(page - 1)}
				icon="arrow-left"
			>
				{previousLabel}
			</Button>

			{pages.map((pageIterator) => {
				if (typeof pageIterator === 'string') {
					return (
						<Ellipsis size={size} key={pageIterator}>
							...
						</Ellipsis>
					)
				}
				return (
					<Button
						{...buttonProps}
						key={pageIterator}
						onClick={(): void => onChange(pageIterator as number)}
						colorTheme={page === pageIterator ? colorTheme : 'neutral'}
						selected={page === pageIterator}
					>
						{pageIterator}
					</Button>
				)
			})}

			<Button
				{...buttonProps}
				disabled={page >= totalPages}
				onClick={(): void => onChange(page + 1)}
				icon="arrow-right"
				iconAlignment="right"
			>
				{nextLabel}
			</Button>
		</PaginationContainer>
	)
}
