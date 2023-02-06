import styled from 'styled-components'

export const CollapsibleStyle = styled.div<{
	$height: string
	$visibility: string
	$overflow: string
}>`
	transition: height
		${(props): string => props.theme.tokens.ref.transition.duration.base}
		ease-out;
	height: ${(props): string => props.$height};
	visibility: ${(props): string => props.$visibility};
	overflow: ${(props): string => props.$overflow};
`
