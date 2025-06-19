import { Meta, StoryFn } from '@storybook/react-vite'
import React, { useState } from 'react'

import { Slider as SliderComponent, SliderValue } from './index'

export default {
	component: SliderComponent,
	args: {
		step: 5
	}
} as Meta<typeof SliderComponent>

export const Slider: StoryFn<typeof SliderComponent> = (args) => {
	const [value, setValue] = useState<SliderValue>(20)

	return (
		<SliderComponent
			{...args}
			value={value}
			onChange={(value): void => setValue(value)}
			range={{
				min: 0,
				max: 100
			}}
			step={5}
		/>
	)
}
