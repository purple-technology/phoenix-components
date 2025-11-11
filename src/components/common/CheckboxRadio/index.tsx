import { nanoid } from 'nanoid'
import type React from 'react'
import type { InputHTMLAttributes } from 'react'

import type { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import type { ColorTheme } from '../../../types/Color'
import type { SizingSmMdLg } from '../../../types/Sizing'
import type {
	FormControlErrorType,
	FormControlWarningType
} from '../FormControl/types'
import { Label } from './CheckboxRadioStyles'

export interface CheckboxRadioCommonProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		GenericComponentProps {
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
