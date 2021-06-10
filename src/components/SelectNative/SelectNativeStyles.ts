import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { getHoverFieldsetStyles } from '../common/FormControl/FormControlStyles'

interface StyledAngleDownProps {
	$RTL?: boolean
	disabled?: boolean
}

export const StyledAngleDown = styled(SVG)<StyledAngleDownProps>`
	${({ theme, $RTL }): string =>
		$RTL
			? `left: ${theme.$pc.formControl.paddingX}px;`
			: `right: ${theme.$pc.formControl.paddingX}px;`}
	position: absolute;
	width: 10px;
	height: 6px;
	top: 0;
	bottom: 0;
	margin: auto;
	pointer-events: none;
	${({ disabled, theme }): string =>
		disabled
			? `
			path {
				fill: ${theme.$pc.colors.textDisabled};
			}
		`
			: ''}
`

interface StyledSelectNativeWrapperProps {
	focused?: boolean
	disabled?: boolean
}

export const StyledSelectNativeWrapper = styled.div.attrs({
	className: 'select-native-wrapper'
})<StyledSelectNativeWrapperProps>`
	position: relative;
	width: 100%;
	${(props): string =>
		getHoverFieldsetStyles(props.theme, props.focused, props.disabled)}
`
