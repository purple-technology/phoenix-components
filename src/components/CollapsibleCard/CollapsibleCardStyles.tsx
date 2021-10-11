import styled from 'styled-components'

export const HeadingContainerStyle = styled.header`
	display: flex;
	align-items: center;
	cursor: pointer;
	:hover > button {
		background-color: ${(props): string =>
			props.theme.$pc.colors.neutral.lightHoverBackground};
	}
`
