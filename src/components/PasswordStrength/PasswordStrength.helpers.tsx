import { DefaultTheme } from 'styled-components'
import zxcvbn from 'zxcvbn'

import { ColorTheme } from '../../types/Color'
import { PasswordStrengthEnum } from './PasswordStrength.types'

const getPasswordStrengthProps = (
	password: string
): [PasswordStrengthEnum, ColorTheme, number] => {
	let strength: PasswordStrengthEnum
	let colorTheme: ColorTheme
	let progressBarValue: number

	const result = zxcvbn(password)

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

	return [strength, colorTheme, progressBarValue]
}

export const processPassword = (
	theme: DefaultTheme,
	password?: string
): [PasswordStrengthEnum, string, string | undefined, number] => {
	if (!password) {
		return [
			PasswordStrengthEnum.NONE,
			theme.tokens.color.text.primary,
			theme.tokens.color.background.error.primary,
			0
		]
	}

	const [strength, colorTheme, progressBarValue] =
		getPasswordStrengthProps(password)

	return [
		strength,
		theme.tokens.color.text[colorTheme].primary,
		theme.tokens.color.background[colorTheme].primary,
		progressBarValue
	]
}
