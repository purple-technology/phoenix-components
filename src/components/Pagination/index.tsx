import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ButtonColorTheme } from '../../types/ColorTheme'
import { ComponentSize } from '../../types/ComponentSize'
import { ButtonProps } from '../Button'
import { MarginProps } from '../common/Spacing/MarginProps'
import { Ellipsis, PaginationContainer, StyledButton } from './PaginationStyles'
import { usePagination } from './usePagination'

export interface PaginationProps extends GenericComponentProps, MarginProps {
	onChange: (page: number) => void
	totalPages: number
	page: number
	previousLabel?: string | null
	nextLabel?: string | null
	colorTheme?: ButtonColorTheme
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

	const Button: React.FC<ButtonProps> = (props) => (
		<StyledButton colorTheme={colorTheme} size={size} light {...props} />
	)

	return (
		<PaginationContainer {...props} data-testid={testId}>
			<Button
				disabled={page <= 1}
				onClick={(): void => onChange(page - 1)}
				icon="arrow-left"
			>
				{previousLabel}
			</Button>

			{pages.map((pageIterator) => {
				if (pageIterator === 'ellipsis') {
					return <Ellipsis size={size}>...</Ellipsis>
				}
				return (
					<Button
						key={pageIterator}
						onClick={(): void => onChange(pageIterator as number)}
						colorTheme={page === pageIterator ? colorTheme : 'neutral'}
					>
						{pageIterator}
					</Button>
				)
			})}

			<Button
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
