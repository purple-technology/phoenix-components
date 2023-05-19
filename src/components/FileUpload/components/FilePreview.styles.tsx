import styled from 'styled-components'

import { Text } from '../../Text'

export const StyledFilePreview = styled.div`
	position: absolute;
	top: 8px;
	left: 8px;
	overflow: hidden;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	object-fit: contain;
	border-radius: ${({ theme }): string =>
		theme.tokens.inputButton.borderRadius.xs};
`

export const WrappableText = styled(Text)`
	word-wrap: break-word;
	width: 100%;
`
