import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { TextInput } from '../TextInput'
import { MultiSlider as MultiSliderComponent, MultiSliderValue } from './index'

export default {
	title: 'components / MultiSlider',
	component: MultiSliderComponent
} as ComponentMeta<typeof MultiSliderComponent>

export const Range: ComponentStory<typeof MultiSliderComponent> = (args) => {
	const [value, setValue] = useState<MultiSliderValue>([60, 80])

	return (
		<MultiSliderComponent
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

export const RangeWithInputs: ComponentStory<typeof MultiSliderComponent> = (
	args
) => {
	const [inputValue, setInputValue] = useState<MultiSliderValue>([60, 80])
	const [sliderValue, setSliderValue] = useState<MultiSliderValue>([60, 80])

	const startValue = inputValue[0]
	const endValue = inputValue[1]

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
				<Box pr="s" />
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
			<Box pt="s" />
			<MultiSliderComponent
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

export const MultiSlider: ComponentStory<typeof MultiSliderComponent> = (
	args
) => {
	const [value, setValue] = useState<MultiSliderValue>([25, 50, 75])

	return (
		<MultiSliderComponent
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
MultiSlider.storyName = 'MultiSlider'
