import React from 'react'

import { StyledSlider, Wrapper } from './SliderStyles'

type SubRange = number | [number] | [number, number]

export interface CommonSliderProps {
	range: {
		min: SubRange
		max: SubRange
		[key: string]: SubRange
	}
	connect?: 'lower' | 'upper' | boolean | boolean[]
	step?: number
	className?: string
}

export interface InternalCommonSliderProps {
	sliderRef: React.RefObject<HTMLDivElement>
	className?: string
}

export const CommonSlider: React.FC<InternalCommonSliderProps> = (props) => {
	return (
		<Wrapper className={props.className}>
			<StyledSlider ref={props.sliderRef} />
		</Wrapper>
	)
}
