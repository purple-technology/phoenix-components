import React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import { IndicatorProps } from 'react-select/src/components/indicators'
import { GroupTypeBase } from 'react-select/src/types'

import iconAngleDown from '../../../images/angle-down.svg'
import { SelectOption } from '.'

const DropdownIndicator = <
	OptionType extends SelectOption,
	IsMulti extends boolean,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: IndicatorProps<OptionType, IsMulti, GroupType>
): React.ReactNode => {
	return (
		<components.DropdownIndicator {...props}>
			<SVG src={iconAngleDown} className={props.className} />
		</components.DropdownIndicator>
	)
}

export default DropdownIndicator
