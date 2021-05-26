import React from 'react'

import ButtonGroupComponent, { ButtonGroupProps } from './index'
import Button from '../Button'
import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'
import iconDeposit from '../../icons/deposit.svg'
import iconWithdraw from '../../icons/withdraw.svg'
import iconTransfer from '../../icons/transfer.svg'

export default {
	title: 'components / ButtonGroup',
	component: ButtonGroupComponent
}

interface ButtonGroupStoryProps extends ButtonGroupProps {
	componentSize: ComponentSize
}

export const ButtonGroup = (args: ButtonGroupStoryProps) => (
	<ButtonGroupComponent {...args}>
		{/*<Button componentSize={ComponentSize.SMALL}>Upgrade account</Button>*/}
		<Button
			componentSize={args.componentSize}
			colorTheme={ColorTheme.SUCCESS}
			icon={iconDeposit}
		>
			Deposit
		</Button>
		{/*<Button*/}
		{/*	componentSize={args.componentSize}*/}
		{/*	colorTheme={ColorTheme.SUCCESS}*/}
		{/*>*/}
		{/*	Deposit*/}
		{/*</Button>*/}
		<Button componentSize={args.componentSize} icon={iconWithdraw} minimal>
			Withdraw
		</Button>
		<Button componentSize={args.componentSize} icon={iconTransfer} minimal>
			Transfer
		</Button>
	</ButtonGroupComponent>
)

ButtonGroup.args = {
	componentSize: ComponentSize.SMALL
}
