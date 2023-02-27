import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/Color'
import { MarginProps } from '../common/Spacing/MarginProps'
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
