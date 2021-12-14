import React from 'react'
import { components, ValueContainerProps } from 'react-select'
import { GroupTypeBase } from 'react-select/src/types'

import { SelectOption } from '.'

const ValueContainer = <
	OptionType extends SelectOption,
	IsMulti extends boolean,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
	children,
	...props
}: ValueContainerProps<OptionType, IsMulti, GroupType>): React.ReactElement => {
	const noOfItems = props.getValue().length
	const maxItems = props.selectProps.maxVisibleSelectedItems
	const optionalPlus = maxItems > 0 ? '+ ' : ''

	return (
		<components.ValueContainer {...props}>
			{React.Children.map(children, (child, i) => {
				// Render if
				// ...maxItems is not set, or
				// ...no items are selected, or
				// ...it is a last child (input that needs to be always rendered), or
				// ...current rendered child is less than maxItems
				if (
					typeof maxItems === 'undefined' ||
					noOfItems === 0 ||
					React.Children.count(children) - 1 === i ||
					i < maxItems
				)
					return child

				return null
			})}
			{noOfItems > maxItems &&
				`${optionalPlus}${noOfItems - maxItems} selected`}
		</components.ValueContainer>
	)
}

export default ValueContainer
