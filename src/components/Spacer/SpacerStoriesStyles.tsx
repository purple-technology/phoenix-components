import styled from 'styled-components'

import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { getSpacingCssValue } from '../common/Spacing/utils'

interface BlockProps extends MarginProps, PaddingProps {
	w?: Spacing | string | number
	h?: Spacing | string | number
}

export const Block = styled.div<BlockProps>`
	border: 2px solid black;
	display: flex;
	width: ${({ theme, w }): string => getSpacingCssValue(theme, w)};
	height: ${({ theme, h }): string => getSpacingCssValue(theme, h)};
	position: relative;

	${marginCss}
	${paddingCss}

	&::after {
		content: 'width/height';
		position: absolute;
		top: 100%;
		text-align: end;
		right: 0;
		font-size: 12px;
		font-weight: ${({ theme }): number => theme.$pc.fontWeight.bold};
	}
`

export const Margin = styled.div`
	border: 2px dashed red;
	display: inline-block;
	position: relative;

	&::after {
		content: 'margin';
		position: absolute;
		top: 100%;
		text-align: end;
		right: 0;
		font-size: 12px;
		font-weight: ${({ theme }): number => theme.$pc.fontWeight.bold};
		color: red;
	}
`

export const Padding = styled.div<PaddingProps>`
	border: 2px dashed blue;
	width: 100%;
	position: relative;

	&::after {
		content: 'padding';
		position: absolute;
		top: 100%;
		text-align: end;
		right: 0;
		font-size: 12px;
		font-weight: ${({ theme }): number => theme.$pc.fontWeight.bold};
		color: blue;
	}
`
