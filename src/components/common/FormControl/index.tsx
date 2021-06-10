import React from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../../enum/ComponentSize'
import checkIcon from '../../../icons/check.svg'
import FormControlWarningError from '../FormControlWarningError'
import {
	Checkmark,
	ContentRight,
	Fieldset,
	HelperText,
	InputWrapper,
	Label,
	Legend,
	Wrapper
} from './FormControlStyles'

export interface FormControlProps {
	/** Text displayed inside the input field */
	label?: string
	/** Green border and checkmark visible */
	success?: boolean
	/** Show yellow warning text and icon under the input */
	warning?: string
	/** Show red error text and icon under the input */
	error?: string | boolean
	/** Content to display on the right in LTR and on the left in RTL mode */
	contentRight?: string | React.ReactNode
	/** Helper text to display when input is focused */
	helperText?: string
	RTL?: boolean
	size?: ComponentSizeSmallMediumLarge
	className?: string
	disabled?: boolean
	focused?: boolean
}

interface FormControlInternalProps extends FormControlProps {
	filled?: boolean
}

const FormControl: React.FC<FormControlInternalProps> = ({
	size = ComponentSize.MEDIUM,
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	RTL,
	className,
	disabled,
	focused,
	filled,
	...props
}) => {
	return (
		<Wrapper dir={RTL ? 'rtl' : 'ltr'} className={className}>
			<Label
				focused={focused}
				warning={!!warning}
				error={!!error}
				filled={filled}
				disabled={disabled}
				size={size}
				RTL={RTL}
			>
				{label}
			</Label>

			<InputWrapper>
				{props.children}

				{success && <Checkmark $size={size} src={checkIcon} $RTL={RTL} />}

				{contentRight && (
					<ContentRight size={size} RTL={RTL}>
						{contentRight}
					</ContentRight>
				)}

				<Fieldset
					focused={focused}
					error={!!error}
					success={success}
					warning={!!warning}
					disabled={disabled}
					size={size}
				>
					<Legend focused={focused} filled={filled} RTL={RTL} label={label}>
						<span>{label}</span>
					</Legend>
				</Fieldset>
			</InputWrapper>

			{helperText && !error && !warning && (
				<HelperText focused={focused}>{helperText}</HelperText>
			)}

			<FormControlWarningError warning={warning} error={error} />
		</Wrapper>
	)
}

export default FormControl
