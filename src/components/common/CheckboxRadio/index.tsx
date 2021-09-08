import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { ButtonColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeMediumLarge } from '../../../types/ComponentSize'
import { Label } from './CheckboxRadioStyles'

export interface CheckboxRadioCommonProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/** @deprecated RTL is unnecessary, unsed and will be removed in the next major version. */
	RTL?: boolean
	colorTheme?: ButtonColorTheme
	size?: ComponentSizeMediumLarge
	label?: React.ReactNode
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
