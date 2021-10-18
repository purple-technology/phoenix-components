import React, { HTMLAttributes } from 'react'
import { IntrinsicElementsKeys } from 'styled-components'
import {
	BackgroundColorProps,
	BackgroundProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	OpacityProps,
	PositionProps
} from 'styled-system'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { TextAlignProp } from '../common/Text/CommonTextProps'
import { StyledBox } from './BoxStyles'

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
		GenericComponentProps {
	element?: IntrinsicElementsKeys
}

export const Box: React.FC<BoxProps> = ({ element = 'div', ...props }) => (
	<StyledBox {...props} as={element} />
)
