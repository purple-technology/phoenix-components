import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import type { ColorTheme } from '../../types/Color'
import {
	type PasswordResult,
	PasswordStrengthEnum
} from './PasswordStrength.types'

const processPassword = async (
	password: string
): Promise<{
	strength: PasswordStrengthEnum
	colorTheme: ColorTheme
	progressBarValue: number
}> => {
	let strength: PasswordStrengthEnum
	let colorTheme: ColorTheme
	let progressBarValue: number

	const result = await import('zxcvbn').then((zxcvbn) =>
		zxcvbn.default(password)
	)

	switch (result.score) {
		case 4:
			strength = PasswordStrengthEnum.EXCELLENT
			colorTheme = 'success'
			progressBarValue = 100
			break
		case 3:
			strength = PasswordStrengthEnum.GOOD
			colorTheme = 'success'
			progressBarValue = 75
			break
		case 2:
			strength = PasswordStrengthEnum.FAIR
			colorTheme = 'warning'
			progressBarValue = 50
			break
		default:
			strength = PasswordStrengthEnum.WEAK
			colorTheme = 'error'
			progressBarValue = 25
	}

	return { strength, colorTheme, progressBarValue }
}

export const usePasswordStrength = (password?: string): PasswordResult => {
	const theme = useTheme()

	const defaultProps = useMemo(
		() => ({
			strength: PasswordStrengthEnum.NONE,
			textColor: theme.tokens.color.text.primary,
			progressBarColor: theme.tokens.color.background.error.primary,
			progressBarValue: 0
		}),
		[theme]
	)

	const [passwordProps, setPasswordProps] =
		useState<PasswordResult>(defaultProps)

	useEffect(() => {
		if (!password) {
			return setPasswordProps(defaultProps)
		}

		;(async (): Promise<void> => {
			const { colorTheme, ...props } = await processPassword(password)
			setPasswordProps({
				textColor: theme.tokens.color.text[colorTheme].primary,
				progressBarColor: theme.tokens.color.background[colorTheme].primary,
				...props
			})
		})()
	}, [theme, password, defaultProps])

	return passwordProps
}
