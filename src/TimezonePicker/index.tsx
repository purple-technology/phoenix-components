import React from 'react'
import { getAllTimezones } from 'countries-and-timezones'

import SelectBox, { SelectProps } from '../SelectBox'
import { buildOptions, sortTimezones } from './utils'

type TimezonePickerProps = Omit<SelectProps, 'options'>

export const getOptions = () => {
  const allTimezones = getAllTimezones()
  const timezones = Object.keys(allTimezones).map(
    (timezone, i) => allTimezones[timezone]
  )
  const offsetSorted = sortTimezones(timezones)
  const options = buildOptions(offsetSorted)
  return options
}

const TimezonePicker: React.FC<TimezonePickerProps> = props => {
  const options = getOptions()
  return <SelectBox options={options} {...props} />
}

export default TimezonePicker
