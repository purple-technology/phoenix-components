import React, { PropsWithChildren } from 'react'

import ClosableButtonComponent, { ClosableButtonProps } from './index'

export default {
	title: 'components / ClosableButton',
	component: ClosableButtonComponent
}

export const ClosableButton: React.FC<PropsWithChildren<ClosableButtonProps>> =
	(args) => (
		<ClosableButtonComponent {...args}>
			Status is In progress
		</ClosableButtonComponent>
	)
