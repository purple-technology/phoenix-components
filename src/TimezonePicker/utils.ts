import { time } from 'console'
import moment from 'moment-timezone'

import { Option } from '../SelectBox'

export const sortTimezones = (timeZones: string[]) => {
  return timeZones.sort((a, b) => {
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
}

export const buildOptions = (timezones: string[]): Option[] => {
  return timezones.map((timezone, i) => {
    const cleanTimezome = timezone.replace('_', ' ')
    const offset = moment.tz(timezone).format('Z')
    return {
      value: timezone,
      label: `(GMT${offset}) ${cleanTimezome}`
    }
  })
}
