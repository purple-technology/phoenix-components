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
	const unifiedValue = value.replace(',', '.')
	const [integerString, fractionString] = unifiedValue.split('.') // second element is undefined if there is no decimal point
	const clippedFractionString = // Limit fraction part to maxDecimalCount decimals, if it exists
		fractionString === undefined
			? undefined
			: fractionString.slice(0, maxDecimalCount)
	const strippedIntegerString = Number.parseInt(integerString).toString() // Strip leading zeroes
	const sanitizedStringValue = // Join the two parts back together
		strippedIntegerString +
		(clippedFractionString === undefined ? '' : `.${clippedFractionString}`)
	return {
		stringValue: usesCommas
			? sanitizedStringValue.replace('.', ',')
			: sanitizedStringValue,
		numberValue: Number.parseFloat(sanitizedStringValue)
	}
}
