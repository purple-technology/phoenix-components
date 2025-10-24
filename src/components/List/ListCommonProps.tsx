import type { Color } from '../../types/Color'
import type { CSSValue } from '../../types/CSSValue'
import type { IconType } from '../../types/IconType'
import type { PhoenixIconsColored } from '../../types/PhoenixIcons'
import type { Sizing } from '../../types/Sizing'

export interface ListCommonProps {
	size?: Sizing | CSSValue
	color?: Color
	icon?: IconType | PhoenixIconsColored | null
	bulletColor?: Color
}

type ListCommonProp = keyof ListCommonProps

export const commonPropsKeys: ListCommonProp[] = [
	'color',
	'size',
	'icon',
	'bulletColor'
]
