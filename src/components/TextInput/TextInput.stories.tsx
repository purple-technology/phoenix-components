import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { TextInput as TextInputComponent, TextInputProps } from './index'

export default {
	component: TextInputComponent,
	argTypes,
	args: {
		label: 'Input Label',
		size: 'md'
	}
}

export const TextInput: StoryFn<TextInputProps> = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextInputComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.target.value)}
		/>
	)
}
