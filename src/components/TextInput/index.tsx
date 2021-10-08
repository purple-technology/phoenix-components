import React, { InputHTMLAttributes } from 'react'

import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledInput } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface TextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		FormControlProps {}

/**
 * `TextInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const TextInput: React.FC<TextInputProps> = ({
	size = 'medium',
	type = 'text',
	testId = 'TextInput',
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	RTL,
	className,
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } = useFormControl<HTMLInputElement>(
		props.onFocus,
		props.onBlur
	)

	return (
		<FormControl
			label={label}
			success={success}
			warning={warning}
			error={error}
			contentRight={contentRight}
			helperText={helperText}
			className={className}
			size={size}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
			testId={testId}
		>
			<StyledInput
				{...props}
				type={type}
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				focused={focused}
				disabled={props.disabled ?? false}
				$size={size}
			/>
		</FormControl>
	)
}
