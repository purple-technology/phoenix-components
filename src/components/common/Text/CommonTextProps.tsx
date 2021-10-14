import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../../types/ColorTheme'
import { TextAlignment } from '../../../types/TextAlignment'
import { TextColor } from '../../../types/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps extends GenericComponentProps, TextAlignProp {
	colorTheme?: ColorTheme
	className?: string
	color?: TextColor
	bold?: boolean
}

export interface TextAlignProp {
	textAlign?: TextAlignment
}
