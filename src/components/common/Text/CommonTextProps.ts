import { ColorTheme } from '../../../enum/ColorTheme'
import { TextColor } from '../../../enum/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps {
	colorTheme?: ColorTheme
	className?: string
	color?: TextColor
}
