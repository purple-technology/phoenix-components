import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'

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
	numberFormatErrorMessage?: string
	maxDecimalCount?: number
	min?: number
	max?: number
	numberBelowMinErrorMessage?: string
	numberAboveMaxErrorMessage?: string
}

/**
 * `NumberInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const NumberInput: React.FC<NumberInputProps> = ({
	size = 'md',
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
	numberFormatErrorMessage = 'Wrong number format',
	maxDecimalCount = 2,
	min,
	max,
	numberBelowMinErrorMessage = `Number must be ${min} or higher`,
	numberAboveMaxErrorMessage = `Number must be ${max} or lower`,
	...props
}) => {
	const inputRef = useRef<HTMLInputElement>(null)
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
		let newNumberValue: number | null = null
		let newStringValue = textValue
		let newError: string | undefined = undefined

		if (textValue) {
			if (isValidNumeric(textValue)) {
				const { stringValue, numberValue } = getSanitizedValue(
					textValue,
					maxDecimalCount
				)
				newStringValue = stringValue

				if (min !== undefined && numberValue < min) {
					newError = numberBelowMinErrorMessage
				} else if (max !== undefined && numberValue > max) {
					newError = numberAboveMaxErrorMessage
				} else {
					newNumberValue = numberValue
				}
			} else {
				newError = numberFormatErrorMessage
			}
		}

		setInternalError(newError)
		onChange(newNumberValue)
		setTextValue(newStringValue)
		// We only really need to trigger this when the textValue changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textValue, setTextValue])

	useEffect(() => {
		if (value === null) {
			if (!focused) {
				setTextValue('')
				setInternalError(undefined)
			}
		} else {
			const { stringValue, numberValue } = getSanitizedValue(
				value.toString(),
				maxDecimalCount
			)
			// Don't change the input if it represents the same number. This should avoid 123.0 being automatically rewritten to 123
			if (Number.parseFloat(textValue) !== numberValue) {
				setTextValue(stringValue)
				setInternalError(undefined)
			}
		}
		// We specifically only want to watch for changes in value
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	return (
		<FormControl
			label={label}
			success={!internalError && success}
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
				{...props}
				onChange={(e): void => setTextValue(e.target.value)}
				onInput={(): void => {
					if (inputRef.current) {
						const currentValue = inputRef.current.value
						// If there is no selection, selectionStart == selectionEnd == the current cursor position
						let cursorPosition =
							inputRef.current.selectionStart || currentValue.length
						const re = /[^0-9.,-]/gi
						const previousLength = currentValue.length
						if (re.test(currentValue)) {
							inputRef.current.value = currentValue.replace(re, '')
							cursorPosition -= previousLength - inputRef.current.value.length
							// Set cursor to previous position so it doesn't jump to the end of the input
							inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
						}
					}
				}}
				type="text"
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				focused={focused}
				disabled={props.disabled ?? false}
				$size={size}
				value={textValue}
				inputMode={maxDecimalCount > 0 ? 'decimal' : 'numeric'}
				ref={inputRef}
				// Longer input does not make much sense because it hits the floating point precision
				maxLength={16}
			/>
		</FormControl>
	)
}
