import styled from 'styled-components'

export const Wrapper = styled.div`
	display: inline-flex;
`

export const Divider = styled.div`
	width: 1px;
	background: ${({ theme }) => theme.colors.borderInput};
`
