import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import TextAreaComponent, { InputProps } from './index'

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

export const TextArea: Story<InputProps> = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextAreaComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.target.value)}
		/>
	)
}
TextArea.args = {
	label: 'Input Label'
}
TextArea.storyName = 'TextArea'
