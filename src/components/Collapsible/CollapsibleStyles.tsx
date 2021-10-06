import styled from 'styled-components'

export const CollapsibleStyle = styled.div`
	transition: height ${(props): string => props.theme.$pc.transitionDuration}
		ease-out;
	overflow: hidden;
`
