import styled from 'styled-components'

export const CollapsibleStyle = styled.div<{
	height: string
	visibility: string
}>`
	transition: height ${(props): string => props.theme.$pc.transitionDuration}
		ease-out;
	overflow: hidden;
	height: ${(props): string => props.height};
	visibility: ${(props): string => props.visibility};
`
