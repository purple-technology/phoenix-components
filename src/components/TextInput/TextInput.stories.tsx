import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import TextInputComponent, { InputProps } from './index'

export default {
	component: TextInputComponent,
	title: 'components / TextInput',
	argTypes
}

export const TextInput = (args: InputProps) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextInputComponent
			{...args}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
}

TextInput.args = {
	label: 'Input Label'
}
