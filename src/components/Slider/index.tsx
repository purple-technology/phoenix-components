import 'nouislider/dist/nouislider.css'

import { nanoid } from 'nanoid'
import noUiSlider, { API } from 'nouislider'
import React, { useEffect, useMemo, useRef } from 'react'

import { StyledSlider, Wrapper } from './SliderStyles'

export type SliderValue = number | string | (number | string)[]
type WrappedSubRange = [number] | [number, number]
type SubRange = number | WrappedSubRange

export interface SliderProps {
	value: SliderValue
	onChange(value: SliderValue): void
	onRelease?(value: SliderValue): void
	range: {
		min: SubRange
		max: SubRange
		[key: string]: SubRange
	}
	connect?: 'lower' | 'upper' | boolean | boolean[]
	step?: number
	className?: string
}

export const Slider: React.FC<SliderProps> = (props) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const slider = useRef<API>()
	const id = useMemo(() => nanoid(), [])

	useEffect(() => {
		if (!sliderRef || !sliderRef.current) return

		// For 1 value highlight lower part of slider, for 2 values (range) highlight in between
		const connect =
			props.connect ?? ['number', 'string'].includes(typeof props.value)
				? 'lower'
				: Array.isArray(props.value) && props.value.length === 2
				? [false, true, false]
				: undefined

		slider.current = noUiSlider.create(sliderRef.current, {
			start: props.value,
			range: props.range,
			step: props.step,
			connect
		})

		slider.current.on('update', () => {
			slider.current && props.onChange(slider.current.get())
		})

		slider.current.on('change', () => {
			slider.current && props.onRelease && props.onRelease(slider.current.get())
		})
	}, [sliderRef])

	return (
		<Wrapper className={props.className}>
			<StyledSlider id={`slider-${id}`} ref={sliderRef} />
		</Wrapper>
	)
}
