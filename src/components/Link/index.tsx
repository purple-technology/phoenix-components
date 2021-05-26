import React from 'react'

import { ButtonIconAlignment } from '../Button/ButtonIconAlignment'
import { Icon, StyledLink } from './LinkStyles'

export interface LinkProps extends HTMLAnchorElement {
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
		{icon && iconAlignment === ButtonIconAlignment.LEFT && <Icon src={icon} />}

		{children}

		{/* TODO: unify with button icons */}
		{icon && iconAlignment === ButtonIconAlignment.RIGHT && <Icon src={icon} />}
	</StyledLink>
)

Link.defaultProps = {
	iconAlignment: ButtonIconAlignment.LEFT
}

export default Link
