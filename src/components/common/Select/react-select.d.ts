import { SelectOption } from '.'

declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		Option extends SelectOption,
		_IsMulti extends boolean,
		_Group extends GroupBase<Option>
	> {
		maxVisibleSelectedItems?: number
	}
}
