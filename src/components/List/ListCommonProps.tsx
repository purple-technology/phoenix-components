import { Color } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { Sizing } from '../../types/Sizing'

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
