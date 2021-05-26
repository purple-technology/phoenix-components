import React, { useState } from 'react'

import TextInputComponent, { InputProps } from './index'
import { argTypes } from '../common/FormControl/stories'

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
			onChange={e => setValue(e.target.value)}
		/>
	)
}

TextInput.args = {
	label: 'Input Label'
}
