import React from 'react'
import moment from 'moment-timezone'

import SelectBox, { Option, SelectProps } from '../SelectBox'
import { buildOptions, sortTimezones } from './utils'

type TimezonePickerProps = Omit<SelectProps, 'options'>

const TimezonePicker: React.FC<TimezonePickerProps> = props => {
  const timeZones = moment.tz.names()
  const offsetSorted = sortTimezones(timeZones)
  const options = buildOptions(offsetSorted)
  return <SelectBox options={options} {...props} />
}

export default TimezonePicker
