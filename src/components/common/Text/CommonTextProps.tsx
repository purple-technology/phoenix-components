import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../../types/ColorTheme'
import { TextColor } from '../../../types/TextColor'

// Common interface for components Text, Paragraph and Heading
export interface CommonTextProps extends GenericComponentProps {
	colorTheme?: ColorTheme
	color?: TextColor
	bold?: boolean
}
