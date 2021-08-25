import React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import { IndicatorProps } from 'react-select/src/components/indicators'
import { GroupTypeBase } from 'react-select/src/types'
import styled from 'styled-components'

import iconTimes from '../../../images/times.svg'
import { SelectOption } from '.'

const Icon = styled(SVG)`
	path {
		fill: currentColor;
	}
`

const ClearIndicator = <
	OptionType extends SelectOption,
	IsMulti extends boolean,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: IndicatorProps<OptionType, IsMulti, GroupType>
): React.ReactNode => {
	return (
		<components.ClearIndicator {...props}>
			<Icon src={iconTimes} className={props.className} />
		</components.ClearIndicator>
	)
}

export default ClearIndicator
