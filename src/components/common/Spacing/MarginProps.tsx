import { Spacing } from '../../../types/Spacing'

export interface MarginProps {
	/** Left margin either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than mx. */
	ml?: Spacing | string
	/** Right margin either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than mx. */
	mr?: Spacing | string
	/** Top margin either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than my. */
	mt?: Spacing | string
	/** Bottom margin either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). More specific than my. */
	mb?: Spacing | string
	/** Horizontal margin (shortcut for ml and mr) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	mx?: Spacing | string
	/** Vertical margin (shortcut for mt and mb) either in Spacing sizes or any CSS value in valid units (px, rem, % etc.) */
	my?: Spacing | string
	/** Margin either in Spacing sizes or any CSS value in valid units (px, rem, % etc.). Least specific margin prop. */
	m?: Spacing | string
}
