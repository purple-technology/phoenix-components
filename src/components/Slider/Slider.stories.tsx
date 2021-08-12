import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Spacer } from '../Spacer'
import { TextInput } from '../TextInput'
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

export const Range: ComponentStory<typeof SliderComponent> = (args) => {
	const [value, setValue] = useState<SliderValue>([60, 80])

	return (
		<SliderComponent
			{...args}
			value={value}
			onChange={(value): void => setValue(value)}
			range={{
				min: 0,
				max: 100
			}}
		/>
	)
}

const FlexRow = styled.div`
	display: flex;
`

export const RangeWithInputs: ComponentStory<typeof SliderComponent> = (
	args
) => {
	const [inputValue, setInputValue] = useState<SliderValue>([60, 80])
	const [sliderValue, setSliderValue] = useState<SliderValue>([60, 80])

	const startValue = (inputValue as (string | number)[])[0]
	const endValue = (inputValue as (string | number)[])[1]

	return (
		<>
			<FlexRow>
				<TextInput
					value={startValue.toString()}
					onChange={(e): void =>
						setInputValue([e.currentTarget.value, endValue])
					}
					onBlur={(e): void =>
						setSliderValue([e.currentTarget.value, endValue])
					}
				/>
				<Spacer w="s" />
				<TextInput
					value={endValue}
					onChange={(e): void =>
						setInputValue([startValue, e.currentTarget.value])
					}
					onBlur={(e): void =>
						setSliderValue([startValue, e.currentTarget.value])
					}
				/>
			</FlexRow>
			<Spacer h="s" />
			<SliderComponent
				{...args}
				value={sliderValue}
				onChange={(value): void => {
					setSliderValue(value)
					setInputValue(value)
				}}
				range={{
					min: 0,
					max: 100
				}}
			/>
		</>
	)
}
RangeWithInputs.storyName = 'RangeWithInputs'
