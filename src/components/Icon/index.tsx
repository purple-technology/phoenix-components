import React, { useState } from 'react'
import { useEffect } from 'react'

import { PhoenixIcons } from '../../types/PhoenixIcons'
import { Spacing } from '../../types/Spacing'
import { MarginProps } from '../common/Spacing/MarginProps'
import { StyledIcon } from './IconStyles'

export interface IconProps extends MarginProps {
	icon: PhoenixIcons
	size?: Spacing | string | number
	className?: string
}

export const Icon: React.FC<IconProps> = ({ size = 24, ...props }) => {
	const [src, setSrc] = useState<string>()

	useEffect(() => {
		import(`./icons/${props.icon}.svg`).then((img) => setSrc(img.default))
	}, [])

	if (!src) return null

	return <StyledIcon size={size} src={src} {...props} />
}
