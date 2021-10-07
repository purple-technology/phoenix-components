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
	const { ref, height, visibility, onTransitionEnd } = useCollapsible(collapsed)

	return (
		<CollapsibleStyle
			ref={ref}
			height={height}
			visibility={visibility}
			onTransitionEnd={onTransitionEnd}
		>
			{children}
		</CollapsibleStyle>
	)
}
