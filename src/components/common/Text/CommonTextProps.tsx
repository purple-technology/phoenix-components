import { HTMLAttributes } from 'react'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../../types/ColorTheme'
import { TextColor } from '../../../types/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps<T>
	extends HTMLAttributes<T>,
		GenericComponentProps {
	colorTheme?: ColorTheme
	className?: string
	color?: TextColor
	bold?: boolean
}
