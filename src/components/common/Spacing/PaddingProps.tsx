import { Spacing } from '../../../types/Spacing'

export interface PaddingProps {
	/** Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px. */
	pl?: Spacing | string | number
	/** Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px. */
	pr?: Spacing | string | number
	/** Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py. */
	pt?: Spacing | string | number
	/** Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py. */
	pb?: Spacing | string | number
	/** Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	px?: Spacing | string | number
	/** Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	py?: Spacing | string | number
	/** Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop. */
	p?: Spacing | string | number
}
