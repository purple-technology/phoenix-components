import React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import { MultiValueRemoveProps } from 'react-select/src/components/MultiValue'
import { GroupTypeBase } from 'react-select/src/types'
import styled from 'styled-components'

import iconTimes from '../../../icons/times.svg'
import { SelectOption } from '.'

const Icon = styled(SVG)`
	width: 8px;
	height: 8px;
	path {
		fill: currentColor;
	}
`

const MultiValueRemove = <
	OptionType extends SelectOption,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: MultiValueRemoveProps<OptionType, GroupType>
): React.ReactNode => {
	return (
		<components.MultiValueRemove {...props}>
			<Icon src={iconTimes} className={props.className} />
		</components.MultiValueRemove>
	)
}

export default MultiValueRemove
