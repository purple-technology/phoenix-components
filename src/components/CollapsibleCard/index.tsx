import React, { PropsWithChildren } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Card, CardProps } from '../Card'
import { Collapsible } from '../Collapsible'
import { Heading } from '../Heading'
import { Spacer } from '../Spacer'
import { ButtonStyle, Header, HeadingContainer } from './CollapsibleCardStyles'

export interface CollapsibleCardProps extends CardProps, GenericComponentProps {
	heading: string
	rightContent?: React.ReactNode
}

export const CollapsibleCard: React.FC<
	PropsWithChildren<CollapsibleCardProps>
> = ({
	testId = 'CollapsibleCard',
	heading,
	rightContent,
	children,
	...cardProps
}) => {
	const [collapsed, setCollapsed] = React.useState(false)

	return (
		<Card pt="xs" px="xs" data-testid={testId} {...cardProps}>
			<Header>
				<HeadingContainer
					mb="xs"
					onClick={(): void => setCollapsed(!collapsed)}
				>
					<ButtonStyle
						light
						size="xs"
						colorTheme="neutral"
						icon={'chevron-right'}
						collapsed={collapsed}
					/>
					<Heading element="h4" bold={false} mx="xs">
						{heading}
					</Heading>
				</HeadingContainer>
				<Spacer mb="xs">{rightContent}</Spacer>
			</Header>
			<Collapsible collapsed={collapsed}>
				<Spacer pb="xs">{children}</Spacer>
			</Collapsible>
		</Card>
	)
}
