import { Story } from '@storybook/react'
import React from 'react'

import { ComponentSize } from '../../enum/ComponentSize'
import iconDeposit from '../../icons/deposit.svg'
import iconTransfer from '../../icons/transfer.svg'
import iconWithdraw from '../../icons/withdraw.svg'
import { ColorTheme } from '../../theme/ColorTheme'
import Button from '../Button'
import ButtonGroupComponent, { ButtonGroupProps } from './index'

export default {
	title: 'components / ButtonGroup',
	component: ButtonGroupComponent,
	argTypes: {
		componentSize: {
			control: 'radio',
			options: ['small', 'medium', 'large']
		}
	}
}

interface ButtonGroupStoryProps extends ButtonGroupProps {
	componentSize: ComponentSize
}

export const ButtonGroup: Story<ButtonGroupStoryProps> = (args) => (
	<ButtonGroupComponent {...args}>
		<Button
			componentSize={args.componentSize}
			colorTheme={ColorTheme.SUCCESS}
			icon={iconDeposit}
		>
			Deposit
		</Button>
		<Button componentSize={args.componentSize} icon={iconWithdraw} minimal>
			Withdraw
		</Button>
		<Button componentSize={args.componentSize} icon={iconTransfer} minimal>
			Transfer
		</Button>
	</ButtonGroupComponent>
)

ButtonGroup.args = {
	componentSize: ComponentSize.MEDIUM
}

ButtonGroup.storyName = 'ButtonGroup'
