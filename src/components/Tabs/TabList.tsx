import React, { useRef, useState } from 'react'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import ActiveTabIndicator from './ActiveTabIndicator'
import { TabFunctionProps } from './Tab'
import { StyledTabList } from './TabStyles'
import { TabListCommonProps } from './types'

export type TabListProps = GenericComponentProps & TabListCommonProps

export const TabList: React.FC<TabListProps> & { tabsRole: 'TabList' } = ({
	animate = true,
	testId = 'TabList',
	size = 'medium',
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
