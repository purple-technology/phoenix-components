import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { Button, ButtonProps } from '../Button'
import { Vector } from '../Spinner/SpinnerStyles'

interface NoticeButtonProps extends Omit<ButtonProps, 'colorTheme'> {
	breakpoint: number
	colorTheme: ColorTheme
}

const NoticeButton = styled(Button)<NoticeButtonProps>`
	grid-area: button;
	background: #fff;
	color: ${({ theme }): string => theme.$pc.colors.text.dark};

	// Icons
	path {
		fill: ${({ theme }): string => theme.$pc.colors.text.dark};
	}
	&:hover path {
		fill: ${({ theme }): string => theme.$pc.colors.gray._0};
	}

	// Loading spinner
	${Vector} {
		stroke: ${({ theme }): string => theme.$pc.colors.text.dark};
	}
	&:hover ${Vector} {
		stroke: ${({ theme }): string => theme.$pc.colors.gray._0};
	}

	${({ breakpoint }): FlattenSimpleInterpolation => css`
		@media (max-width: ${breakpoint}px) {
			margin: 8px 0;
			justify-self: start;
		}
	`}
`

export default NoticeButton
