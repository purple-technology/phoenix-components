import * as CSS from 'csstype'

import { Spacing } from '../../types/Spacing'

export interface GapProps {
	/** row-gap column-gap in valid CSS units  */
	gap?: CSS.Property.Gap
	/** Row gap either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).  */
	rowGap?: Spacing | string | number
	/** Column gap either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).  */
	columnGap?: Spacing | string | number
}
