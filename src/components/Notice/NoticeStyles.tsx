import styled from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { NoticeProps } from './index'

export const NoticeWrapper = styled.div<NoticeProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 18px 24px;

	${({ theme, colorTheme }): string => `
		border-radius: ${theme.borderRadius[ComponentSize.LARGE]};
		background: ${theme.colors[colorTheme].light};
		color: ${theme.colors[colorTheme].dark};
	`}

	border-radius: ${({ theme }) => theme.borderRadius[ComponentSize.LARGE]};
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
	font-family: ${(props): string => props.theme.fontFamily};
	color: ${({ theme, colorTheme }) => theme.colors[colorTheme].dark};
	padding: 0;
	${({ paddingLeft }) =>
		paddingLeft &&
		`
		margin-left: 1.5rem;
	`}
`
