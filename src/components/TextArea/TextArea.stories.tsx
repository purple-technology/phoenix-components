import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { TextArea as TextAreaComponent, TextAreaProps } from './index'

export default {
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
TextArea.args = {
	label: 'Input Label'
}
TextArea.storyName = 'TextArea'
