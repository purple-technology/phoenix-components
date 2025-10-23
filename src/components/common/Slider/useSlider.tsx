import { isEqual } from 'es-toolkit'
import noUiSlider, { API } from 'nouislider'
import React, { useEffect, useRef } from 'react'

import { CommonSliderProps } from './types'

export function useSlider<T extends string | number | (string | number)[]>(
	value: T,
	sliderProps: CommonSliderProps,
	prevValue?: T
): [
	React.MutableRefObject<API | null>,
	React.RefObject<HTMLDivElement | null>
] {
	const sliderRef = useRef<HTMLDivElement>(null)
	const slider = useRef<API>(null)

	useEffect(() => {
		if (!sliderRef || !slider || !sliderRef.current || slider.current) return

		//For 1 value highlight lower part of slider, for 2 values (range) highlight in between
		const connect =
			sliderProps.connect ??
			(['number', 'string'].includes(typeof value)
				? 'lower'
				: Array.isArray(value) && value.length === 2
				? [false, true, false]
				: undefined)

		slider.current = noUiSlider.create(sliderRef.current, {
			start: value,
			range: sliderProps.range,
			step: sliderProps.step,
			connect,
			animate: false,
			snap: sliderProps.snap,
			pips: sliderProps.pips
		})
	}, [sliderRef])

	useEffect(() => {
		if (!isEqual(value, prevValue)) {
			slider.current?.set(value)
		}
	}, [value])

	return [slider, sliderRef]
}
