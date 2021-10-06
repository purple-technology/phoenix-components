import * as React from 'react'

import { Button } from '../Button'
import { Card, CardProps } from '../Card'
import { Collapsible } from '../Collapsible'
import { HeadingContainerStyle, HeadingStyle } from './CollapsibleCardStyles'

export interface CollapsibleCardProps extends CardProps {
	readonly heading: string
}

export const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
	heading,
	children,
	...cardProps
}) => {
	const [collapsed, setCollapsed] = React.useState(false)

	return (
		<Card {...cardProps} p={cardProps.p || 20}>
			<HeadingContainerStyle>
				<Button
					light
					size="small"
					colorTheme="neutral"
					icon={collapsed ? 'chevron-right' : 'chevron-down'}
					onClick={(): void => setCollapsed(!collapsed)}
				/>
				<HeadingStyle element="h4">{heading}</HeadingStyle>
			</HeadingContainerStyle>
			<Collapsible collapsed={collapsed}>{children}</Collapsible>
		</Card>
	)
}
