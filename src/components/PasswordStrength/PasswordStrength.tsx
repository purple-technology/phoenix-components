import React, { useMemo } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { Flex } from '../Flex'
import { ProgressBar } from '../ProgressBar'
import { Text } from '../Text'
import { ProgressBarContainer } from './PasswordStrength.styles'
import { PasswordStrengthEnum } from './PasswordStrength.types'
import { usePasswordStrength } from './usePasswordStrength'

export interface PasswordStrengthProps
	extends GenericComponentProps,
		MarginProps,
		PaddingProps {
	password?: string
	labelText?: string
	strengthText?: {
		[PasswordStrengthEnum.NONE]?: string
		[PasswordStrengthEnum.WEAK]?: string
		[PasswordStrengthEnum.FAIR]?: string
		[PasswordStrengthEnum.GOOD]?: string
		[PasswordStrengthEnum.EXCELLENT]?: string
	}
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
	testId = 'PasswordStrength',
	password,
	labelText = 'Password strength',
	strengthText: _strengthText,
	...props
}) => {
	const strengthText = useMemo(
		() =>
			Object.assign(
				{
					[PasswordStrengthEnum.NONE]: 'None',
					[PasswordStrengthEnum.WEAK]: 'Weak',
					[PasswordStrengthEnum.FAIR]: 'Fair',
					[PasswordStrengthEnum.GOOD]: 'Good',
					[PasswordStrengthEnum.EXCELLENT]: 'Excellent'
				},
				_strengthText
			),
		[_strengthText]
	)

	const { strength, textColor, progressBarColor, progressBarValue } =
		usePasswordStrength(password)

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			data-testid={testId}
			width="100%"
			{...props}
		>
			<Flex flexWrap="wrap">
				<Text element="span" pr="2xs">
					{labelText}
				</Text>
				<Text element="span" color={textColor} bold pr="2xs">
					{strengthText[strength]}
				</Text>
			</Flex>
			<ProgressBarContainer>
				<ProgressBar value={progressBarValue} color={progressBarColor} />
			</ProgressBarContainer>
		</Flex>
	)
}
