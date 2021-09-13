import 'nouislider/dist/nouislider.css'

import usePrevious from '@react-hook/previous'
import React, { useEffect } from 'react'

import { CommonSlider, CommonSliderProps } from '../common/Slider'
import { useSlider } from '../common/Slider/useSlider'

export type SliderValue = number | string

export interface SliderProps extends CommonSliderProps {
	value: SliderValue
	onChange(value: SliderValue): void
	onRelease?(value: SliderValue): void
}

export const Slider: React.FC<SliderProps> = (props) => {
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

	return <CommonSlider className={props.className} sliderRef={sliderRef} />
}