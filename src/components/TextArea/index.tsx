import React, { TextareaHTMLAttributes } from 'react'

import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledTextArea } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface InputProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		FormControlProps {}

const TextArea: React.FC<InputProps> = ({
	size = 'medium',
	rows = 3,
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	RTL,
	className,
	...props
}) => {
	const { focused, thisOnFocus, thisOnBlur } =
		useFormControl<HTMLTextAreaElement>(props.onFocus, props.onBlur)

	return (
		<>
			<FormControl
				label={label}
				success={success}
				warning={warning}
				error={error}
				contentRight={contentRight}
				helperText={helperText}
				RTL={RTL}
				className={className}
				size={size}
				disabled={props.disabled}
				filled={!!props.value}
				focused={focused}
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
		</>
	)
}

export default TextArea
