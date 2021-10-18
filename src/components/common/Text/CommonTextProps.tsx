import { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../../types/ColorTheme'
import { TextAlignment } from '../../../types/TextAlignment'
import { TextColor } from '../../../types/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps<T>
	extends HTMLAttributes<T>,
		GenericComponentProps,
		TextAlignProp {
	colorTheme?: ColorTheme
	color?: TextColor
	bold?: boolean
}

export interface TextAlignProp {
	textAlign?: TextAlignment
}
