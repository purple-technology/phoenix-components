import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { IconType } from '../../types/IconType'
import { PhoenixIconsColored } from '../../types/PhoenixIcons'
import { TextColor } from '../../types/TextColor'

export interface ListCommonProps {
	size?: ComponentSizeSmallMediumLarge | string | number
	color?: TextColor
	icon?: IconType | PhoenixIconsColored | null
	colorTheme?: ColorTheme
	bulletColor?: TextColor
}

type ListCommonProp = keyof ListCommonProps

export const commonPropsKeys: ListCommonProp[] = [
	'color',
	'size',
	'icon',
	'colorTheme',
	'bulletColor'
]
