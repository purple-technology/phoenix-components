import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'

export interface TabListCommonProps {
	animate?: boolean
	size?: ComponentSizeSmallMediumLarge
}

export interface TabCommonProps extends TabListCommonProps {
	selected?: boolean
	disabled?: boolean
}
