import type { StoryFn } from '@storybook/react'

import {
	PasswordStrength as PasswordStrengthComponent,
	type PasswordStrengthProps
} from './index'

export default {
	component: PasswordStrengthComponent
}

export const PasswordStrength: StoryFn<PasswordStrengthProps> = (
	args: PasswordStrengthProps
) => {
	return <PasswordStrengthComponent {...args} />
}
