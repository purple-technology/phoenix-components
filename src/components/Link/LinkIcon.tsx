import React from 'react'
import styled from 'styled-components'

import { IconAlignment } from '../../types/IconAlignment'
import { IconType } from '../../types/IconType'
import { PhoenixIconsOutlined } from '../../types/PhoenixIcons'
import { StyledCustomIcon, StyledIcon, styledIconCss } from './LinkStyles'

interface IconProps {
	icon?: IconType
	iconAlignment?: IconAlignment
}

const LinkIcon: React.FC<IconProps> = (props) => {
	if (!props.icon || !props.iconAlignment) {
		return null
	}

	if (PhoenixIconsOutlined.includes(props.icon as PhoenixIconsOutlined)) {
		return (
			<StyledIcon
				icon={props.icon as PhoenixIconsOutlined}
				$iconAlignment={props.iconAlignment}
			/>
		)
	}

	if (typeof props.icon === 'string') {
		return (
			<StyledCustomIcon src={props.icon} $iconAlignment={props.iconAlignment} />
		)
	}

	const StyledCustomElement = styled(props.icon)`
		${styledIconCss}
	`

	return <StyledCustomElement $iconAlignment={props.iconAlignment} />
}

export default LinkIcon
