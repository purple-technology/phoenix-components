import React, { PropsWithChildren, ReactElement } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { CSSValue } from '../../types/CSSValue'
import { Spacing } from '../../types/Spacing'
import { Box } from '../Box'
import { Card, CardProps } from '../Card'
import { Collapsible } from '../Collapsible'
import { Flex } from '../Flex'
import { Heading } from '../Heading'
import {
	ArrowContainer,
	ButtonStyle,
	HeadingContainer
} from './CollapsibleCardStyles'

export interface CollapsibleCardProps extends CardProps, GenericComponentProps {
	heading: ReactElement | string
	headingMarginBottom?: Spacing | CSSValue
	/** Custom right content of the heading. **Cannot be used in combination with arrowReverse prop!** */
	rightContent?: ReactElement
	initialOpen?: boolean
	/** Arrow is placed on the right side. **Cannot be used in combination with rightContent prop!** */
	arrowReverse?: boolean
	/** Custom arrow element */
	arrow?: ReactElement
	/** Show border */
	showCard?: boolean
	/** Degrees for custom rotation of icon */
	iconRotationDeg?: number
}

export const CollapsibleCard: React.FC<
	PropsWithChildren<CollapsibleCardProps>
> = ({
	testId = 'CollapsibleCard',
	initialOpen = true,
	arrowReverse = false,
	showCard = true,
	headingMarginBottom = 'xs',
	iconRotationDeg = 90,
	arrow,
	heading,
	rightContent,
	children,
	...props
}) => {
	const [collapsed, setCollapsed] = React.useState(!initialOpen)

	const Element = showCard ? Card : Box

	// used to be Card or Box option for border byt I to use only Card, check for usage (Axiory no longer uses Box)
	// fix styling it still doesn't looks correct
	return (
		<Element
			data-testid={testId}
			p={props.p ?? (showCard ? 'xs' : 0)}
			pb={props.pb ?? props.py ?? props.p ?? 0}
			{...props}
		>
			<Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
				<HeadingContainer
					mb={headingMarginBottom}
					onClick={(): void => setCollapsed(!collapsed)}
					$arrowReverse={arrowReverse}
				>
					<ArrowContainer
						$collapsed={collapsed}
						$iconRotationDeg={iconRotationDeg}
					>
						{arrow ?? (
							<ButtonStyle
								secondary
								size="xs"
								colorTheme="neutral"
								icon={'chevron-right'}
							/>
						)}
					</ArrowContainer>
					{typeof heading === 'string' ? (
						<Heading element="h4" bold={false} mx={arrowReverse ? 0 : 'xs'}>
							{heading}
						</Heading>
					) : (
						heading
					)}
				</HeadingContainer>
				{!!rightContent && <Box mb="xs">{rightContent}</Box>}
			</Flex>
			<Collapsible collapsed={collapsed}>
				<Box pb={showCard ? 'xs' : 0}>{children}</Box>
			</Collapsible>
		</Element>
	)
}
