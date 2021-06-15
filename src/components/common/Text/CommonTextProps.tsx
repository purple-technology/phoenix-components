import { ColorTheme } from '../../../types/ColorTheme'
import { TextColor } from '../../../types/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps {
	colorTheme?: ColorTheme
	className?: string
	color?: TextColor
	bold?: boolean
}
