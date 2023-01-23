import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../../types/Color'
import { SizingSmMdLg } from '../../../types/Sizing'
import {
	FormControlErrorType,
	FormControlWarningType
} from '../FormControl/types'
import { Label } from './CheckboxRadioStyles'

export interface CheckboxRadioCommonProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		GenericComponentProps {
	/** @deprecated RTL is unnecessary, unsed and will be removed in the next major version. */
	RTL?: boolean
	colorTheme?: ColorTheme
	size?: SizingSmMdLg
	label?: React.ReactNode
	/** Show yellow warning text and icon under the input */
	warning?: FormControlWarningType
	/** Show red error text and icon under the input */
	error?: FormControlErrorType
}

interface CheckboxRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: React.ReactNode
}

const CheckboxRadio: React.FC<CheckboxRadioProps> = ({ label, ...props }) => {
	const id = props.id ?? nanoid()

	return (
		<>
			<input {...props} id={id} />
			<Label htmlFor={id}>{label}</Label>
		</>
	)
}

export default CheckboxRadio
