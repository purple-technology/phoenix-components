import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { Sizing } from '../../types/Sizing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { Vector, Wrapper } from './SpinnerStyles'

export interface SpinnerProps extends MarginProps, GenericComponentProps {
	size?: Sizing | CSSValue
	colorTheme?: ColorTheme
	light?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({
	size = 'md',
	light = false,
	testId = 'Spinner',
	colorTheme,
	...props
}) => {
	return (
		<Wrapper size={size} data-testid={testId} {...props}>
			<Vector
				height="100%"
				width="100%"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
				$colorTheme={colorTheme}
				light={light}
			>
				<circle cx="8" cy="8" r="7"></circle>
			</Vector>
		</Wrapper>
	)
}
