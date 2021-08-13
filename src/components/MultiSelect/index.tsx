import React, { ReactNode } from 'react'
import { FormatOptionLabelMeta } from 'react-select'

import { Checkbox } from '../Checkbox'
import CommonSelect, { CommonSelectProps, SelectOption } from '../common/Select'
import { OptionLabelRow } from './MultiSelectStyles'

export interface MultiSelectProps extends CommonSelectProps {
	onChange: (option: SelectOption[]) => void
	value: SelectOption[]
	/** Maximum no. of visible selected items. Items above this number will be rendered as "+ X selected". Should be used when space for the form element is constrained. */
	maxVisibleSelectedItems?: number
}

const formatOptionLabel = <
	OptionType extends SelectOption,
	IsMulti extends boolean
>(
	option: OptionType,
	labelMeta: FormatOptionLabelMeta<OptionType, IsMulti>
): ReactNode => {
	if (labelMeta.context === 'value') return option.label

	const isSelected = labelMeta.selectValue?.some(
		(selectOption: SelectOption) => selectOption.value === option.value
	)

	return (
		<OptionLabelRow>
			<Checkbox checked={isSelected} readOnly />
			{option.label}
		</OptionLabelRow>
	)
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
	value = [],
	...props
}) => {
	return (
		<CommonSelect
			formatOptionLabel={formatOptionLabel}
			multiple
			value={value}
			{...props}
		/>
	)
}
