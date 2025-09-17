import {
	BackgroundColorProps,
	BackgroundProps,
	BorderProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	OpacityProps,
	PositionProps
} from '@tradersclub/styled-system'
import React, { HTMLAttributes, JSX } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { StyledBox } from './BoxStyles'
import { GapProps } from './GapProps'

export interface BoxProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		LayoutProps,
		FlexboxProps,
		GridProps,
		MarginProps,
		PaddingProps,
		BackgroundColorProps,
		BackgroundProps,
		OpacityProps,
		PositionProps,
		TextAlignProp,
		BorderProps,
		GenericComponentProps,
		GapProps {
	element?: keyof JSX.IntrinsicElements
}

export const Box: React.FC<BoxProps> = ({
	element = 'div',
	testId,
	...props
}) => (
	<StyledBox
		{...(testId ? { 'data-testid': testId } : undefined)}
		{...props}
		as={element}
	/>
)
