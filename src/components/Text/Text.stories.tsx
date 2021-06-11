import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import { ComponentSizeSmallMediumLargeValues } from '../../types/ComponentSize'
import { argTypes } from '../common/Text/stories'
import TextComponent, { TextProps } from '.'

export default {
	title: 'components / Text',
	component: TextComponent,
	argTypes: {
		...argTypes,
		size: {
			control: 'radio',
			options: ComponentSizeSmallMediumLargeValues,
			defaultValue: 'medium'
		}
	}
}

export const Text: Story<PropsWithChildren<TextProps>> = (args) => {
	return <TextComponent {...args} />
}

Text.args = {
	children: 'One line text'
}
