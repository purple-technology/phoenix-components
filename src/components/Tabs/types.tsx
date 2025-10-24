import type { Sizing } from '../../types/Sizing'

export interface TabListCommonProps {
	animate?: boolean
	size?: Sizing
}

export interface TabCommonProps extends TabListCommonProps {
	selected?: boolean
	disabled?: boolean
}
