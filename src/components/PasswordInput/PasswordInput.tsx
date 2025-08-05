import React, { ReactNode, useState } from 'react'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { TextInput, TextInputProps } from '../TextInput'
import { IconContainer } from './PasswordInput.styles'

export interface PasswordInputProps
	extends Omit<TextInputProps, 'type' | 'contentRight'> {
	ref?: React.Ref<HTMLInputElement>
}

/**
 * `PasswordInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.
 */
export function PasswordInput({
	testId = 'PasswordInput',
	size = 'md',
	ref,
	...props
}: PasswordInputProps): ReactNode {
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
}
