import React, { useEffect, useState } from 'react'

import { ColorTheme } from '../../enum/ColorTheme'
import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import {
	Checkbox,
	Error,
	Flex,
	Option,
	OptionDescription,
	OptionImage,
	OptionLabel,
	Wrapper
} from './SelectPickerStyles'

export interface SelectPickerProps {
	value: string | string[]
	onChange: (selected: string[] | string) => void
	options: Array<OptionProps>
	name?: string
	multiSelect?: boolean
	error?: string | boolean
	onMouseOver?: (event: React.MouseEvent) => void
	onMouseLeave?: (event: React.MouseEvent) => void
	colorTheme?: ColorTheme
	className?: string
	size?: ComponentSizeMediumLarge
}

// Tried to unify with Select Option interface but difficult due to different value type.
interface OptionProps {
	value: string
	label: string
	description?: string
	image?: string
	isDisabled?: boolean
}

const SelectPicker: React.FC<SelectPickerProps> = ({
	colorTheme = ColorTheme.PRIMARY,
	size = ComponentSize.MEDIUM,
	multiSelect = false,
	options,
	name,
	onChange,
	value,
	error,
	onMouseOver,
	onMouseLeave,
	className
}) => {
	const initialSelectedState = multiSelect && Array.isArray(value) ? value : []
	const [selected, setSelected] = useState(initialSelectedState)
	const [alreadyRendered, setAlreadyRendered] = useState(false)

	useEffect(() => {
		if (multiSelect && alreadyRendered) {
			return onChange(selected)
		}
		if (!alreadyRendered) setAlreadyRendered(true)
	}, [selected, alreadyRendered, multiSelect, setAlreadyRendered, onChange])

	const onPickerClick = (option: OptionProps): void => {
		if (!multiSelect) {
			onChange(option.value)
		} else if (selected.includes(option.value)) {
			const filter = selected.filter((val) => val !== option.value)
			setSelected(filter)
		} else {
			setSelected([...selected, option.value])
		}
	}

	const isSelected = (option: OptionProps): boolean => {
		if (!multiSelect) {
			return value === option.value
		}
		return selected.includes(option.value)
	}

	const getOptions = (options: OptionProps[]): React.ReactNode | null => {
		if (options) {
			return options.map((option) => (
				<Option
					multiSelect={multiSelect}
					key={option.value}
					checked={isSelected(option)}
					onClick={(): void => onPickerClick(option)}
					withImage={option.image}
					colorTheme={colorTheme}
					size={size}
					hasDescription={!!option.description}
					isDisabled={option.isDisabled}
				>
					<Checkbox
						colorTheme={colorTheme}
						size={size}
						checked={isSelected(option)}
					>
						<input
							type="radio"
							style={{ display: 'none' }}
							value={option.value}
							name={name}
							checked={isSelected(option)}
							readOnly
							disabled={option.isDisabled}
						/>
						<label />
					</Checkbox>
					<Flex>
						{option.image && (
							<OptionImage
								src={option.image}
								size={size}
								isDisabled={option.isDisabled}
							/>
						)}
						<OptionLabel>{option.label || option.value}</OptionLabel>
					</Flex>
					{option.description && (
						<OptionDescription
							checked={isSelected(option)}
							colorTheme={colorTheme}
							isDisabled={option.isDisabled}
						>
							{option.description}
						</OptionDescription>
					)}
				</Option>
			))
		}
		return null
	}

	const thisOnMouseOver = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		event.persist()
		onMouseOver?.(event)
	}

	const thisOnMouseLeave = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		event.persist()
		onMouseLeave?.(event)
	}

	return (
		<div className={className}>
			<Wrapper
				optionsLength={options.length}
				onMouseOver={thisOnMouseOver}
				onMouseLeave={thisOnMouseLeave}
			>
				{getOptions(options)}
			</Wrapper>
			{error && <Error>{error}</Error>}
		</div>
	)
}

export default SelectPicker
