import { Story } from '@storybook/react'
import React from 'react'

import iconDeposit from '../../icons/deposit.svg'
import iconTransfer from '../../icons/transfer.svg'
import iconWithdraw from '../../icons/withdraw.svg'
import { ComponentSize } from '../../types/ComponentSize'
import Button from '../Button'
import ButtonGroupComponent, { ButtonGroupProps } from './index'

export default {
	title: 'components / ButtonGroup',
	component: ButtonGroupComponent,
	argTypes: {
		size: {
			control: 'radio',
			options: ['small', 'medium', 'large']
		}
	}
}

interface ButtonGroupStoryProps extends ButtonGroupProps {
	size: ComponentSize
}

export const ButtonGroup: Story<ButtonGroupStoryProps> = (args) => (
	<ButtonGroupComponent {...args}>
		<Button size={args.size} colorTheme={'success'} icon={iconDeposit}>
			Deposit
		</Button>
		<Button size={args.size} icon={iconWithdraw} minimal>
			Withdraw
		</Button>
		<Button size={args.size} icon={iconTransfer} minimal>
			Transfer
		</Button>
	</ButtonGroupComponent>
)

ButtonGroup.args = {
	size: 'medium'
}

ButtonGroup.storyName = 'ButtonGroup'
