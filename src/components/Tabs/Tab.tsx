import React, { forwardRef } from 'react'
import { Tab as ReactTabsTab } from 'react-tabs'

import { StyledLink } from './TabStyles'

export interface TabProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'tabIndex'> {
	animate?: boolean
	selected?: boolean
	disabled?: boolean
	disabledClassName?: string
	selectedClassName?: string
	tabIndex?: string
	id?: string
}

export type TabFunctionProps = React.ForwardRefExoticComponent<TabProps> & {
	tabsRole?: 'Tab'
} & React.RefAttributes<HTMLAnchorElement>

export const Tab: TabFunctionProps = forwardRef<HTMLAnchorElement, TabProps>(
	function Tab(
		{ disabled, disabledClassName, selectedClassName, tabIndex, id, ...props },
		ref
	) {
		return (
			<ReactTabsTab
				disabled={disabled}
				disabledClassName={disabledClassName}
				selectedClassName={selectedClassName}
				tabIndex={tabIndex}
				selected={props.selected}
				id={id}
			>
				<StyledLink disabled={disabled} ref={ref} {...props} />
			</ReactTabsTab>
		)
	}
)

Tab.tabsRole = 'Tab'
