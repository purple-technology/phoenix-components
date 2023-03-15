import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { getLineHeightUnitless } from '../../tokens/helpers'
import { ColorTheme } from '../../types/Color'
import { CSSValue } from '../../types/CSSValue'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'

interface NoticeWrapperProps extends PaddingProps, MarginProps {
	colorTheme: ColorTheme
	borderRadius?: CSSValue
}

const noticeWrapperCss = css<NoticeWrapperProps>`
	${({ theme, colorTheme, borderRadius }): string => `
		border-radius: ${borderRadius ?? theme.tokens.notice.borderRadius};
		background: ${theme.tokens.color.background[colorTheme].secondary};
		color: ${theme.tokens.color.text[colorTheme].primary};
		line-height: ${getLineHeightUnitless(theme.tokens.ref.lineHeight.sm)};
	`}

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
	font-weight: ${({ theme }): string => theme.tokens.ref.fontWeight.regular};
	line-height: 0.5;
	vertical-align: middle;
	cursor: pointer;
	background: none;
	font-family: ${(props): string => props.theme.tokens.ref.fontFamily.base};
	color: ${({ theme, colorTheme }): string =>
		theme.tokens.color.text[colorTheme].primary};
	padding: 0;

	${({ breakpoint }): FlattenSimpleInterpolation => css`
		@media (max-width: ${breakpoint}px) {
			align-self: start;
			margin-top: 10px;
		}
	`}
`
