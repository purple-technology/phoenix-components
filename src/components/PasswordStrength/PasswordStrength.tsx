import React from 'react'
import { useTheme } from 'styled-components'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { MarginProps } from '../common/Spacing/MarginProps'
import { PaddingProps } from '../common/Spacing/PaddingProps'
import { Flex } from '../Flex'
import { ProgressBar } from '../ProgressBar'
import { Text } from '../Text'
import { processPassword } from './PasswordStrength.helpers'
import { ProgressBarContainer } from './PasswordStrength.styles'
import { PasswordStrengthEnum } from './PasswordStrength.types'

export interface PasswordStrengthProps
	extends GenericComponentProps,
		MarginProps,
		PaddingProps {
	password?: string
	labelText?: string
	strengthText?: {
		[PasswordStrengthEnum.NONE]: string
		[PasswordStrengthEnum.WEAK]: string
		[PasswordStrengthEnum.FAIR]: string
		[PasswordStrengthEnum.GOOD]: string
		[PasswordStrengthEnum.EXCELLENT]: string
	}
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
	testId = 'PasswordStrength',
	password,
	labelText = 'Password strength',
	strengthText = {
		[PasswordStrengthEnum.NONE]: 'None',
		[PasswordStrengthEnum.WEAK]: 'Weak',
		[PasswordStrengthEnum.FAIR]: 'Fair',
		[PasswordStrengthEnum.GOOD]: 'Good',
		[PasswordStrengthEnum.EXCELLENT]: 'Excellent'
	},
	...props
}) => {
	const theme = useTheme()

	const [strength, textColor, progressBarColor, progressBarValue] =
		processPassword(theme, password)

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			data-testid={testId}
			{...props}
		>
			<Flex flexWrap="wrap">
				<Text element="span" pr="2xs">
					{labelText}:
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
