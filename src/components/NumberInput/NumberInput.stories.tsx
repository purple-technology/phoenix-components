import type { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { argTypes } from '../common/FormControl/stories'
import { NumberInput as NumberInputComponent } from './index'

export default {
	component: NumberInputComponent,
	argTypes: {
		...argTypes
	},
	args: {
		label: 'Input Label',
		maxDecimalCount: 2,
		size: 'md'
	}
} as Meta<typeof NumberInputComponent>

export const NumberInput: StoryFn<typeof NumberInputComponent> = (args) => {
	const [value, setValue] = useState<number | null>(args.value ?? null)

	return (
		<NumberInputComponent
			{...args}
			value={value}
			onChange={(v): void => {
				setValue(v)
				args.onChange(v)
			}}
		/>
	)
}
