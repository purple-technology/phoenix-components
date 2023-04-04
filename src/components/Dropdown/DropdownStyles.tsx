import styled from 'styled-components'

import { getBoxShadow } from '../../tokens/helpers'

interface StyledPopoverProps {
	visible?: boolean
}

export const StyledPopover = styled.div<StyledPopoverProps>`
	box-shadow: ${({ theme }): string =>
		getBoxShadow(theme.tokens.dropdown.boxShadow)};
	border-radius: ${({ theme }): string => theme.tokens.dropdown.borderRadius};
	transition: all
		${({ theme }): string => theme.tokens.duration.transition.base};
	opacity: ${({ visible }): number => (visible ? 1 : 0)};
	transform: translateY(${({ visible }): number => (visible ? 0 : -5)}px);
	background: ${({ theme }): string => theme.tokens.color.background.primary};
`
