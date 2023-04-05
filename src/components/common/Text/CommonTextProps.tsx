import { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { Color } from '../../../types/Color'
import { CSSValue } from '../../../types/CSSValue'
import { Sizing } from '../../../types/Sizing'
import { TextAlignment } from '../../../types/TextAlignment'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps<T>
	extends HTMLAttributes<T>,
		GenericComponentProps,
		TextAlignProp {
	color?: Color
	bold?: boolean
	/** Text size - xs, sm, md, lg; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.) */
	size?: Sizing | CSSValue
}

export interface TextAlignProp {
	textAlign?: TextAlignment
}
