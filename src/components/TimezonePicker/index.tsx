import { getAllTimezones } from 'countries-and-timezones'
import React from 'react'

import Select, { SelectProps } from '../Select'
import { buildOptions, sortTimezones } from './utils'

export type TimezonePickerProps = Omit<SelectProps, 'options'>

export const getOptions = () => {
	const allTimezones = getAllTimezones()
	const timezones = Object.keys(allTimezones).map(
		(timezone, i) => allTimezones[timezone]
	)
	const offsetSorted = sortTimezones(timezones)
	const options = buildOptions(offsetSorted)
	return options
}

const TimezonePicker: React.FC<TimezonePickerProps> = (props) => {
	const options = getOptions()
	return <Select options={options} {...props} />
}

export default TimezonePicker
