import React from 'react'

import { ButtonIconAlignment } from '../common/Button/ButtonIconAlignment'
import { Icon, StyledLink } from './LinkStyles'

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	icon?: string
	iconAlignment?: ButtonIconAlignment
}

const Link: React.FC<LinkProps> = ({
	children,
	icon,
	iconAlignment,
	...props
}) => (
	<StyledLink {...props}>
		{/* TODO: unify with button icons */}
		{icon && iconAlignment === ButtonIconAlignment.LEFT && (
			<Icon src={icon} iconAlignment={iconAlignment} />
		)}

		{children}

		{/* TODO: unify with button icons */}
		{icon && iconAlignment === ButtonIconAlignment.RIGHT && (
			<Icon src={icon} iconAlignment={iconAlignment} />
		)}
	</StyledLink>
)

Link.defaultProps = {
	iconAlignment: ButtonIconAlignment.LEFT
}

export default Link
