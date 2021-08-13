import React from 'react'
import styled from 'styled-components'

import { IconType } from '../../types/IconType'
import { PhoenixIconsOutlined } from '../../types/PhoenixIcons'
import { StyledCustomIcon, StyledIcon, styledIconCss } from './MenuStyles'

interface IconProps {
	icon?: IconType
}

const MenuItemIcon: React.FC<IconProps> = (props) => {
	if (!props.icon) {
		return null
	}

	if (PhoenixIconsOutlined.includes(props.icon as PhoenixIconsOutlined)) {
		return <StyledIcon icon={props.icon as PhoenixIconsOutlined} />
	}

	if (typeof props.icon === 'string') {
		return <StyledCustomIcon src={props.icon} />
	}

	const StyledCustomElement = styled(props.icon)`
		${styledIconCss}
	`

	return <StyledCustomElement />
}

export default MenuItemIcon
