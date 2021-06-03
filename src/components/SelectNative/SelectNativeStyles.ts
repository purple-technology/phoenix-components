import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import {
	getHoverFieldsetStyles,
	INPUT_PADDING_X
} from '../common/FormControl/FormControlStyles'

interface StyledAngleDownProps {
	RTL?: boolean
	success?: boolean
	disabled?: boolean
}

export const StyledAngleDown = styled(SVG)<StyledAngleDownProps>`
	${({ RTL }): string =>
		RTL ? `left: ${INPUT_PADDING_X}px;` : `right: ${INPUT_PADDING_X}px;`}
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
				fill: ${theme.colors.textDisabled};
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
