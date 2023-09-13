import { StoryFn } from '@storybook/react'
import React from 'react'

import {
	PasswordStrength as PasswordStrengthComponent,
	PasswordStrengthProps
} from './index'

export default {
	component: PasswordStrengthComponent
}

export const PasswordStrength: StoryFn<PasswordStrengthProps> = (
	args: PasswordStrengthProps
) => {
	return <PasswordStrengthComponent {...args} />
}
