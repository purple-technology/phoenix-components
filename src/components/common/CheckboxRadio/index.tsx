import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeMediumLarge } from '../../../types/ComponentSize'

export interface CheckboxRadioCommonProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	RTL?: boolean
	colorTheme?: ColorTheme
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
			<label htmlFor={id}>{label}</label>
		</>
	)
}

export default CheckboxRadio
