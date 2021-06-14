import { getAllTimezones, Timezone } from 'countries-and-timezones'

import { Option } from '../Select'

export const sortTimezones = (timeZones: Timezone[]): Timezone[] => {
	return timeZones.sort((a, b) => {
		// sort cities with the same offset alphabetically
		if (a.utcOffset === b.utcOffset) {
			if (a.name < b.name) {
				return -1
			}
			if (a.name > b.name) {
				return 1
			}
			return 0
		}
		return a.utcOffset - b.utcOffset
	})
}

export const buildOptions = (timezones: Timezone[]): Option[] => {
	return timezones.map((timezone) => {
		const split = timezone.name.split('/')
		const cleanTimezone = split[split.length - 1].replace(/_/g, ' ')
		return {
			value: timezone.name,
			label: `(GMT${timezone.utcOffsetStr}) ${cleanTimezone}`
		}
	})
}

export const getOptions = (): Option[] => {
	const allTimezones = getAllTimezones()
	const timezones = Object.keys(allTimezones).map(
		(timezone) => allTimezones[timezone]
	)
	const offsetSorted = sortTimezones(timezones)
	const options = buildOptions(offsetSorted)
	return options
}
