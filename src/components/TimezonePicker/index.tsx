import React from 'react'

import { Select, SelectProps } from '../Select'
import { getOptions } from './utils'

export type TimezonePickerProps = Omit<SelectProps, 'options'>

export const TimezonePicker: React.FC<TimezonePickerProps> = (props) => {
	const options = getOptions()
	return <Select options={options} {...props} />
}
