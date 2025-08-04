import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { Color } from '../../types/Color'
import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import LinkIcon from './LinkIcon'
import { LinkText, StyledLink } from './LinkStyles'

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		GenericComponentProps,
		MarginProps,
		PaddingProps {
	icon?: IconType
	iconAlignment?: IconAlignment
	color?: Color
	bold?: boolean
	noUnderline?: boolean
	/** Reference to the anchor element */
	ref?: React.Ref<HTMLAnchorElement>
}

/**
 * `Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export function Link({
	testId = 'Link',
	children,
	icon,
	iconAlignment = 'left',
	color,
	ref,
	...props
}: LinkProps): React.JSX.Element {
	return (
		<StyledLink ref={ref} data-testid={testId} $color={color} {...props}>
			{iconAlignment === 'left' && <LinkIcon icon={icon} color={color} />}

			<LinkText icon={!!icon} iconAlignment={iconAlignment}>
				{children}
			</LinkText>

			{iconAlignment === 'right' && <LinkIcon icon={icon} color={color} />}
		</StyledLink>
	)
}
