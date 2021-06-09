import { CSSObject } from '@emotion/serialize'
import ReactSelect, { StylesConfig } from 'react-select'
import styled, { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { getHoverFieldsetStyles } from '../common/FormControl/FormControlStyles'
import { Option } from './index'

interface StyledSelectProps {
	focused: boolean
	isDisabled: boolean
	theme: DefaultTheme
}

export const StyledSelect = styled(ReactSelect)<StyledSelectProps>`
	width: 100%;

	${(props): string =>
		getHoverFieldsetStyles(props.theme, props.focused, props.isDisabled)}
`
export const getStyles = (
	theme: DefaultTheme,
	size: ComponentSize,
	RTL?: boolean
): StylesConfig<Option, false> => ({
	control: (provided): CSSObject => ({
		...provided,
		borderWidth: '0px',
		boxShadow: 'none',
		background: '#fff',
		minHeight: `${theme.button.height[size]}px`,
		'&:hover': {
			borderColor: 'transparent'
		}
	}),

	valueContainer: (provided): CSSObject => ({
		...provided,
		// minus 2px because of margin in a child element (singleValue)
		padding: `2px ${theme.formControl.paddingX - 2}px`
	}),

	/** Remove dropdown separator - no styling */
	indicatorSeparator: (): CSSObject => ({}),

	/** Dropdown arrow */
	dropdownIndicator: (provided, state): CSSObject => {
		const padding = RTL
			? `0 0 0 ${theme.formControl.paddingX}px`
			: `0 ${theme.formControl.paddingX}px 0 0`

		return {
			...provided,
			opacity: state.isDisabled ? 0.3 : 1,
			padding
		}
	},

	/** Dropdown popover */
	menu: (provided): CSSObject => ({
		...provided,
		zIndex: 2
	}),

	/** Single line in a dropdown popover */
	option: (provided, state): CSSObject => {
		/** Color of the text */
		let color = theme.colors.text
		if (state.isDisabled) {
			color = theme.colors.textDisabled
		} else if (state.isSelected) {
			color = 'white'
		}

		/** Background */
		let background = 'white'
		if (state.isSelected) {
			background = theme.colors[ColorTheme.PRIMARY].dark
		} else if (state.isFocused) {
			background = theme.colors[ColorTheme.PRIMARY].light
		}

		/** Hover background */
		let hoverBackground = theme.colors[ColorTheme.PRIMARY].light
		if (state.isDisabled) {
			hoverBackground = 'transparent'
		} else if (state.isSelected) {
			hoverBackground = theme.colors[ColorTheme.PRIMARY].dark
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
	}
})
