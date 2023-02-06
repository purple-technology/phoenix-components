import { Story } from '@storybook/react'
import React from 'react'

import { Sizing } from '../../types/Sizing'
import { Button } from '../Button'
import { ButtonGroup as ButtonGroupComponent, ButtonGroupProps } from './index'

export default {
	title: 'components / ButtonGroup',
	component: ButtonGroupComponent,
	argTypes: {
		size: {
			control: 'radio',
			options: Sizing
		}
	}
}

interface ButtonGroupStoryProps extends ButtonGroupProps {
	size: Sizing
}

export const ButtonGroup: Story<ButtonGroupStoryProps> = (args) => (
	<ButtonGroupComponent {...args}>
		<Button size={args.size} colorTheme={'success'} icon="deposit" mr="2xs">
			Deposit
		</Button>
		<Button
			size={args.size}
			icon="withdrawal"
			minimal
			colorTheme="neutral"
			mr="2xs"
		>
			Withdraw
		</Button>
		<Button size={args.size} icon="transfer" minimal colorTheme="neutral">
			Transfer
		</Button>
	</ButtonGroupComponent>
)

ButtonGroup.args = {
	size: 'md'
}

ButtonGroup.storyName = 'ButtonGroup'
