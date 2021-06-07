import { getAllTimezones } from 'countries-and-timezones'
import React from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import Select, { Option, SelectProps } from '../Select'
import { buildOptions, sortTimezones } from './utils'

export type TimezonePickerProps = Omit<SelectProps, 'options'>

export const getOptions = (): Option[] => {
	const allTimezones = getAllTimezones()
	const timezones = Object.keys(allTimezones).map(
		(timezone) => allTimezones[timezone]
	)
	const offsetSorted = sortTimezones(timezones)
	const options = buildOptions(offsetSorted)
	return options
}

const TimezonePicker: React.FC<TimezonePickerProps> = (props) => {
	const options = getOptions()
	return <Select options={options} {...props} />
}

TimezonePicker.defaultProps = {
	size: ComponentSize.MEDIUM
}

export default TimezonePicker
