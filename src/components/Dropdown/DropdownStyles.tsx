import styled from 'styled-components'

interface StyledPopoverProps {
	visible?: boolean
}

export const StyledPopover = styled.div<StyledPopoverProps>`
	box-shadow: 2px 4px 21px rgba(0, 0, 0, 0.28);
	border-radius: ${({ theme }): string => theme.tokens.dropdown.borderRadius};
	transition: all
		${({ theme }): string => theme.tokens.duration.transition.base};
	opacity: ${({ visible }): number => (visible ? 1 : 0)};
	transform: translateY(${({ visible }): number => (visible ? 0 : -5)}px);
	background: #fff;
`
