import { Tabs as ReactTabs } from 'react-tabs'
import styled from 'styled-components'

export const StyledTabs = styled(ReactTabs)`
	.react-tabs__tab-panel {
		display: none;
	}

	.react-tabs__tab-panel--selected {
		display: block;
	}
`
