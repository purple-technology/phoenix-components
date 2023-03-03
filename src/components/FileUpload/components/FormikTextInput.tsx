import type { FieldProps } from 'formik'
import React from 'react'

import { TextInput } from '../../TextInput'

export const FormikTextInput: React.FC<FieldProps> = ({
	field,
	form: { touched, errors },
	...props
}) => {
	return (
		<TextInput
			{...props}
			{...field}
			error={
				touched[field.name] &&
				(errors[field.name] as string | boolean | undefined)
			}
		/>
	)
}
