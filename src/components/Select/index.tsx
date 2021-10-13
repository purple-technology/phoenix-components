import isMobile from 'is-mobile'
import React from 'react'

import CommonSelect, { CommonSelectProps, SelectOption } from '../common/Select'
import { SelectNative } from '../SelectNative'

export interface SelectProps extends CommonSelectProps {
	onChange: (option: SelectOption | null) => void
	value?: SelectOption | null
	useNativeSelectOnMobile?: boolean
}

export const Select: React.FC<SelectProps> = ({
	testId = 'Select',
	useNativeSelectOnMobile,
	...props
}) => {
	if (useNativeSelectOnMobile && isMobile()) {
		return <SelectNative testId={testId} {...props} />
	}

	return <CommonSelect testId={testId} {...props} />
}
