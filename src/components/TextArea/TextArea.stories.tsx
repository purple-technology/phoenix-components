import type { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { TextArea as TextAreaComponent, type TextAreaProps } from './index'

export default {
	component: TextAreaComponent,
	argTypes: {
		...argTypes,
		rows: {
			control: {
				type: 'number'
			}
		}
	},
	args: {
		label: 'Input Label',
		size: 'md'
	}
}

export const TextArea: StoryFn<TextAreaProps> = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return (
		<TextAreaComponent
			{...args}
			value={value}
			onChange={(e): void => setValue(e.target.value)}
		/>
	)
}
