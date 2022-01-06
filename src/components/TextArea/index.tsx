import React, { TextareaHTMLAttributes } from 'react'

import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledTextArea } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		FormControlProps {}

/**
 * `TextArea` component supports all props from `TextareaHTMLAttributes<HTMLTextAreaElement>` interface.
 */
export const TextArea: React.FC<TextAreaProps> = ({
	size = 'medium',
	rows = 3,
	testId = 'TextArea',
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
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLTextAreaElement>(props.onFocus, props.onBlur)

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
			<StyledTextArea
				{...props}
				rows={rows}
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				focused={focused}
				disabled={props.disabled ?? false}
				$size={size}
			/>
		</FormControl>
	)
}
