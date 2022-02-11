import { ListCommonProps } from './ListItem'

type ListCommonProp = keyof ListCommonProps

const commonPropsKeys: ListCommonProp[] = [
	'color',
	'size',
	'icon',
	'colorTheme',
	'bulletColor'
]

export default commonPropsKeys
