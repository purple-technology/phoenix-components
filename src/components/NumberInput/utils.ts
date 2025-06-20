export function isValidNumeric(value: string): boolean {
	return /^((0|-?[1-9])\d*([.,]\d+)?)|(-0([.,]\d+))$/.test(value)
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
	const unifiedValue = value.replace(',', '.')
	const [integerString, fractionString] = unifiedValue.split('.') // second element is undefined if there is no decimal point

	// Limit fraction part to maxDecimalCount decimals, if it exists
	const clippedFractionString =
		fractionString === undefined
			? undefined
			: fractionString.slice(0, maxDecimalCount)

	const isNegative = integerString.indexOf('-') === 0

	// Strip leading zeroes
	const strippedIntegerString = Number.parseInt(
		isNegative ? integerString.slice(1) : integerString
	).toString()

	// Join the three parts back together
	const sanitizedStringValue =
		(isNegative ? '-' : '') +
		strippedIntegerString +
		(clippedFractionString === undefined ? '' : `.${clippedFractionString}`)

	return {
		stringValue: usesCommas
			? sanitizedStringValue.replace('.', ',')
			: sanitizedStringValue,
		numberValue: Number.parseFloat(sanitizedStringValue)
	}
}
