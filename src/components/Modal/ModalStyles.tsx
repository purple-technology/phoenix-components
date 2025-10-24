import styled, { css, type RuleSet } from 'styled-components'

import { getBoxShadow } from '../../tokens/helpers'
import type { CSSValue } from '../../types/CSSValue'
import { isSizing, type Sizing } from '../../types/Sizing'
import { Button } from '../Button'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
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
	z-index: 9000;
	background: ${({ theme }): string =>
		theme.tokens.modal.color.background.overlay};
	opacity: ${({ visible }): number => (visible ? 1 : 0)};
	${({ theme, animate }): RuleSet =>
		animate
			? css`
					transition: opacity ${theme.tokens.duration.transition.base};
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
	$size: Sizing | CSSValue
}

export const Window = styled.div<WindowProps & MarginProps & PaddingProps>`
	border-radius: ${({ theme }): string => theme.tokens.modal.borderRadius};
	box-shadow: ${({ theme }): string =>
		getBoxShadow(theme.tokens.modal.boxShadow)};
	background: ${({ theme }): string => theme.tokens.color.background.primary};
	position: relative;
	${({ theme, animate }): RuleSet =>
		animate
			? css`
					transition: transform ${theme.tokens.duration.transition.base};
			  `
			: css``}
	transform: ${({ visible }): string =>
		visible ? 'translateY(0)' : 'translateY(-20px)'};
	width: 100%;
	min-height: 58px;
	max-width: ${({ theme, $size }): string =>
		isSizing($size)
			? theme.tokens.modal.sizing.maxWidth[$size]
			: typeof $size === 'number'
				? `${$size}px`
				: $size};

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
