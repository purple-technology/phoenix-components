import styled from 'styled-components'

export const Wrapper = styled.div`
	display: inline-flex;
`

export const Divider = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 1px;
`

export const DividerInner = styled.div`
	height: 80%;
	background: ${({ theme }): string => theme.tokens.color.border.primary};
`
