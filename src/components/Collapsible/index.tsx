import type React from 'react'
import type { PropsWithChildren } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { CollapsibleStyle } from './CollapsibleStyles'
import { useCollapsible } from './useCollapsible'

export interface CollapsibleProps extends GenericComponentProps {
	collapsed: boolean
}

export const Collapsible: React.FC<PropsWithChildren<CollapsibleProps>> = ({
	testId = 'Collapsible',
	collapsed,
	children
}) => {
	const { ref, height, visibility, onTransitionEnd, overflow } =
		useCollapsible(collapsed)

	return (
		<CollapsibleStyle
			ref={ref}
			$height={height}
			$visibility={visibility}
			$overflow={overflow}
			onTransitionEnd={onTransitionEnd}
			data-testid={testId}
		>
			{children}
		</CollapsibleStyle>
	)
}
