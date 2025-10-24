import type * as CSS from 'csstype'

import type { CSSValue } from '../../types/CSSValue'
import type { Spacing } from '../../types/Spacing'

export interface GapProps {
	/** row-gap column-gap in valid CSS units  */
	gap?: CSS.Property.Gap
	/** Row gap either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).  */
	rowGap?: Spacing | CSSValue
	/** Column gap either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).  */
	columnGap?: Spacing | CSSValue
}
