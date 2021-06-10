import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'

interface NoticeWrapperProps {
	colorTheme: ColorTheme
}

export const NoticeWrapper = styled.div<NoticeWrapperProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 18px 24px;

	${({ theme, colorTheme }): string => `
		border-radius: ${theme.$pc.borderRadius[ComponentSize.LARGE]};
		background: ${theme.$pc.colors[colorTheme].light};
		color: ${theme.$pc.colors[colorTheme].dark};
	`}

	border-radius: ${({ theme }): string =>
		theme.$pc.borderRadius[ComponentSize.LARGE]};
`

interface CloseButtonProps {
	colorTheme: ColorTheme
	paddingLeft: boolean
}

export const CloseButton = styled.button<CloseButtonProps>`
	border: none;
	outline: none;
	font-size: 2rem;
	font-weight: 400;
	line-height: 0.5;
	vertical-align: middle;
	cursor: pointer;
	background: none;
	font-family: ${(props): string => props.theme.$pc.fontFamily};
	color: ${({ theme, colorTheme }): string =>
		theme.$pc.colors[colorTheme].dark};
	padding: 0;
	${({ paddingLeft }): string =>
		paddingLeft
			? `
				margin-left: 1.5rem;
		`
			: ''}
`
