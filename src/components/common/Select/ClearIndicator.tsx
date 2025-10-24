import type React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import type { ClearIndicatorProps } from 'react-select/dist/declarations/src/components/indicators'
import type { GroupBase } from 'react-select/dist/declarations/src/types'
import styled from 'styled-components'

import iconTimes from '../../../images/times.svg'
import type { SelectOption } from '.'

const Icon = styled(SVG)`
	path {
		fill: currentColor;
	}
`

const ClearIndicator = <
	Option extends SelectOption,
	IsMulti extends boolean,
	Group extends GroupBase<Option> = GroupBase<Option>
>(
	props: ClearIndicatorProps<Option, IsMulti, Group>
): React.ReactElement => {
	return (
		<components.ClearIndicator {...props}>
			<Icon src={iconTimes} className={props.className} />
		</components.ClearIndicator>
	)
}

export default ClearIndicator
