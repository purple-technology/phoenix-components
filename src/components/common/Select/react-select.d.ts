import { SelectOption } from '.'

declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		Option extends SelectOption,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_IsMulti extends boolean,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_Group extends GroupBase<Option>
	> {
		maxVisibleSelectedItems?: number
	}
}
