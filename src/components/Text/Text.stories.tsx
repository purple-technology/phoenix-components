import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { ComponentSizeSmallMediumLarge } from '../../types/ComponentSize'
import { argTypes } from '../common/Text/stories'
import { Text as TextComponent, TextProps } from '.'

export default {
	title: 'components / Text',
	component: TextComponent,
	argTypes: {
		...argTypes,
		size: {
			control: 'radio',
			options: ComponentSizeSmallMediumLarge,
			defaultValue: 'medium'
		}
	},
	parameters: {
		componentSubtitle: 'One line text (ending with ellipsis if it overflows)'
	}
}

export const Text: Story<PropsWithChildren<TextProps>> = (args) => {
	return <TextComponent {...args} />
}

Text.args = {
	children: 'One line text'
}
