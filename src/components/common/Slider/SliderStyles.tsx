import styled from 'styled-components'

import { CSSValue } from '../../../types/CSSValue'

export const Wrapper = styled.div<{ px?: CSSValue }>`
	padding: 0 ${({ px }): CSSValue => px ?? '10px'};
	display: flex;
	align-items: center;
`

export const StyledSlider = styled.div`
	&,
	&.noUi-target {
		border: none;
		background: none;
		box-shadow: none;
		width: 100%;
	}

	&[disabled] {
		opacity: 0.4;
	}

	&.noUi-horizontal {
		height: auto;

		.noUi-handle {
			right: -10px;
			top: 0;
			width: 20px;
			height: 20px;
			border-radius: 100%;
			border: 1px solid
				${({ theme }): string => theme.tokens.color.text.secondary};
			background: ${({ theme }): string =>
				theme.tokens.color.background.primary};
			box-shadow: none;

			&::before,
			&::after {
				display: none;
			}
		}
	}

	.noUi-base {
		display: flex;
		align-items: center;
		height: 20px;
	}

	.noUi-connects {
		height: 2px;
		background: ${({ theme }): string => theme.tokens.color.border.primary};
	}

	.noUi-connect {
		background: ${({ theme }): string => theme.tokens.color.text.secondary};
	}
`
