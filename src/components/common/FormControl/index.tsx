import React from 'react'

import checkIcon from '../../../images/check.svg'
import { ComponentSize } from '../../../types/ComponentSize'
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
import { FormControlErrorType, FormControlWarningType } from './types'

export interface FormControlProps {
	/** Text displayed inside the input field */
	label?: string
	/** Green border and checkmark visible */
	success?: boolean
	/** Show yellow warning text and icon under the input */
	warning?: FormControlWarningType
	/** Show red error text and icon under the input */
	error?: FormControlErrorType
	/** Content to display on the right in LTR and on the left in RTL mode */
	contentRight?: string | React.ReactNode
	/** Helper text to display when input is focused */
	helperText?: string
	/** @deprecated RTL is unnecessary, unsed and will be removed in the next major version. */
	RTL?: boolean
	size?: ComponentSize
	className?: string
	disabled?: boolean
	focused?: boolean
}

interface FormControlInternalProps extends FormControlProps {
	filled?: boolean
}

const FormControl: React.FC<FormControlInternalProps> = ({
	size = 'medium',
	success,
	warning,
	error,
	contentRight,
	helperText,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	RTL,
	className,
	disabled,
	focused,
	filled,
	...props
}) => {
	// Label is not displayed for tiny size
	const label = size !== 'tiny' ? props.label : undefined

	return (
		<Wrapper className={className}>
			<Label
				focused={focused}
				warning={!!warning}
				error={!!error}
				filled={filled}
				disabled={disabled}
				size={size}
			>
				{label}
			</Label>

			<InputWrapper>
				{props.children}

				{success && <Checkmark $size={size} src={checkIcon} />}

				{contentRight && (
					<ContentRight size={size}>{contentRight}</ContentRight>
				)}

				<Fieldset
					focused={focused}
					error={!!error}
					success={success}
					warning={!!warning}
					disabled={disabled}
					size={size}
				>
					<Legend focused={focused} filled={filled} label={label}>
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
