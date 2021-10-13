import 'tippy.js/dist/tippy.css'

import { TippyProps } from '@tippyjs/react'
import React from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledTippy } from './TooltipStyles'

export type TooltipProps = Omit<TippyProps, 'theme'> & GenericComponentProps

/**
 * Props that can be used are described here https://github.com/atomiks/tippyjs-react#-props.
 */
export const Tooltip: React.FC<TooltipProps> = ({
	testId = 'Tooltip',
	onCreate,
	...props
}) => {
	return (
		<StyledTippy
			onCreate={(instance): void => {
				instance.popper.dataset.testid = testId
				if (onCreate) onCreate(instance)
			}}
			maxWidth={300}
			{...props}
		/>
	)
}
