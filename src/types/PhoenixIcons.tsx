export const PhoenixIconsOutlined = [
	'calendar',
	'edit',
	'email',
	'exclamation',
	'house',
	'lock',
	'trash'
] as const
export type PhoenixIconsOutlined = typeof PhoenixIconsOutlined[number]

export const PhoenixIconsColored = [
	'calendar-primary',
	'edit-primary',
	'email-primary',
	'exclamation-error',
	'exclamation-primary',
	'exclamation-warning',
	'house-primary',
	'lock-primary',
	'lock-success',
	'trash-error',
	'trash-primary'
] as const
export type PhoenixIconsColored = typeof PhoenixIconsColored[number]

export const PhoenixIcons = [
	...PhoenixIconsOutlined,
	...PhoenixIconsColored
] as const
export type PhoenixIcons = typeof PhoenixIcons[number]
