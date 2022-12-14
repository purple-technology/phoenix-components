import { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { Color } from '../../../types/Color'
import { TextAlignment } from '../../../types/TextAlignment'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps<T>
	extends HTMLAttributes<T>,
		GenericComponentProps,
		TextAlignProp {
	color?: Color
	bold?: boolean
}

export interface TextAlignProp {
	textAlign?: TextAlignment
}
