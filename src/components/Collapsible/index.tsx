import * as React from 'react'

import { CollapsibleStyle } from './CollapsibleStyles'
import { useCollapsible } from './useCollapsible'

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
			$height={height}
			$visibility={visibility}
			onTransitionEnd={onTransitionEnd}
		>
			{children}
		</CollapsibleStyle>
	)
}
