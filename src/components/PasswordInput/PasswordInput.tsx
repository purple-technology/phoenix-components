import React, { forwardRef, useState } from 'react'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { TextInput, TextInputProps } from '../TextInput'
import { IconContainer } from './PasswordInput.styles'

export type PasswordInputProps = Omit<TextInputProps, 'type' | 'contentRight'>

/**
 * `PasswordInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export const PasswordInput: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<PasswordInputProps> &
		React.RefAttributes<HTMLInputElement>
> = forwardRef(function PasswordInput(
	{ testId = 'PasswordInput', size = 'md', ...props },
	ref
) {
	const [isVisible, setVisible] = useState(false)

	return (
		<TextInput
			{...props}
			testId={testId}
			size={size}
			type={isVisible ? 'text' : 'password'}
			contentRight={
				<Flex height="100%" alignItems="center">
					<IconContainer onClick={(): void => setVisible(!isVisible)}>
						<Icon
							icon={isVisible ? 'eye' : 'eye-hidden'}
							size={size === 'lg' ? 'lg' : 'md'}
							color="tertiary"
						/>
					</IconContainer>
				</Flex>
			}
			ref={ref}
		/>
	)
})
