import {
	css,
	DefaultTheme,
	FlattenInterpolation,
	FlattenSimpleInterpolation,
	ThemeProps
} from 'styled-components'

const leftOrRight = (
	mainDirection: 'left' | 'right',
	offset: string | number
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
	${({ theme }): FlattenSimpleInterpolation => {
		const rtlDirection = mainDirection === 'left' ? 'right' : 'left'

		if (theme.dir && ['ltr', 'rtl'].includes(theme.dir)) {
			if (theme.dir === 'rtl') {
				return css`
					${rtlDirection}: ${offset};
				`
			}
			return css`
				${mainDirection}: ${offset};
			`
		}

		return css`
			${mainDirection}: ${offset};
			[dir='rtl'] & {
				${mainDirection}: initial;
				${rtlDirection}: ${offset};
			}
		`
	}}
`

export const left = (
	offset: string | number
): FlattenInterpolation<ThemeProps<DefaultTheme>> => leftOrRight('left', offset)

export const right = (
	offset: string | number
): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
	leftOrRight('right', offset)
