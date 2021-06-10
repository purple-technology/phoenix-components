import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { ColorTheme } from '../../../enum/ColorTheme'
import { ComponentSize } from '../../../enum/ComponentSize'

interface ButtonLoaderProps {
	colorTheme: ColorTheme
	size?: ComponentSize
	light?: boolean
}

const getSize = (size?: ComponentSize): string => {
	switch (size) {
		case ComponentSize.TINY:
			return '12px'
		case ComponentSize.SMALL:
			return '14px'
		case ComponentSize.LARGE:
			return '18px'
		case ComponentSize.MEDIUM:
		default:
			return '16px'
	}
}

const getColor = (
	theme: DefaultTheme,
	colorTheme: ColorTheme,
	light?: boolean
): string => {
	if (!light) {
		return '#fff'
	}

	return theme.colors[colorTheme].dark
}

const ButtonLoaderContainer = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ButtonLoaderSpinner = styled.div<ButtonLoaderProps>`
	display: inline-block;
	position: relative;
	width: ${(props): string => getSize(props.size)};
	height: ${(props): string => getSize(props.size)};
	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: ${(props): string => getSize(props.size)};
		height: ${(props): string => getSize(props.size)};
		border: 2px solid
			${(props): string => getColor(props.theme, props.colorTheme, props.light)};
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${(props): string =>
				getColor(props.theme, props.colorTheme, props.light)}
			transparent transparent transparent;
	}
	div:nth-child(1) {
		animation-delay: -0.45s;
	}
	div:nth-child(2) {
		animation-delay: -0.3s;
	}
	div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
	size = ComponentSize.MEDIUM,
	...props
}) => (
	<ButtonLoaderContainer>
		<ButtonLoaderSpinner size={size} {...props}>
			<div />
			<div />
			<div />
		</ButtonLoaderSpinner>
	</ButtonLoaderContainer>
)

export default ButtonLoader
