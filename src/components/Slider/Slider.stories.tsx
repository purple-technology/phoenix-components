import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Slider as SliderComponent, SliderValue } from './index'

export default {
	title: 'components / Slider',
	component: SliderComponent
} as ComponentMeta<typeof SliderComponent>

export const Slider: ComponentStory<typeof SliderComponent> = (args) => {
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
