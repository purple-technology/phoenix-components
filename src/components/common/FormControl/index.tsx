import React, { PropsWithChildren, ReactElement } from 'react'

import checkIcon from '../../../images/check.svg'
import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { Sizing } from '../../../types/Sizing'
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

export interface FormControlProps extends GenericComponentProps {
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
	size?: Sizing
	disabled?: boolean
	focused?: boolean
	minimal?: boolean
}

interface FormControlInternalProps extends FormControlProps {
	filled?: boolean
}

const FormControl: React.FC<PropsWithChildren<FormControlInternalProps>> = ({
	size = 'md',
	success,
	warning,
	error,
	contentRight,
	helperText,
	className,
	disabled = false,
	focused,
	minimal,
	filled,
	testId,
	...props
}): ReactElement => {
	// Label is not displayed for xs size
	const label = size !== 'xs' ? props.label : undefined

	return (
		<Wrapper data-testid={testId} className={className}>
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

				<Fieldset
					focused={focused}
					minimal={minimal}
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

				{success && <Checkmark $size={size} src={checkIcon} />}

				{contentRight && (
					<ContentRight size={size}>{contentRight}</ContentRight>
				)}
			</InputWrapper>

			{helperText && !error && !warning && (
				<HelperText focused={focused}>{helperText}</HelperText>
			)}

			<FormControlWarningError warning={warning} error={error} />
		</Wrapper>
	)
}

export default FormControl
