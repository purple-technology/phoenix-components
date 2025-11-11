import type { CSSValue } from '../../../types/CSSValue'
import type { Spacing } from '../../../types/Spacing'

export interface PaddingProps {
	/** Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px. */
	pl?: Spacing | CSSValue
	/** Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px. */
	pr?: Spacing | CSSValue
	/** Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py. */
	pt?: Spacing | CSSValue
	/** Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py. */
	pb?: Spacing | CSSValue
	/** Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	px?: Spacing | CSSValue
	/** Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	py?: Spacing | CSSValue
	/** Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop. */
	p?: Spacing | CSSValue
}
