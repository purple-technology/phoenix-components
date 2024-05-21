import { API } from 'nouislider'
import React, { useEffect } from 'react'

import { StyledSlider, Wrapper } from './SliderStyles'
import { ComponentSliderProps } from './types'

export interface InternalCommonSliderProps extends ComponentSliderProps {
	sliderRef: React.RefObject<HTMLDivElement>
	slider: React.MutableRefObject<API | undefined>
}

export const CommonSlider: React.FC<InternalCommonSliderProps> = ({
	testId,
	px,
	className,
	sliderRef,
	slider,
	disabled
}) => {
	useEffect(() => {
		if (!slider || !slider.current) return

		disabled ? slider.current.disable() : slider.current.enable()
	}, [slider, disabled])

	return (
		<Wrapper data-testid={testId} className={className} px={px}>
			<StyledSlider ref={sliderRef} />
		</Wrapper>
	)
}
