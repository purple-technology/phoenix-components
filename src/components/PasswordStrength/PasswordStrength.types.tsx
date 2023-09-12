export enum PasswordStrengthEnum {
	NONE = 'none',
	WEAK = 'weak',
	FAIR = 'fair',
	GOOD = 'good',
	EXCELLENT = 'excellent'
}

export interface PasswordResult {
	strength: PasswordStrengthEnum
	textColor: string
	progressBarColor: string
	progressBarValue: number
}
