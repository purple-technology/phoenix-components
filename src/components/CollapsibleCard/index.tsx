import * as React from 'react'

import { Button } from '../Button'
import { Card, CardProps } from '../Card'
import { Collapsible } from '../Collapsible'
import { Heading } from '../Heading'
import { HeadingContainerStyle } from './CollapsibleCardStyles'

export interface CollapsibleCardProps extends CardProps {
	heading: string
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
				<Heading element="h4" bold={false} ml="xs">
					{heading}
				</Heading>
			</HeadingContainerStyle>
			<Collapsible collapsed={collapsed}>{children}</Collapsible>
		</Card>
	)
}
