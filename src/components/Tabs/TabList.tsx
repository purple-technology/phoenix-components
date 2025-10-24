import React, { type PropsWithChildren, useRef, useState } from 'react'

import type { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ActiveTabIndicator from './ActiveTabIndicator'
import type { TabFunctionProps, TabProps } from './Tab'
import { StyledTabList } from './TabStyles'
import type { TabListCommonProps } from './types'

export type TabListProps = GenericComponentProps & TabListCommonProps

export const TabList: React.FC<PropsWithChildren<TabListProps>> & {
	tabsRole: 'TabList'
} = ({
	animate = true,
	testId = 'TabList',
	size = 'sm',
	children,
	...props
}) => {
	const tabRefs = useRef<Array<HTMLAnchorElement | null>>([])
	const [selectedIndex, setSelectedIndex] = useState<number>()

	let tabIndex = 0

	return (
		<StyledTabList data-testid={testId} {...props}>
			{animate && (
				<ActiveTabIndicator
					tabs={children}
					tabRefs={tabRefs}
					selectedIndex={selectedIndex}
					size={size}
				/>
			)}
			{React.Children.map(children, (tab) => {
				const typedTab = tab as React.ReactElement<TabProps>

				if (
					React.isValidElement(tab) &&
					(tab.type as TabFunctionProps)?.tabsRole === 'Tab'
				) {
					const localTabIndex = tabIndex++
					if (typedTab.props.selected && selectedIndex !== localTabIndex) {
						setSelectedIndex(localTabIndex)
					}
					return React.cloneElement(typedTab, {
						...typedTab.props,
						ref: (el: HTMLAnchorElement): void => {
							tabRefs.current[localTabIndex] = el
						},
						size,
						animate
					})
				}
				return tab
			})}
		</StyledTabList>
	)
}

TabList.tabsRole = 'TabList'
