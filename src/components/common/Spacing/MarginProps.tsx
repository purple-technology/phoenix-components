import { Spacing } from '../../../types/Spacing'

export interface MarginProps {
	/** Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx. */
	ml?: Spacing | string | number
	/** Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx. */
	mr?: Spacing | string | number
	/** Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my. */
	mt?: Spacing | string | number
	/** Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my. */
	mb?: Spacing | string | number
	/** Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	mx?: Spacing | string | number
	/** Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	my?: Spacing | string | number
	/** Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop. */
	m?: Spacing | string | number
}
