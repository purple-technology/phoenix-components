import React from 'react'
import moment from 'moment-timezone'

import SelectBox, { Option, SelectProps } from '../SelectBox'

type TimezonePickerProps = Omit<SelectProps, 'options'>

const TimezonePicker: React.FC<TimezonePickerProps> = props => {
  const timeZones = moment.tz.names()

  const offsetSorted = timeZones.sort((a, b) => {
    const aOffset = moment.tz(a).utcOffset()
    const bOffset = moment.tz(b).utcOffset()
    // sort cities with the same offset alphabetically
    if (aOffset === bOffset) {
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    }
    return aOffset - bOffset
  })

  const options: Option[] = offsetSorted.map((timezone, i) => {
    const noContinentTimezone = timezone.includes('/')
      ? timezone.split('/')[1]
      : timezone
    const cleanTimezome = noContinentTimezone.replace('_', ' ')
    const offset = moment.tz(timezone).format('Z')
    return {
      value: timezone,
      label: `(GMT${offset}) ${cleanTimezome}`
    }
  })
  return <SelectBox options={options} {...props} />
}

export default TimezonePicker
