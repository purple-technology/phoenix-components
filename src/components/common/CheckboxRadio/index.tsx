import { nanoid } from 'nanoid'
import React, { InputHTMLAttributes } from 'react'

import { ColorTheme } from '../../../types/ColorTheme'
import { ComponentSizeMediumLarge } from '../../../types/ComponentSize'

export interface CheckboxRadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	rtl?: boolean
	colorTheme?: ColorTheme
	size?: ComponentSizeMediumLarge
}

const CheckboxRadio: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
	children,
	...props
}) => {
	const id = props.id ?? nanoid()

	return (
		<>
			<input {...props} id={id} />
			<label htmlFor={id}>
				<span>{children}</span>
			</label>
		</>
	)
}

export default CheckboxRadio
