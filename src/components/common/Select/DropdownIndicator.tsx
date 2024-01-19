import React from 'react'
import { components } from 'react-select'
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators'
import { GroupBase } from 'react-select/dist/declarations/src/types'

import IconAngleDown from '../../../images/angle-down.svg'
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
			<IconAngleDown className={props.className} />
		</components.DropdownIndicator>
	)
}

export default DropdownIndicator
