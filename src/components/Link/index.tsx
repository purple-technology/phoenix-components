import React from 'react'

import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { Icon, StyledLink } from './LinkStyles'

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	icon?: string
	iconAlignment?: ButtonIconAlignment
}

/**
 * `Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const Link: React.FC<LinkProps> = ({
	children,
	icon,
	iconAlignment,
	...props
}) => (
	<StyledLink {...props}>
		{icon && iconAlignment === 'left' && (
			<Icon src={icon} $iconAlignment={iconAlignment} />
		)}

		{children}

		{icon && iconAlignment === 'right' && (
			<Icon src={icon} $iconAlignment={iconAlignment} />
		)}
	</StyledLink>
)
