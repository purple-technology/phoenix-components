import React, {
	FunctionComponent,
	InputHTMLAttributes,
	TextareaHTMLAttributes
} from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import FormControl, {
	FormControlProps
} from '../common/FormControl/FormControl'
import { StyledTextArea } from '../common/FormControl/FormControlStyles'
import { useFormControl } from '../common/FormControl/useFormControl'

export interface InputProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		FormControlProps {}

const TextArea: FunctionComponent<InputProps> = ({
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
				componentSize={componentSize}
				disabled={props.disabled}
				filled={!!props.value}
				focused={focused}
			>
				<StyledTextArea
					{...props}
					onFocus={thisOnFocus}
					onBlur={thisOnBlur}
					focused={focused}
					disabled={props.disabled}
					componentSize={componentSize}
				/>
			</FormControl>
		</>
	)
}

TextArea.defaultProps = {
	rows: 3,
	componentSize: ComponentSize.MEDIUM
}

export default TextArea
