import type React from 'react'
import type { HTMLAttributes, JSX } from 'react'
import type {
	BackgroundColorProps,
	BackgroundProps,
	BorderProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	OpacityProps,
	PositionProps
} from 'styled-system'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
import type { TextAlignProp } from '../common/Text/CommonTextProps'
import { StyledBox } from './BoxStyles'
import type { GapProps } from './GapProps'

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
