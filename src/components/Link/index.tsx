import type React from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import type { Color } from '../../types/Color'
import type { IconAlignment } from '../../types/IconAlignment'
import type { IconType } from '../../types/IconType'
import type { MarginProps } from '../common/Spacing/MarginProps'
import type { PaddingProps } from '../common/Spacing/PaddingProps'
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
	ref?: React.Ref<HTMLAnchorElement>
}

/**
 * `Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const Link: React.FC<LinkProps> = ({
	testId = 'Link',
	children,
	icon,
	iconAlignment = 'left',
	color,
	ref,
	...props
}) => {
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
