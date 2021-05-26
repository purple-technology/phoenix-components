import React, { useState } from 'react'
import TextAreaComponent, { InputProps } from './index'
import { argTypes } from '../common/FormControl/stories'

export default {
	title: 'components / TextArea',
	component: TextAreaComponent,
	argTypes: {
		...argTypes,
		rows: {
			control: {
				type: 'number'
			}
		}
	}
}

export const TextArea = (args: InputProps) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextAreaComponent
			{...args}
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}
TextArea.args = {
	label: 'Input Label'
}
