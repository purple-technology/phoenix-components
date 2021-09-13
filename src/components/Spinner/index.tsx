import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSize } from '../../types/ComponentSize'
import { MarginProps } from '../common/Spacing/MarginProps'
import { Vector, Wrapper } from './SpinnerStyles'

export interface SpinnerProps extends MarginProps {
	size?: ComponentSize | string | number
	colorTheme?: ColorTheme
	light?: boolean
	className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
	size = 'medium',
	light = false,
	colorTheme,
	className
}) => {
	return (
		<Wrapper size={size} className={className}>
			<Vector
				height="100%"
				width="100%"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
				colorTheme={colorTheme}
				light={light}
			>
				<circle cx="8" cy="8" r="7"></circle>
			</Vector>
		</Wrapper>
	)
}