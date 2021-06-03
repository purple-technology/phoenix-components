import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import options from '../Select/options'
import SelectNativeComponent, { SelectNativeProps } from './index'

export default {
	title: 'components / SelectNative',
	component: SelectNativeComponent,
	argTypes
}

export const SelectNative: Story<SelectNativeProps> = (args) => {
	const [value, setValue] = useState(args.value)

	return (
		<SelectNativeComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e)}
			options={options}
		/>
	)
}

SelectNative.args = {
	label: 'Select something'
}

SelectNative.storyName = 'SelectNative'
