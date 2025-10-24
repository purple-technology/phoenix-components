import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { ColorTheme } from '../../types/Color'
import type { MarginProps } from '../common/Spacing/MarginProps'
import { StyledDivider } from './HorizontalDividerStyles'

export interface HorizontalDividerProps
	extends MarginProps,
		GenericComponentProps {
	colorTheme?: ColorTheme
	/** Height of the divider in pixels, default 1px */
	height?: number
}

export const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
	height = 1,
	my = 's',
	testId = 'HorizontalDivider',
	...props
}) => {
	return (
		<StyledDivider $height={height} my={my} data-testid={testId} {...props} />
	)
}
