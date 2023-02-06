import React, { ReactNode } from 'react'
import { FormatOptionLabelMeta } from 'react-select'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Checkbox } from '../Checkbox'
import CommonSelect, { CommonSelectProps, SelectOption } from '../common/Select'
import { OptionLabelRow } from './MultiSelectStyles'

export interface MultiSelectProps<Option extends SelectOption = SelectOption>
	extends CommonSelectProps<Option, true>,
		GenericComponentProps {
	onChange: (option: readonly Option[]) => void
	value: Option[]
	/** Maximum no. of visible selected items. Items above this number will be rendered as "+ X selected". Should be used when space for the form element is constrained. */
	maxVisibleSelectedItems?: number
}

const formatOptionLabel = <Option extends SelectOption>(
	option: Option,
	labelMeta: FormatOptionLabelMeta<Option>
): ReactNode => {
	if (labelMeta.context === 'value') return option.label

	const isSelected = labelMeta.selectValue?.some(
		(selectOption: Option) => selectOption.value === option.value
	)

	return (
		<OptionLabelRow>
			<Checkbox checked={isSelected} readOnly />
			{option.label}
		</OptionLabelRow>
	)
}

export const MultiSelect = <Option extends SelectOption = SelectOption>({
	value = [],
	testId = 'MultiSelect',
	...props
}: MultiSelectProps<Option>): React.ReactElement => {
	return (
		<CommonSelect
			formatOptionLabel={formatOptionLabel}
			multiple
			value={value}
			testId={testId}
			{...props}
		/>
	)
}
