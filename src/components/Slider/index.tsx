import 'nouislider/dist/nouislider.css'

import usePrevious from '@react-hook/previous'
import React, { useEffect } from 'react'

import { CommonSlider } from '../common/Slider'
import { CommonSliderProps, ComponentSliderProps } from '../common/Slider/types'
import { useSlider } from '../common/Slider/useSlider'

export type SliderValue = number | string

export interface SliderProps extends CommonSliderProps, ComponentSliderProps {
	value: SliderValue
	onChange(value: SliderValue): void
	onRelease?(value: SliderValue): void
	limit?: number
}

export const Slider: React.FC<SliderProps> = ({
	testId = 'Slider',
	px,
	limit,
	...props
}) => {
	const prevValue = usePrevious<SliderValue>(props.value)
	const [slider, sliderRef] = useSlider<SliderValue>(
		props.value,
		props,
		prevValue
	)

	useEffect(() => {
		if (!slider || !slider.current) return

		slider.current.on('update', () => {
			const value = slider.current?.get()
			if (typeof value === 'string' || typeof value === 'number') {
				if (limit && Number(value) > limit) {
					slider.current?.set(limit)
					return
				}
				props.onChange(value)
			}
		})

		slider.current.on('change', () => {
			const value = slider.current?.get()
			if (
				props.onRelease &&
				(typeof value === 'string' || typeof value === 'number')
			) {
				props.onRelease(value)
			}
		})
	}, [slider])

	return (
		<CommonSlider
			className={props.className}
			sliderRef={sliderRef}
			testId={testId}
			px={px}
		/>
	)
}
