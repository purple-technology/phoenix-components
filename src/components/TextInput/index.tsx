import React, { forwardRef, InputHTMLAttributes } from 'react'

import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledInput } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface TextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		FormControlProps {}

/**
 * `TextInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const TextInput: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<TextInputProps> & React.RefAttributes<HTMLInputElement>
> = forwardRef(function TextInput(
	{
		size = 'md',
		type = 'text',
		testId = 'TextInput',
		label,
		success,
		warning,
		error,
		contentRight,
		helperText,
		className,
		...props
	},
	ref
) {
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
			minimal={props.minimal}
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
				ref={ref}
			/>
		</FormControl>
	)
})
