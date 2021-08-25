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
	useNativeSelectOnMobile,
	...props
}) => {
	if (useNativeSelectOnMobile && isMobile()) {
		return <SelectNative {...props} />
	}

	return <CommonSelect {...props} />
}
