import styled, { css, RuleSet } from 'styled-components'

import { ColorTheme } from '../../types/Color'
import { Button, ButtonProps } from '../Button'
import { Vector } from '../Spinner/SpinnerStyles'

interface NoticeButtonProps extends Omit<ButtonProps, 'colorTheme'> {
	breakpoint: number
	colorTheme: ColorTheme
}

const NoticeButton = styled(Button)<NoticeButtonProps>`
	grid-area: button;
	background: #fff;
	color: ${({ theme }): string => theme.tokens.color.text.primary};

	// Icons
	path {
		fill: ${({ theme }): string => theme.tokens.color.text.primary};
	}
	&:hover path {
		fill: ${({ theme }): string => theme.tokens.color.text.inverse};
	}

	// Loading spinner
	${Vector} {
		stroke: ${({ theme }): string => theme.tokens.color.text.primary};
	}
	&:hover ${Vector} {
		stroke: ${({ theme }): string => theme.tokens.color.text.inverse};
	}

	${({ breakpoint }): RuleSet => css`
		@media (max-width: ${breakpoint}px) {
			margin: 8px 0;
			justify-self: start;
		}
	`}
`

export default NoticeButton
