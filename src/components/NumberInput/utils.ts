export function isValidNumeric(value: string): boolean {
	return /^-?\d+([\.,]\d+)?$/.test(value)
}

// Limits to two decimals and strips any leading zeroes
// We assume it is a valid numeric value (the isValidNumeric function returns true for it)
export function getSanitizedValue(
	value: string,
	maxDecimalCount: number
): {
	stringValue: string
	numberValue: number
} {
	const usesCommas = value.includes(',')
	let initialNumber
	if (usesCommas) {
		initialNumber = Number.parseFloat(value.replace(',', '.'))
	} else {
		initialNumber = Number.parseFloat(value)
	}

	const power = Math.pow(10, maxDecimalCount)
	const floored = Math.floor(initialNumber * power) / power // Rounds to maxDecimalCount decimal numbers.
	return {
		stringValue: usesCommas
			? floored.toString().replace('.', ',')
			: floored.toString(),
		numberValue: floored
	}
}
