import styled, { css } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'

interface NoticeWrapperProps {
	colorTheme: ColorTheme
}

const noticeWrapperCss = css<NoticeWrapperProps>`
	padding: 18px 24px;

	${({ theme, colorTheme }): string => `
		border-radius: ${theme.$pc.borderRadius['large']};
		background: ${theme.$pc.colors[colorTheme].light};
		color: ${theme.$pc.colors[colorTheme].dark};
	`}

	border-radius: ${({ theme }): string => theme.$pc.borderRadius['large']};
`

export const FlexNoticeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${noticeWrapperCss}
`

export const BlockNoticeWrapper = styled.div`
	${noticeWrapperCss}
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
