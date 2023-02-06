import tokens from './tokens/tokens.json'

const cardShadow = '1px 2px 6px rgba(0,0,0,.13)'

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
	primary: {
		dark: '#522974',
		darkHoverBackground: '#3F2059',
		darkDisabledBackground: '#BBA5CD',
		light: '#F1EDF6',
		lightHoverBackground: '#DFD5EB',
		lightDisabledBackground: '#F7F4FA',
		lightDisabledColor: '#D0C0DD'
	},
	neutral: {
		dark: gray._80,
		darkHoverBackground: gray._85,
		darkDisabledBackground: gray._35,
		light: gray._20,
		lightHoverBackground: gray._25,
		lightDisabledBackground: gray._15,
		lightDisabledColor: gray._45
	},
	success: {
		dark: '#0C8B51',
		darkHoverBackground: '#097041',
		darkDisabledBackground: '#A5CDBA',
		light: '#E8F0EC',
		lightHoverBackground: '#CFE8DA',
		lightDisabledBackground: '#F4FAF7',
		lightDisabledColor: '#C0DDCE'
	},
	error: {
		dark: '#A50000',
		darkHoverBackground: '#9C0909',
		darkDisabledBackground: '#CDA5A5',
		light: '#FCF2F2',
		lightHoverBackground: '#EDD3D3',
		lightDisabledBackground: '#FAF4F4',
		lightDisabledColor: '#DDC0C0'
	},
	warning: {
		dark: '#CB7307',
		darkHoverBackground: '#CB7307',
		darkDisabledBackground: '#E8CBA7',
		light: '#FBF6E9',
		lightHoverBackground: '#F4E9CB',
		lightDisabledBackground: '#FDF9EF',
		lightDisabledColor: '#EDC089'
	},
	info: {
		dark: '#3F75AC',
		darkHoverBackground: '#3F75AC',
		darkDisabledBackground: '#9EBFE1',
		light: '#F2F7FC',
		lightHoverBackground: '#E3ECF5',
		lightDisabledBackground: '#F2F7FC',
		lightDisabledColor: '#A5C4E3'
	},
	gray,

	focus: '#8CB7FA',

	borderInputHover: gray._50,
	borderInput: gray._40,
	borderHr: gray._35,
	borderDisabled: gray._30,

	text: {
		darkest: gray._90,
		dark: gray._80,
		light: gray._50,
		lightest: gray._45,
		white: gray._0
	}
}

const theme = {
	colors,
	fontFamily: "'Mulish', sans-serif",
	fontWeight: {
		regular: 400,
		bold: 500
	},
	fontSize: 14,
	borderRadius: {
		tiny: '4px',
		small: '4px',
		medium: '5px',
		large: '6px'
	},
	spacing: {
		xxxs: 4,
		xxs: 8,
		xs: 12,
		s: 16,
		m: 20,
		l: 24,
		xl: 32,
		xxl: 40,
		xxxl: 52
	},
	transitionDuration: '.2s',

	// Styles related to different form control components - input, textarea, select etc.
	formControl: {
		height: {
			tiny: 32,
			small: 36,
			medium: 44,
			large: 52
		},
		paddingX: 11
	},

	// Components related styles
	button: {
		minimalHoverBackground: 'rgba(0,0,0,.05)',
		boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.11)',
		height: {
			tiny: 32,
			small: 36,
			medium: 44,
			large: 52
		},
		fontSize: {
			tiny: 14,
			small: 14,
			medium: 14,
			large: 15
		},
		iconSize: {
			tiny: 14,
			small: 16,
			medium: 20,
			large: 22
		},
		padding: {
			tiny: '6px 12px',
			small: '8px 16px',
			medium: '12px 22px',
			large: '16px 26px'
		},
		borderRadius: {
			tiny: 4,
			small: 4,
			medium: 5,
			large: 6
		}
	},
	card: {
		default: {
			borderColor: 'rgba(0,0,0,.1)',
			borderColorHover: 'rgba(0,0,0,.2)',
			boxShadow: 'none'
		},
		elevated: {
			borderColor: 'rgba(0,0,0,0)',
			borderColorHover: 'rgba(0,0,0,.2)',
			boxShadow: cardShadow
		}
	},
	checkboxRadio: {
		size: {
			medium: 20,
			large: 24
		}
	},
	fileUpload: {
		preview: {
			minSize: 140,
			maxSize: 160
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
	modal: {
		zIndex: 9000,
		overlayBackground: 'rgba(0, 0, 0, 0.6)',
		windowShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
		size: {
			tiny: 420,
			small: 640,
			medium: 940,
			large: 1200
		}
	},
	multiSelect: {
		multiValueLabel: {
			paddingX: {
				tiny: 5,
				small: 6,
				medium: 8,
				large: 12
			},
			paddingY: {
				tiny: 3,
				small: 3,
				medium: 5,
				large: 8
			},
			fontSize: {
				tiny: 12,
				small: 12,
				medium: 13,
				large: 14
			}
		}
	},
	notice: {
		disabledButtonColor: gray._45,
		disabledButtonBackground: '#FAFAFA'
	},
	selectPicker: {
		boxShadow: cardShadow,
		iconMaxSize: {
			medium: 48,
			large: 64
		}
	},
	spinner: {
		size: {
			tiny: 14,
			small: 16,
			medium: 18,
			large: 20
		}
	},
	tag: {
		padding: {
			small: '4px 12px',
			medium: '6px 14px'
		}
	},
	text: {
		size: {
			small: 12,
			medium: 14,
			large: 18
		}
	},
	tooltip: {
		background: gray._90,
		boxShadow: cardShadow
	}
}

const prefixedTheme = {
	$pc: theme,
	tokens
}

export type Theme = typeof prefixedTheme

export default prefixedTheme
