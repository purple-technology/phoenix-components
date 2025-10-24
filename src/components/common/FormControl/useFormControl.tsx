import React, { type FocusEventHandler } from 'react'

interface UseFormControlProps<T> {
	focused: boolean
	thisOnFocus(event: React.FocusEvent<T>): void
	thisOnBlur(event: React.FocusEvent<T>): void
}

export function useFormControl<T>(
	onFocus: FocusEventHandler<T> | undefined,
	onBlur: FocusEventHandler<T> | undefined
): UseFormControlProps<T> {
	const [focused, setFocused] = React.useState(false)

	const thisOnFocus = (event: React.FocusEvent<T>): void => {
		setFocused(true)
		onFocus?.(event)
	}

	const thisOnBlur = (event: React.FocusEvent<T>): void => {
		setFocused(false)
		onBlur?.(event)
	}

	return { focused, thisOnFocus, thisOnBlur }
}
