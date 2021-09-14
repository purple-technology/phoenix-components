import React, { useEffect, useState } from 'react'

import { StyledIndicator } from './ActiveTabIndicatorStyles'
import { TabFunctionProps } from './Tab'

interface ActiveTabIndicatorProps {
	tabs: React.ReactNode
	tabRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>
	selectedIndex?: number
}

const ActiveTabIndicator: React.FC<ActiveTabIndicatorProps> = ({
	tabs,
	tabRefs,
	selectedIndex
}) => {
	const [activeTabIndicatorOffsetLeft, setActiveTabIndicatorOffsetLeft] =
		useState(0)
	const [activeTabIndicatorWidth, setActiveTabIndicatorWidth] = useState(0)

	useEffect(() => {
		let tabIndex = 0
		React.Children.forEach(tabs, (tab) => {
			if (
				React.isValidElement(tab) &&
				(tab.type as TabFunctionProps)?.tabsRole === 'Tab'
			) {
				const el = tabRefs.current[tabIndex]
				if (el && (tab.props.selected || selectedIndex === tabIndex)) {
					const elComputedStyle = getComputedStyle(el)
					const width =
						el.clientWidth -
						parseFloat(elComputedStyle.paddingLeft) -
						parseFloat(elComputedStyle.paddingRight)
					setActiveTabIndicatorWidth(width)
					setActiveTabIndicatorOffsetLeft(el?.offsetLeft ?? 0)
				}
				tabIndex++
			}
		})
	}, [selectedIndex])

	return (
		<StyledIndicator
			style={{
				transform: `translateX(${activeTabIndicatorOffsetLeft}px)`,
				width: `${activeTabIndicatorWidth}px`
			}}
			animate={typeof selectedIndex !== 'undefined'}
		/>
	)
}

export default ActiveTabIndicator
