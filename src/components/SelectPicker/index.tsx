import React, { useEffect, useState } from 'react'

import {
	ComponentSize,
	ComponentSizeMediumLarge
} from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
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
	/** Determines the max-width property of the <img> tag */
	imageSize?: string
	colorTheme?: ColorTheme
	className?: string
	componentSize?: ComponentSizeMediumLarge
}

/** Tried to unify with Select Option interface but difficult due to different
 * value type. */
interface OptionProps {
	value: string
	label: string
	description?: string
	image?: string
}

const SelectPicker: React.FC<SelectPickerProps> = ({
	options,
	name,
	onChange,
	value,
	multiSelect = false,
	error,
	onMouseOver,
	onMouseLeave,
	imageSize = '40px',
	colorTheme = ColorTheme.PRIMARY,
	componentSize = ComponentSize.MEDIUM,
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
					componentSize={componentSize}
					hasDescription={!!option.description}
				>
					<Checkbox
						colorTheme={colorTheme}
						componentSize={componentSize}
						checked={isSelected(option)}
					>
						<input
							type="radio"
							style={{ display: 'none' }}
							value={option.value}
							name={name}
							checked={isSelected(option)}
						/>
						<label />
					</Checkbox>
					<Flex>
						{option.image && (
							<OptionImage src={option.image} imageSize={imageSize} />
						)}
						<OptionLabel>{option.label || option.value}</OptionLabel>
					</Flex>
					{option.description && (
						<OptionDescription
							checked={isSelected(option)}
							colorTheme={colorTheme}
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

SelectPicker.defaultProps = {
	imageSize: '40px',
	colorTheme: ColorTheme.PRIMARY,
	componentSize: ComponentSize.MEDIUM,
	multiSelect: false
}

export default SelectPicker
