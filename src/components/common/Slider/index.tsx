import { API } from 'nouislider'
import React, { useEffect } from 'react'

import { StyledSlider, Wrapper } from './SliderStyles'
import { ComponentSliderProps } from './types'

export interface InternalCommonSliderProps extends ComponentSliderProps {
	sliderRef: React.RefObject<HTMLDivElement>
	sliderApi: API | undefined
}

export const CommonSlider: React.FC<InternalCommonSliderProps> = ({
	testId,
	px,
	className,
	sliderRef,
	sliderApi,
	disabled
}) => {
	useEffect(() => {
		if (!sliderApi) return

		disabled ? sliderApi.disable() : sliderApi.enable()
	}, [sliderApi, disabled])

	return (
		<Wrapper data-testid={testId} className={className} px={px}>
			<StyledSlider ref={sliderRef} />
		</Wrapper>
	)
}
