import * as React from 'react'

import { Card, CardProps } from '../Card'
import { Collapsible } from '../Collapsible'
import { Heading } from '../Heading'
import { ButtonStyle, HeadingContainerStyle } from './CollapsibleCardStyles'

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
		<Card p="xs" {...cardProps}>
			<HeadingContainerStyle onClick={(): void => setCollapsed(!collapsed)}>
				<ButtonStyle
					light
					size="tiny"
					colorTheme="neutral"
					icon={'chevron-right'}
					collapsed={collapsed}
				/>
				<Heading element="h4" bold={false} ml="xs">
					{heading}
				</Heading>
			</HeadingContainerStyle>
			<Collapsible collapsed={collapsed}>{children}</Collapsible>
		</Card>
	)
}
