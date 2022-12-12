import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Sizing } from '../../types/Sizing'
import { Button as PCButton } from '../Button'
import {
	getBaseStyles,
	getColorThemeStyles,
	getSizeRelatedStyles
} from '../common/Button/ButtonStyles'
import { marginCss } from '../common/Spacing/SpacingStyles'

export const PaginationContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	${marginCss}
`

export const Button = styled(PCButton)<{ selected?: boolean }>`
	[dir='rtl'] & svg {
		transform: scaleX(-1);
	}

	${({ selected }): string =>
		selected === false ? 'font-weight: normal;' : ''}
`

export const Ellipsis = styled.div<{ size: Sizing }>`
	${(props): FlattenSimpleInterpolation => getBaseStyles(props.theme)}
	${(props): string => getSizeRelatedStyles(props.size, props.theme)}
	${(props): string => getColorThemeStyles(props.theme, 'brand', true)}

	${({ theme, size }): FlattenSimpleInterpolation => {
		const padding =
			parseInt(theme.tokens.inputButton.sizing.height[size], 10) / 4

		return css`
			padding-left: ${padding}px;
			padding-right: ${padding}px;
		`
	}}

	&:hover {
		cursor: default;
		background: transparent;
	}
`
