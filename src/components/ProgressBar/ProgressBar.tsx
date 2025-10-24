import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { ColorTheme } from '../../types/Color'
import type { CSSColor } from '../../types/CSSValue'
import type { MarginProps } from '../common/Spacing/MarginProps'
import { Progress, Wrapper } from './ProgressBar.styles'

export interface ProgressBarProps extends MarginProps, GenericComponentProps {
	value?: number
	color?: ColorTheme | CSSColor
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
	testId = 'ProgressBar',
	value,
	color,
	...props
}) => {
	return (
		<Wrapper data-testid={testId} {...props}>
			<Progress $value={value} $color={color} />
		</Wrapper>
	)
}
