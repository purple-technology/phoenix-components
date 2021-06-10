import React from 'react'
import styled from 'styled-components'

import { ColorTheme } from '../../enum/ColorTheme'
import { ComponentSize } from '../../enum/ComponentSize'
import {
	getBaseStyles,
	getSizeRelatedStyles
} from '../common/Button/ButtonStyles'

interface NoticeButtonProps {
	onClick?: (event: React.MouseEvent) => void
	size: ComponentSize
	colorTheme: ColorTheme
}

const NoticeButton = styled.button<NoticeButtonProps>`
	${(props): string => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(ComponentSize.SMALL, props.theme)}
	
	background: #fff;
	box-shadow: ${({ theme }): string => theme.$pc.button.boxShadow};
	color: ${({ theme }): string => theme.$pc.colors.text};

	&:hover {
		color: #fff;
		background: ${({ theme, colorTheme }): string =>
			theme.$pc.colors[colorTheme].dark};
	}
	&:focus {
		box-shadow: 0 0 0 3px
			${({ theme }): string =>
				`${theme.$pc.colors.focus}, ${theme.$pc.button.boxShadow}`};
	}
	&[disabled] {
		color: ${({ theme }): string => theme.$pc.notice.disabledButtonColor};
		background: ${({ theme }): string =>
			theme.$pc.notice.disabledButtonBackground};
	}
`

export default NoticeButton
