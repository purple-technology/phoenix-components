import React, { useState } from 'react'

import SelectComponent, { SelectProps } from './index'
import options from './options'

export default {
	title: 'components / Select',
	component: SelectComponent,
	argTypes: {
		success: {
			control: 'boolean'
		},
		error: {
			control: 'text'
		},
		warning: {
			control: 'text'
		},
		disabled: {
			control: 'boolean'
		},
		RTL: {
			control: 'boolean'
		}
	}
}

export const Select = (args: SelectProps) => {
	const [value, setValue] = useState(args.value)

	return (
		<SelectComponent
			{...args}
			value={value}
			onChange={(e) => setValue(e)}
			options={options}
		/>
	)
}

Select.args = {
	label: 'Select something'
}
