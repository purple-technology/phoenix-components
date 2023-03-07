import React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators'
import { GroupBase } from 'react-select/dist/declarations/src/types'

import iconAngleDown from '../../../images/angle-down.svg'
import { SelectOption } from '.'

const DropdownIndicator = <
	Option extends SelectOption,
	IsMulti extends boolean,
	Group extends GroupBase<Option> = GroupBase<Option>
>(
	props: DropdownIndicatorProps<Option, IsMulti, Group>
): React.ReactElement => {
	return (
		<components.DropdownIndicator {...props}>
			<SVG src={iconAngleDown} className={props.className} />
		</components.DropdownIndicator>
	)
}

export default DropdownIndicator
