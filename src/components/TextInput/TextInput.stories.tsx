import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { TextInput as TextInputComponent, TextInputProps } from './index'

export default {
	component: TextInputComponent,
	title: 'components / TextInput',
	argTypes
}

export const TextInput: Story<TextInputProps> = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextInputComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.target.value)}
		/>
	)
}

TextInput.args = {
	label: 'Input Label'
}

TextInput.storyName = 'TextInput'
