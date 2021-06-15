import styled from 'styled-components'

export const FormStyled = styled.form`
	max-width: 50%;

	margin: 0 auto;

	& > * {
		margin: 25px 0;
	}
`

export const CenterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > * {
		margin: 15px 0;
	}
`
