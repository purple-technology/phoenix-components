import React, { FunctionComponent, InputHTMLAttributes } from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import FormControl, {
	FormControlProps
} from '../common/FormControl/FormControl'
import { StyledInput } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		FormControlProps {}

const TextInput: FunctionComponent<InputProps> = ({
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	RTL,
	className,
	componentSize,
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
			componentSize={componentSize}
			disabled={props.disabled}
			filled={!!props.value}
			focused={focused}
		>
			<StyledInput
				{...props}
				onFocus={thisOnFocus}
				onBlur={thisOnBlur}
				focused={focused}
				disabled={props.disabled}
				componentSize={componentSize}
			/>
		</FormControl>
	)
}

TextInput.defaultProps = {
	type: 'text',
	componentSize: ComponentSize.MEDIUM
}

export default TextInput
