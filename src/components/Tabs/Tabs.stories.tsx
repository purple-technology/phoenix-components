import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { TabPanel } from 'react-tabs'

import { Spacer } from '../Spacer'
import { Tabs } from '.'
import { Tab } from './Tab'
import { TabList } from './TabList'

export default {
	component: Tabs,
	title: 'components / Tabs'
} as ComponentMeta<typeof Tabs>

export const Default: ComponentStory<typeof Tabs> = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<Tabs onSelect={setSelectedIndex} selectedIndex={selectedIndex}>
			<TabList>
				<Tab>Reward store</Tab>
				<Tab>Your orders</Tab>
				<Tab disabled>Points history</Tab>
				<Tab>How it works</Tab>
			</TabList>
			<Spacer h="l" />
			<TabPanel>Reward store content</TabPanel>
			<TabPanel>Your orders content</TabPanel>
			<TabPanel>Points history content</TabPanel>
			<TabPanel>How it works content</TabPanel>
		</Tabs>
	)
}

export const StaticTabList: ComponentStory<typeof Tabs> = () => {
	return (
		<TabList animate={false}>
			<Tab href="#TODO">Reward store</Tab>
			<Tab onClick={(): void => console.log('click')} selected>
				Your orders
			</Tab>
			<Tab disabled>Points history</Tab>
			<Tab href="#TODO" target="_blank">
				How it works
			</Tab>
		</TabList>
	)
}
StaticTabList.storyName = 'StaticTabList'
