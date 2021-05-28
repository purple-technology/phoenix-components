import React from 'react'
import styled from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import { getBaseStyles, getSizeRelatedStyles } from '../Button/ButtonStyles'

interface NoticeButtonProps {
	onClick: (event: React.MouseEvent) => void
	size: ComponentSize
	colorTheme: ColorTheme
}

const NoticeButton = styled.button<NoticeButtonProps>`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(ComponentSize.SMALL, props.theme)}
	
	background: #fff;
	box-shadow: ${({ theme }) => theme.button.boxShadow};
	color: ${({ theme }) => theme.colors.text};

	&:hover {
		color: #fff;
		background: ${({ theme, colorTheme }) => theme.colors[colorTheme].dark};
	}
	&:focus {
		box-shadow: 0 0 0 3px
			${({ theme }): string => `${theme.colors.focus}, ${theme.button.boxShadow}`};
	}
	&[disabled] {
		color: ${({ theme }) => theme.notice.disabledButtonColor};
		background: ${({ theme }) => theme.notice.disabledButtonBackground};
	}
`

export default NoticeButton
