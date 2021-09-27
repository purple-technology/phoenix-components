import React from 'react'

import { ColorTheme } from '../../types/ColorTheme'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledDivider } from './HorizontalDividerStyles'

export interface HorizontalDividerProps extends MarginProps {
	colorTheme?: ColorTheme
	/** Height of the divider in pixels, default 1px */
	height?: number
}

export const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
	height = 1,
	my = 's',
	...props
}) => {
	return <StyledDivider $height={height} my={my} {...props} />
}
