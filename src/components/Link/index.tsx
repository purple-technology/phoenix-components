import React, { forwardRef } from 'react'

import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
import LinkIcon from './LinkIcon'
import { StyledLink } from './LinkStyles'

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	icon?: IconType
	iconAlignment?: IconAlignment
}

/**
 * `Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const Link: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(function Link({ children, icon, iconAlignment, ...props }, ref) {
	return (
		<StyledLink ref={ref} {...props}>
			{iconAlignment === 'left' && (
				<LinkIcon icon={icon} iconAlignment={iconAlignment} />
			)}

			{children}

			{iconAlignment === 'right' && (
				<LinkIcon icon={icon} iconAlignment={iconAlignment} />
			)}
		</StyledLink>
	)
})
