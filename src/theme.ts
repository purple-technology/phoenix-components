import { ColorTheme } from './enum/ColorTheme'
import { ComponentSize } from './enum/ComponentSize'
import { Spacing } from './enum/Spacing'

const gray = {
	_0: '#FFFFFF',
	_15: '#FAFAFA',
	_20: '#F5F5F5',
	_25: '#EDEDED',
	_30: '#E4E4E3',
	_35: '#D9D9D8',
	_40: '#CCCCCC',
	_45: '#BABABA',
	_50: '#737373',
	_60: '#595959',
	_80: '#4D4D4D',
	_85: '#333333',
	_90: '#141313',
	_100: '#000000'
}

const colors = {
	[ColorTheme.PRIMARY]: {
		dark: '#522974',
		darkHoverBackground: '#3F2059',
		darkDisabledBackground: '#BBA5CD',
		light: '#F1EDF6',
		lightHoverBackground: '#DFD5EB',
		lightDisabledBackground: '#F7F4FA',
		lightDisabledColor: '#D0C0DD'
	},
	[ColorTheme.NEUTRAL]: {
		dark: gray._80,
		darkHoverBackground: gray._85,
		darkDisabledBackground: gray._35,
		light: gray._20,
		lightHoverBackground: gray._25,
		lightDisabledBackground: gray._15,
		lightDisabledColor: gray._45
	},
	[ColorTheme.SUCCESS]: {
		dark: '#0C8B51',
		darkHoverBackground: '#097041',
		darkDisabledBackground: '#A5CDBA',
		light: '#E8F0EC',
		lightHoverBackground: '#CFE8DA',
		lightDisabledBackground: '#F4FAF7',
		lightDisabledColor: '#C0DDCE'
	},
	[ColorTheme.ERROR]: {
		dark: '#A50000',
		darkHoverBackground: '#9C0909',
		darkDisabledBackground: '#CDA5A5',
		light: '#FCF2F2',
		lightHoverBackground: '#EDD3D3',
		lightDisabledBackground: '#FAF4F4',
		lightDisabledColor: '#DDC0C0'
	},
	[ColorTheme.WARNING]: {
		dark: '#CB7307',
		light: '#FBF6E9'
	},
	[ColorTheme.INFO]: {
		dark: '#3F75AC',
		light: '#F2F7FC'
	},
	gray,

	focus: '#8CB7FA',

	borderInputHover: gray._50,
	borderInput: gray._40,
	borderDisabled: gray._30,
	borderHr: gray._20,

	text: gray._90,
	textSecondary: gray._80,
	textTertiary: gray._50,
	textDisabled: gray._45
}

const theme = {
	colors,
	fontFamily: "'Roboto', sans-serif",
	borderRadius: {
		[ComponentSize.SMALL]: '4px',
		[ComponentSize.MEDIUM]: '5px',
		[ComponentSize.LARGE]: '6px'
	},
	spacing: {
		[Spacing.XXS]: 4,
		[Spacing.XS]: 8,
		[Spacing.S]: 12,
		[Spacing.M]: 16,
		[Spacing.L]: 24,
		[Spacing.XL]: 32,
		[Spacing.XXL]: 40,
		[Spacing.XXXL]: 52
	},

	// Styles related to different form control components - input, textarea, select etc.
	formControl: {
		height: {
			[ComponentSize.SMALL]: 36,
			[ComponentSize.MEDIUM]: 44,
			[ComponentSize.LARGE]: 52
		},
		paddingX: 11
	},

	// Components related styles
	button: {
		minimalHoverBackground: 'rgba(0,0,0,.05)',
		boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.11)',
		height: {
			[ComponentSize.TINY]: 32,
			[ComponentSize.SMALL]: 36,
			[ComponentSize.MEDIUM]: 44,
			[ComponentSize.LARGE]: 52
		},
		fontSize: {
			[ComponentSize.TINY]: 12,
			[ComponentSize.SMALL]: 14,
			[ComponentSize.MEDIUM]: 16,
			[ComponentSize.LARGE]: 18
		},
		iconSize: {
			[ComponentSize.TINY]: 14,
			[ComponentSize.SMALL]: 16,
			[ComponentSize.MEDIUM]: 20,
			[ComponentSize.LARGE]: 22
		}
	},
	card: {
		default: {
			borderColor: 'rgba(0,0,0,.1)',
			boxShadow: 'none'
		},
		elevated: {
			borderColor: 'rgba(0,0,0,.1)',
			boxShadow: '1px 2px 6px rgba(0,0,0,.13)'
		}
	},
	checkboxRadio: {
		size: {
			[ComponentSize.MEDIUM]: 20,
			[ComponentSize.LARGE]: 24
		}
	},
	heading: {
		size: {
			h1: 32,
			h2: 28,
			h3: 24,
			h4: 20
		}
	},
	notice: {
		disabledButtonColor: gray._45,
		disabledButtonBackground: '#FAFAFA'
	},
	selectPicker: {
		boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.13)',
		iconMaxSize: {
			[ComponentSize.MEDIUM]: 48,
			[ComponentSize.LARGE]: 64
		}
	},
	text: {
		size: {
			[ComponentSize.SMALL]: 12,
			[ComponentSize.MEDIUM]: 14,
			[ComponentSize.LARGE]: 18
		}
	}
}

export type ThemeType = typeof theme

export default theme
