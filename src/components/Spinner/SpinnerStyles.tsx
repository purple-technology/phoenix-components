import styled, { type DefaultTheme, keyframes } from 'styled-components'

import type { ColorTheme } from '../../types/Color'
import type { CSSValue } from '../../types/CSSValue'
import { isSizing, type Sizing } from '../../types/Sizing'
import { getColorBasedOnColorThemeAndLightness } from '../../utils/colors'
import type { MarginProps } from '../common/Spacing/MarginProps'
import { marginCss } from '../common/Spacing/SpacingStyles'

const getSize = (size: Sizing | CSSValue, theme: DefaultTheme): string => {
	return isSizing(size)
		? theme.tokens.spinner.sizing[size]
		: typeof size === 'number'
			? `${size}px`
			: size
}

const wrapperKeyframes = keyframes`
	100% {
    transform: rotate(360deg);
	}
`

interface WrapperProps extends MarginProps {
	size: Sizing | CSSValue
}

export const Wrapper = styled.div<WrapperProps>`
	transform-origin: center center;
	animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) 0ms infinite normal none
		running ${wrapperKeyframes};
	height: ${({ theme, size }): string => getSize(size, theme)};
	width: ${({ theme, size }): string => getSize(size, theme)};
	display: inline-flex;
	vertical-align: middle;

	${marginCss}
`

const vectorKeyframes = keyframes`
	0% {
		transform: rotate(50deg);
		opacity: 0;
		stroke-dashoffset: 60;
	}
	100% {
		transform: rotate(230deg);
		opacity: 1;
		stroke-dashoffset: 50;
	}
`

interface VectorProps {
	light: boolean
	colorTheme?: ColorTheme
}

export const Vector = styled.svg<VectorProps>`
	opacity: 0;
	animation: 1s ease-in-out 0ms 1 normal forwards running ${vectorKeyframes};
	fill: none;
	stroke: ${(props): string =>
		getColorBasedOnColorThemeAndLightness(
			props.theme,
			props.colorTheme,
			props.light
		)};
	stroke-width: 2;
	stroke-linecap: round;
	stroke-dasharray: 60;
	stroke-dashoffset: 50;
`
