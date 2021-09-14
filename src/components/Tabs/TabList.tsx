import React, { useRef, useState } from 'react'

import ActiveTabIndicator from './ActiveTabIndicator'
import { TabFunctionProps } from './Tab'
import { StyledTabList } from './TabStyles'

export interface TabListProps {
	className?: string
	animate?: boolean
}

export const TabList: React.FC<TabListProps> & { tabsRole: 'TabList' } = ({
	animate = true,
	children,
	...props
}) => {
	const tabRefs = useRef<Array<HTMLAnchorElement | null>>([])
	const [selectedIndex, setSelectedIndex] = useState<number>()

	let tabIndex = 0

	return (
		<StyledTabList {...props}>
			{animate && (
				<ActiveTabIndicator
					tabs={children}
					tabRefs={tabRefs}
					selectedIndex={selectedIndex}
				/>
			)}
			{React.Children.map(children, (tab) => {
				if (
					React.isValidElement(tab) &&
					(tab.type as TabFunctionProps)?.tabsRole === 'Tab'
				) {
					const localTabIndex = tabIndex++
					if (tab.props.selected && selectedIndex !== localTabIndex) {
						setSelectedIndex(localTabIndex)
					}
					return React.cloneElement(tab, {
						...tab.props,
						ref: (el: HTMLAnchorElement): void => {
							tabRefs.current[localTabIndex] = el
						},
						animate
					})
				}
				return tab
			})}
		</StyledTabList>
	)
}

TabList.tabsRole = 'TabList'
