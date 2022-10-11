import { CSSObjectWithLabel, StylesConfig } from 'react-select'
import { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../../types/ComponentSize'
import { SelectOption } from '.'

export const getStyles = <Option extends SelectOption, IsMulti extends boolean>(
	theme: DefaultTheme,
	size: ComponentSize
): StylesConfig<Option, IsMulti> => ({
	container: (provided): CSSObjectWithLabel => ({
		...provided,
		width: '100%'
	}),
	control: (provided): CSSObjectWithLabel => ({
		...provided,
		borderWidth: '0px',
		boxShadow: 'none',
		background: '#fff',
		minHeight: `${theme.$pc.button.height[size]}px`,
		'&:hover': {
			borderColor: 'transparent'
		}
	}),

	valueContainer: (provided): CSSObjectWithLabel => ({
		...provided,
		// minus 2px because of margin in a child element (singleValue)
		padding:
			size === 'tiny'
				? `2px ${theme.$pc.formControl.paddingX - 2}px`
				: `4px ${theme.$pc.formControl.paddingX - 2}px 0`
	}),

	/** Dropdown arrow */
	dropdownIndicator: (provided, state): CSSObjectWithLabel => ({
		...provided,
		opacity: state.isDisabled ? 0.3 : 1,
		paddingInlineEnd: theme.$pc.formControl.paddingX
	}),

	/** Dropdown popover */
	menu: (provided): CSSObjectWithLabel => ({
		...provided,
		zIndex: 2
	}),

	/** Single line in a dropdown popover */
	option: (provided, state): CSSObjectWithLabel => {
		/** Color of the text */
		let color = theme.$pc.colors.text.dark
		if (state.isDisabled) {
			color = theme.$pc.colors.text.lightest
		} else if (state.isSelected && !state.isMulti) {
			color = 'white'
		}

		/** Background */
		let background = 'white'
		if (state.isSelected && !state.isMulti) {
			background = theme.$pc.colors.primary.dark
		} else if (state.isFocused) {
			background = theme.$pc.colors.primary.light
		}

		/** Hover background */
		let hoverBackground = theme.$pc.colors.primary.light
		if (state.isDisabled) {
			hoverBackground = 'transparent'
		} else if (state.isSelected && !state.isMulti) {
			hoverBackground = theme.$pc.colors.primary.dark
		}

		return {
			...provided,
			background,
			color,
			'&:hover': {
				background: hoverBackground,
				color
			}
		}
	},

	multiValue: (provided): CSSObjectWithLabel => ({
		...provided,
		backgroundColor: theme.$pc.colors.gray._20,
		borderRadius: theme.$pc.borderRadius.small
	}),

	multiValueLabel: (provided): CSSObjectWithLabel => ({
		...provided,
		paddingTop: `${theme.$pc.multiSelect.multiValueLabel.paddingY[size]}px`,
		paddingInlineStart: `${theme.$pc.multiSelect.multiValueLabel.paddingX[size]}px`,
		paddingInlineEnd: 0,
		paddingBottom: `${theme.$pc.multiSelect.multiValueLabel.paddingY[size]}px`,
		fontSize: `${theme.$pc.multiSelect.multiValueLabel.fontSize[size]}px`
	}),

	multiValueRemove: (provided): CSSObjectWithLabel => ({
		...provided,
		borderRadius: theme.$pc.borderRadius.small,
		paddingLeft: `${theme.$pc.multiSelect.multiValueLabel.paddingX[size]}px`,
		paddingRight: `${theme.$pc.multiSelect.multiValueLabel.paddingX[size]}px`,
		'&:hover': {
			background: theme.$pc.colors.error.light,
			color: theme.$pc.colors.error.dark
		}
	}),

	input: (provided): CSSObjectWithLabel => ({
		...provided,
		flex: '0 1 auto'
	})
})
