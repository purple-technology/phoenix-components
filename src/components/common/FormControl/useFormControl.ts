import React, { FocusEventHandler } from 'react'

export function useFormControl<T>(
	onFocus: FocusEventHandler<T>,
	onBlur: FocusEventHandler<T>
) {
	const [focused, setFocused] = React.useState(false)

	const thisOnFocus = (event: React.FocusEvent<T>) => {
		setFocused(true)
		onFocus && onFocus(event)
	}

	const thisOnBlur = (event: React.FocusEvent<T>) => {
		setFocused(false)
		onBlur && onBlur(event)
	}

	return { focused, thisOnFocus, thisOnBlur }
}
