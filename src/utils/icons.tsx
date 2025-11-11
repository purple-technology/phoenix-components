import type { IconType } from '../types/IconType'
import {
	PhoenixIcons,
	PhoenixIconsColored,
	PhoenixIconsOutlined
} from '../types/PhoenixIcons'

export const isPhoenixIconOutlined = (
	icon?: IconType
): icon is PhoenixIconsOutlined =>
	PhoenixIconsOutlined.includes(icon as PhoenixIconsOutlined)

export const isPhoenixIconColored = (
	icon?: IconType
): icon is PhoenixIconsColored =>
	PhoenixIconsColored.includes(icon as PhoenixIconsColored)

export const isPhoenixIcon = (
	icon?: IconType | PhoenixIconsColored
): icon is PhoenixIcons => PhoenixIcons.includes(icon as PhoenixIcons)
