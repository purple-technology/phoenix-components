import React, { FunctionComponent } from 'react'

import { ComponentSize } from '../../../enum/ComponentSize'
import checkIcon from '../../../icons/check.svg'
import { ColorTheme } from '../../../theme/ColorTheme'
import { WarningErrorText } from '../WarningErrorTextStyles'
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
	label: string
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
	componentSize?: ComponentSize
	className?: string
	disabled?: boolean
	focused?: boolean
}

interface FormControlInternalProps extends FormControlProps {
	filled?: boolean
}

const FormControl: React.FC<FormControlInternalProps> = ({
	label,
	success,
	warning,
	error,
	contentRight,
	helperText,
	RTL,
	className,
	componentSize,
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
				componentSize={componentSize}
				RTL={RTL}
			>
				{label}
			</Label>

			<InputWrapper>
				{props.children}

				{success && (
					<Checkmark componentSize={componentSize} src={checkIcon} RTL={RTL} />
				)}

				{contentRight && (
					<ContentRight componentSize={componentSize} RTL={RTL}>
						{contentRight}
					</ContentRight>
				)}

				<Fieldset
					focused={focused}
					error={!!error}
					success={success}
					warning={!!warning}
					disabled={disabled}
					componentSize={componentSize}
				>
					<Legend focused={focused} filled={filled} RTL={RTL}>
						<span>{label}</span>
					</Legend>
				</Fieldset>
			</InputWrapper>

			{helperText && !error && !warning && (
				<HelperText focused={focused}>{helperText}</HelperText>
			)}

			{!!warning && (
				<WarningErrorText colorTheme={ColorTheme.WARNING}>
					{warning}
				</WarningErrorText>
			)}

			{/* Error can be also boolean true in which case we don't want to show message.*/}
			{typeof error === 'string' && error !== '' && (
				<WarningErrorText colorTheme={ColorTheme.ERROR}>
					{error}
				</WarningErrorText>
			)}
		</Wrapper>
	)
}

export default FormControl
