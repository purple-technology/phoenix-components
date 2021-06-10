import styled from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'

export const StyledPopover = styled.div`
	box-shadow: 2px 4px 21px rgba(0, 0, 0, 0.28);
	border-radius: ${({ theme }): string =>
		theme.$pc.borderRadius[ComponentSize.MEDIUM]};
`
