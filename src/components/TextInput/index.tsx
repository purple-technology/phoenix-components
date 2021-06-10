import React, { InputHTMLAttributes } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import FormControl, { FormControlProps } from '../common/FormControl'
import { StyledInput } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		FormControlProps {}

const TextInput: React.FC<InputProps> = ({
	size = ComponentSize.MEDIUM,
	type = 'text',
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
			RTL={RTL}
			className={className}
			size={size}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
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

export default TextInput
