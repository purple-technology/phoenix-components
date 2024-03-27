import 'nouislider/dist/nouislider.css'

import usePrevious from '@react-hook/previous'
import React, { useEffect } from 'react'

import { CommonSlider } from '../common/Slider'
import { CommonSliderProps, ComponentSliderProps } from '../common/Slider/types'
import { useSlider } from '../common/Slider/useSlider'

export type MultiSliderValue = (number | string)[]

export interface MultiSliderProps
	extends CommonSliderProps,
		ComponentSliderProps {
	value: MultiSliderValue
	onChange(value: MultiSliderValue): void
	onRelease?(value: MultiSliderValue): void
}

export const MultiSlider: React.FC<MultiSliderProps> = ({
	testId = 'MultiSlider',
	px,
	...props
}) => {
	const prevValue = usePrevious<MultiSliderValue>(props.value)
	const [slider, sliderRef] = useSlider<MultiSliderValue>(
		props.value,
		props,
		prevValue
	)

	useEffect(() => {
		if (!slider || !slider.current) return

		slider.current.on('update', () => {
			const value = slider.current?.get()
			Array.isArray(value) && props.onChange(value)
		})

		slider.current.on('change', () => {
			const value = slider.current?.get()
			props.onRelease && Array.isArray(value) && props.onRelease(value)
		})
	}, [slider])

	return (
		<CommonSlider
			className={props.className}
			testId={testId}
			sliderRef={sliderRef}
			px={px}
		/>
	)
}
