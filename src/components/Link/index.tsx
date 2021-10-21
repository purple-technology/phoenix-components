import React, { forwardRef } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { ColorTheme } from '../../types/ColorTheme'
import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
import { TextColor } from '../../types/TextColor'
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
	colorTheme?: ColorTheme
	color?: TextColor
	bold?: boolean
	noUnderline?: boolean
}

/**
 * `Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export const Link: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(function Link(
	{ testId = 'Link', children, icon, iconAlignment = 'left', color, ...props },
	ref
) {
	return (
		<StyledLink ref={ref} data-testid={testId} $color={color} {...props}>
			{iconAlignment === 'left' && (
				<LinkIcon icon={icon} color={color} colorTheme={props.colorTheme} />
			)}

			<LinkText icon={!!icon} iconAlignment={iconAlignment}>
				{children}
			</LinkText>

			{iconAlignment === 'right' && (
				<LinkIcon icon={icon} color={color} colorTheme={props.colorTheme} />
			)}
		</StyledLink>
	)
})
