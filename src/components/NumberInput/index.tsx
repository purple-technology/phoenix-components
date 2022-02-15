import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledInput } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'
import { getSanitizedValue, isValidNumeric } from './utils'

export interface NumberInputProps
	extends Omit<
			InputHTMLAttributes<HTMLInputElement>,
			'size' | 'type' | 'value' | 'onChange'
		>,
		FormControlProps {
	value: number | null
	onChange: (value: number | null) => void
	numberFormatErrorMessage: string
	maxDecimalCount: number
}

/**
 * `NumberInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const NumberInput: React.FC<NumberInputProps> = ({
	size = 'medium',
	testId = 'NumberInput',
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	className,
	onChange,
	value,
	onFocus,
	onBlur,
	numberFormatErrorMessage,
	maxDecimalCount = 2,
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<HTMLInputElement>(
		onFocus,
		onBlur
	)

	const initialTextValue =
		value === undefined || value === null ? '' : value.toString()

	const [textValue, setTextValue] = useState(initialTextValue)
	const [internalError, setInternalError] = useState<string | undefined>(
		undefined
	)

	useEffect(() => {
		if (textValue) {
			if (isValidNumeric(textValue)) {
				const { stringValue, numberValue } = getSanitizedValue(
					textValue,
					maxDecimalCount
				)
				onChange(numberValue)
				setTextValue(stringValue)
				setInternalError(undefined)
			} else {
				onChange(null)
				setInternalError(numberFormatErrorMessage ?? 'Wrong number format')
			}
		} else {
			setInternalError(undefined)
			onChange(null)
		}
		// We only really need to trigger this when the textValue changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textValue, setTextValue])

	return (
		<FormControl
			label={label}
			success={success}
			warning={warning}
			error={internalError ?? error}
			contentRight={contentRight}
			helperText={helperText}
			className={className}
			size={size}
			disabled={props.disabled}
			filled={!!textValue}
			focused={focused}
			minimal={props.minimal}
			testId={testId}
		>
			<StyledInput
				onChange={(e): void => setTextValue(e.target.value)}
				type="text"
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				focused={focused}
				disabled={props.disabled ?? false}
				$size={size}
				value={textValue}
				inputMode={maxDecimalCount > 0 ? 'decimal' : 'numeric'}
			/>
		</FormControl>
	)
}
