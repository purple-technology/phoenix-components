import React from 'react'

import { StyledSlider, Wrapper } from './SliderStyles'
import { ComponentSliderProps } from './types'

export interface InternalCommonSliderProps extends ComponentSliderProps {
	sliderRef: React.RefObject<HTMLDivElement>
}

export const CommonSlider: React.FC<InternalCommonSliderProps> = ({
	testId,
	px,
	className,
	sliderRef
}) => {
	return (
		<Wrapper data-testid={testId} className={className} px={px}>
			<StyledSlider ref={sliderRef} />
		</Wrapper>
	)
}
