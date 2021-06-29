import { Spacing } from '../../../types/Spacing'

export interface PaddingProps {
	/** Left padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than px. */
	pl?: Spacing | string
	/** Right padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than px. */
	pr?: Spacing | string
	/** Top padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than py. */
	pt?: Spacing | string
	/** Bottom padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than py. */
	pb?: Spacing | string
	/** Horizontal padding (shortcut for pl and pr) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	px?: Spacing | string
	/** Vertical padding (shortcut for pt and pb) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	py?: Spacing | string
	/** Padding either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). Least specific padding prop. */
	p?: Spacing | string
}
