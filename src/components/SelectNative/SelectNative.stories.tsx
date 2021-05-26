import React, { useState } from 'react'

import SelectNativeComponent, { SelectNativeProps } from './index'
import { argTypes } from '../common/FormControl/stories'
import options from '../Select/options'

export default {
	title: 'components / SelectNative',
	component: SelectNativeComponent,
	argTypes
}

export const SelectNative = (args: SelectNativeProps) => {
	const [value, setValue] = useState(args.value)

	return (
		<SelectNativeComponent
			{...args}
			value={value}
			onChange={e => setValue(e)}
			options={options}
		/>
	)
}

SelectNative.args = {
	label: 'Select something'
}
