import isMobile from 'is-mobile'
import type React from 'react'

import CommonSelect, {
	type CommonSelectProps,
	type SelectOption
} from '../common/Select'
import { SelectNative } from '../SelectNative'

export interface SelectProps<Option extends SelectOption = SelectOption>
	extends CommonSelectProps<Option, false> {
	onChange: (option: Option | null) => void
	value?: Option | null
	useNativeSelectOnMobile?: boolean
}

export const Select = <Option extends SelectOption = SelectOption>({
	testId = 'Select',
	useNativeSelectOnMobile,
	...props
}: SelectProps<Option>): React.ReactElement => {
	if (useNativeSelectOnMobile && isMobile()) {
		return <SelectNative<Option> testId={testId} {...props} />
	}

	return <CommonSelect<Option> testId={testId} {...props} />
}
