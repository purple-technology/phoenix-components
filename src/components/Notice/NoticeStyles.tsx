import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ColorTheme } from '../../types/ColorTheme'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

interface NoticeWrapperProps extends PaddingProps, MarginProps {
	colorTheme: ColorTheme
}

const noticeWrapperCss = css<NoticeWrapperProps>`
	${({ theme, colorTheme }): string => `
		border-radius: ${theme.$pc.borderRadius['large']};
		background: ${theme.$pc.colors[colorTheme].light};
		color: ${theme.$pc.colors[colorTheme].dark};
	`}

	border-radius: ${({ theme }): string => theme.$pc.borderRadius['large']};
	line-height: 1.25;

	${marginCss}
	${paddingCss}
`

interface FlexNoticeWrapper extends NoticeWrapperProps {
	breakpoint: number
	withButton: boolean
	withClose: boolean
}

export const FlexNoticeWrapper = styled.div<FlexNoticeWrapper>`
	${noticeWrapperCss}

	display: grid;
	align-items: center;
	grid-column-gap: 12px;

	${({ withButton, withClose, breakpoint }): FlattenSimpleInterpolation => {
		if (withButton && withClose) {
			return css`
				grid-template-columns: 1fr minmax(0, auto) 2rem;
				grid-template-areas: 'text button close';

				@media (max-width: ${breakpoint}px) {
					grid-template-columns: 1fr 2rem;
					grid-template-areas: 'text close' 'button button';
				}
			`
		}
		if (withClose) {
			return css`
				grid-template-columns: 1fr 2rem;
				grid-template-areas: 'text close';

				@media (max-width: ${breakpoint}px) {
					grid-template-columns: 1fr 2rem;
					grid-template-areas: 'text close';
				}
			`
		}
		if (withButton) {
			return css`
				grid-template-columns: 1fr minmax(0, auto);
				grid-template-areas: 'text button';

				@media (max-width: ${breakpoint}px) {
					grid-template-columns: 1fr;
					grid-template-areas: 'text' 'button';
				}
			`
		}
		return css`
			grid-template-columns: 1fr;
			grid-template-areas: 'text';
		`
	}}
`

export const BlockNoticeWrapper = styled.div`
	${noticeWrapperCss}
`

export const NoticeText = styled.div`
	grid-area: text;
	margin: 8px 0;
`

interface CloseButtonProps {
	colorTheme: ColorTheme
	paddingLeft: boolean
	breakpoint: number
}

export const CloseButton = styled.button<CloseButtonProps>`
	grid-area: close;
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

	${({ breakpoint }): FlattenSimpleInterpolation => css`
		@media (max-width: ${breakpoint}px) {
			align-self: start;
			margin-top: 10px;
		}
	`}
`
