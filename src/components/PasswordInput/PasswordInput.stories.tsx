import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import {
	PasswordInput as PasswordInputComponent,
	PasswordInputProps
} from './PasswordInput'

export default {
	component: PasswordInputComponent,
	argTypes,
	args: {
		label: 'Password',
		size: 'md'
	}
}

export const PasswordInput: StoryFn<PasswordInputProps> = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<PasswordInputComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.target.value)}
		/>
	)
}
