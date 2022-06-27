import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ComponentSize } from '../../types/ComponentSize'
import { Button } from '../Button'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

interface OverlayProps {
	visible: boolean
	animate: boolean
}

export const Overlay = styled.div<OverlayProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	z-index: ${({ theme }): number => theme.$pc.modal.zIndex};
	background: ${({ theme }): string => theme.$pc.modal.overlayBackground};
	opacity: ${({ visible }): number => (visible ? 1 : 0)};
	${({ theme, animate }): FlattenSimpleInterpolation =>
		animate
			? css`
					transition: opacity ${theme.$pc.transitionDuration};
			  `
			: css``}
`

export const Center = styled.div<{ center: boolean }>`
	display: flex;
	justify-content: center;
	align-items: ${({ center }): string => (center ? 'center' : 'flex-start')};
	min-height: 100%;
`

interface WindowProps {
	visible: boolean
	animate: boolean
	$size: ComponentSize
}

export const Window = styled.div<WindowProps>`
	border-radius: ${({ theme }): string => theme.$pc.borderRadius.large};
	box-shadow: ${({ theme }): string => theme.$pc.modal.windowShadow};
	background: white;
	position: relative;
	${({ theme, animate }): FlattenSimpleInterpolation =>
		animate
			? css`
					transition: transform ${theme.$pc.transitionDuration};
			  `
			: css``}
	transform: ${({ visible }): string =>
		visible ? 'translateY(0)' : 'translateY(-20px)'};
	width: 100%;
	min-height: 58px;
	max-width: ${({ theme, $size }): number => theme.$pc.modal.size[$size]}px;

	${marginCss}
	${paddingCss}
`

export const CloseButton = styled(Button)`
	position: absolute;
	top: 1rem;
	padding: 4px;
	min-height: 30px;

	right: 1rem;
	[dir='rtl'] & {
		right: initial;
		left: 1rem;
	}
`
