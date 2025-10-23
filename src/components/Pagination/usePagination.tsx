/**
 * This solution was taken from material-ui project
 * https://github.com/mui-org/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js
 */

interface UsePaginationProps {
	page: number
	totalPages: number
}

const range = (start: number, end: number): number[] => {
	const length = end - start + 1
	return Array.from({ length }, (_, i) => start + i)
}

export const usePagination = ({
	page,
	totalPages
}: UsePaginationProps): Array<number | string> => {
	// TODO: These two consts can be potentially turned into component props to make the pagination more configurable.
	// I propose to keep it as simple as possible for now.
	const boundaryPages = 1
	const siblingPages = 1

	const startPages = range(1, Math.min(boundaryPages, totalPages))
	const endPages = range(
		Math.max(totalPages - boundaryPages + 1, boundaryPages + 1),
		totalPages
	)

	const siblingsStart = Math.max(
		Math.min(
			// Natural start
			page - siblingPages,
			// Lower boundary when page is high
			totalPages - boundaryPages - siblingPages * 2 - 1
		),
		// Greater than startPages
		boundaryPages + 2
	)

	const siblingsEnd = Math.min(
		Math.max(
			// Natural end
			page + siblingPages,
			// Upper boundary when page is low
			boundaryPages + siblingPages * 2 + 2
		),
		// Less than endPages
		endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
	)

	// Basic list of items to render
	// e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
	return [
		...startPages,

		// Start ellipsis

		...(siblingsStart > boundaryPages + 2
			? ['ellipsis-start']
			: boundaryPages + 1 < totalPages - boundaryPages
				? [boundaryPages + 1]
				: []),

		// Sibling pages
		...range(siblingsStart, siblingsEnd),

		// End ellipsis

		...(siblingsEnd < totalPages - boundaryPages - 1
			? ['ellipsis-end']
			: totalPages - boundaryPages > boundaryPages
				? [totalPages - boundaryPages]
				: []),

		...endPages
	]
}
