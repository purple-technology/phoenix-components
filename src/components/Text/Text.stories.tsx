import React, { Story } from '@storybook/react'
import { PropsWithChildren } from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLargeValues
} from '../../enum/ComponentSize'
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
			defaultValue: ComponentSize.MEDIUM
		}
	}
}

export const Text: Story<PropsWithChildren<TextProps>> = (args) => {
	return <TextComponent {...args} />
}

Text.args = {
	children: 'One line text'
}
