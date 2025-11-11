import type React from 'react'
import SVG from 'react-inlinesvg'
import { components } from 'react-select'
import type { MultiValueRemoveProps } from 'react-select/dist/declarations/src/components/MultiValue'
import type { GroupBase } from 'react-select/dist/declarations/src/types'
import styled from 'styled-components'

import iconTimes from '../../../images/times.svg'
import type { SelectOption } from '.'

const Icon = styled(SVG)`
	width: 8px;
	height: 8px;
	path {
		fill: currentColor;
	}
`

const MultiValueRemove = <
	Option extends SelectOption,
	IsMulti extends boolean,
	Group extends GroupBase<Option>
>(
	props: MultiValueRemoveProps<Option, IsMulti, Group>
): React.ReactElement => {
	return (
		<components.MultiValueRemove {...props}>
			<Icon src={iconTimes} />
		</components.MultiValueRemove>
	)
}

export default MultiValueRemove
