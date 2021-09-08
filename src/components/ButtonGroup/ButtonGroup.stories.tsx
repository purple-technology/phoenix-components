import { Story } from '@storybook/react'
import React from 'react'

import {
	ComponentSize,
	ComponentSizeSmallMediumLarge
} from '../../types/ComponentSize'
import { Button } from '../Button'
import { ButtonGroup as ButtonGroupComponent, ButtonGroupProps } from './index'

export default {
	title: 'components / ButtonGroup',
	component: ButtonGroupComponent,
	argTypes: {
		size: {
			control: 'radio',
			options: ComponentSizeSmallMediumLarge
		}
	}
}

interface ButtonGroupStoryProps extends ButtonGroupProps {
	size: ComponentSize
}

export const ButtonGroup: Story<ButtonGroupStoryProps> = (args) => (
	<ButtonGroupComponent {...args}>
		<Button size={args.size} colorTheme={'success'} icon="deposit" mr="m">
			Deposit
		</Button>
		<Button size={args.size} icon="withdrawal" minimal>
			Withdraw
		</Button>
		<Button size={args.size} icon="transfer" minimal>
			Transfer
		</Button>
	</ButtonGroupComponent>
)

ButtonGroup.args = {
	size: 'medium'
}

ButtonGroup.storyName = 'ButtonGroup'
