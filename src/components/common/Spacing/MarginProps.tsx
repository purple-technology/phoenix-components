import { CSSValue } from '../../../types/CSSValue'
import { Spacing } from '../../../types/Spacing'

export interface MarginProps {
	/** Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx. */
	ml?: Spacing | CSSValue
	/** Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx. */
	mr?: Spacing | CSSValue
	/** Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my. */
	mt?: Spacing | CSSValue
	/** Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my. */
	mb?: Spacing | CSSValue
	/** Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	mx?: Spacing | CSSValue
	/** Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). */
	my?: Spacing | CSSValue
	/** Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop. */
	m?: Spacing | CSSValue
}
