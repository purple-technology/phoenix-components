import React from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { StyledSlider, Wrapper } from './SliderStyles'

type SubRange = number | [number] | [number, number]

export interface CommonSliderProps extends GenericComponentProps {
	range: {
		min: SubRange
		max: SubRange
		[key: string]: SubRange
	}
	connect?: 'lower' | 'upper' | boolean | boolean[]
	step?: number
}

export interface InternalCommonSliderProps extends GenericComponentProps {
	sliderRef: React.RefObject<HTMLDivElement>
}

export const CommonSlider: React.FC<InternalCommonSliderProps> = ({
	testId,
	...props
}) => {
	return (
		<Wrapper data-testid={testId} className={props.className}>
			<StyledSlider ref={props.sliderRef} />
		</Wrapper>
	)
}
