import { SelectOption } from '.'

declare module 'react-select/dist/declarations/src/Select' {
	export interface Props<
		Option extends SelectOption,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		IsMulti extends boolean,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		Group extends GroupBase<Option>
	> {
		maxVisibleSelectedItems?: number
	}
}
