const daysInMonth = (m: number, y: number): number => {
	switch (m) {
		case 1:
			return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28
		case 8:
		case 3:
		case 5:
		case 10:
			return 30
		default:
			return 31
	}
}

export const isValidDate = (
	d?: string,
	m?: string | number,
	y?: string
): boolean => {
	if (!d || !m || !y) return false

	const day = parseInt(d, 10)
	const month = (typeof m === 'string' ? parseInt(m, 10) : m) - 1
	const year = parseInt(y, 10)

	return month >= 0 && month < 12 && day > 0 && day <= daysInMonth(month, year)
}
