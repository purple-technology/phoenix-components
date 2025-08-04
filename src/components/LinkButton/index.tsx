import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ButtonInner, { CommonButtonProps } from '../common/Button'
import { LinkButtonWrapper } from '../common/Button/ButtonStyles'

export interface LinkButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		CommonButtonProps,
		GenericComponentProps {
	/** @deprecated Secondary style button. Please use current prop "secondary" instead. This prop will be removed in next major version. */
	light?: boolean
	/** Reference to the anchor element */
	ref?: React.Ref<HTMLAnchorElement>
}

/**
 * `LinkButton` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.
 */
export function LinkButton({
	colorTheme = 'brand',
	size = 'md',
	iconAlignment = 'left',
	testId = 'LinkButton',
	secondary,
	light,
	icon,
	loading,
	children,
	ref,
	...props
}: LinkButtonProps): React.JSX.Element {
	const secondaryStyle = secondary ?? light

	const wrapperProps = {
		...props,
		size,
		colorTheme,
		secondary: secondaryStyle,
		icon
	}

	return (
		<LinkButtonWrapper ref={ref} data-testid={testId} {...wrapperProps}>
			<ButtonInner
				loading={loading}
				size={size}
				colorTheme={colorTheme}
				secondary={secondaryStyle}
				icon={icon}
				iconAlignment={iconAlignment}
			>
				{children}
			</ButtonInner>
		</LinkButtonWrapper>
	)
}
