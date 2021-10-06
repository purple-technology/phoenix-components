import * as React from 'react'

import { useCollapsible } from './CollapsibleHooks'
import { CollapsibleStyle } from './CollapsibleStyles'

export interface CollapsibleProps {
	collapsed: boolean
}

export const Collapsible: React.FC<CollapsibleProps> = ({
	collapsed,
	children
}) => {
	const { ref } = useCollapsible({ collapsed })
	return <CollapsibleStyle ref={ref}>{children}</CollapsibleStyle>
}
