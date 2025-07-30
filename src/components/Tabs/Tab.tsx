import React from 'react'
import { Tab as ReactTabsTab } from 'react-tabs'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import { StyledLink } from './TabStyles'
import { TabCommonProps } from './types'

export interface TabProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'tabIndex'>,
		GenericComponentProps,
		TabCommonProps {
	disabledClassName?: string
	selectedClassName?: string
	tabIndex?: string
	id?: string
	ref?: React.Ref<HTMLAnchorElement> // Add ref as a prop
}

export type TabFunctionProps = React.FC<TabProps> & {
	tabsRole?: 'Tab'
}

export const Tab: TabFunctionProps = ({
	disabledClassName,
	selectedClassName,
	tabIndex,
	id,
	testId = 'Tab',
	ref, // Accept ref as a prop
	...props
}) => {
	return (
		<ReactTabsTab
			disabled={props.disabled}
			disabledClassName={disabledClassName}
			selectedClassName={selectedClassName}
			tabIndex={tabIndex}
			selected={props.selected}
			id={id}
		>
			<StyledLink ref={ref} data-testid={testId} {...props} />
		</ReactTabsTab>
	)
}

Tab.tabsRole = 'Tab'
