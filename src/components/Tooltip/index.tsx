import 'tippy.js/dist/tippy.css'

import { TippyProps } from '@tippyjs/react'
import React from 'react'

import { StyledTippy } from './TooltipStyles'

export type TooltipProps = Omit<TippyProps, 'theme'>

/**
 * Props that can be used are described here https://github.com/atomiks/tippyjs-react#-props.
 */
export const Tooltip: React.FC<TooltipProps> = (props) => {
	return <StyledTippy maxWidth={300} {...props} />
}
