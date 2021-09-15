import { IconType } from '../types/IconType'
import { PhoenixIconsOutlined } from '../types/PhoenixIcons'

export const isPhoenixIconOutlined = (
	icon: IconType
): icon is PhoenixIconsOutlined =>
	PhoenixIconsOutlined.includes(icon as PhoenixIconsOutlined)
