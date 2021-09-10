import styled, { DefaultTheme, keyframes } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { ComponentSize } from '../../types/ComponentSize'
import { marginCss } from '../common/Spacing/SpacingStyles'

const getSize = (
	size: ComponentSize | string | number,
	theme: DefaultTheme
): string => {
	return ComponentSize.includes(size as ComponentSize)
		? `${theme.$pc.spinner.size[size as ComponentSize]}px`
		: typeof size === 'number'
		? `${size}px`
		: size
}

const getColor = (
	theme: DefaultTheme,
	colorTheme?: ColorTheme,
	light?: boolean
): string => {
	if (!colorTheme) {
		return light ? '#fff' : '#000'
	}
	return theme.$pc.colors[colorTheme][light ? 'light' : 'dark']
}

const wrapperKeyframes = keyframes`
	100% {
    transform: rotate(360deg);
	}
`

interface WrapperProps {
	size: ComponentSize | string | number
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
	O% {
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
		getColor(props.theme, props.colorTheme, props.light)};
	stroke-width: 2;
	stroke-linecap: round;
	stroke-dasharray: 60;
	stroke-dashoffset: 50;
`
