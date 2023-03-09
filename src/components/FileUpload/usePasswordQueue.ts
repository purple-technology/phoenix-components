import { useState } from 'react'

export interface PasswordQueue {
	add(item: PasswordQueueItem): void
	editCurrentItem(item: PasswordQueueItem): void
	currentItem: PasswordQueueItem | null
	setAttr(attr: PasswordQueueItem): void
	remove(): void
	removeAll(): void
}

export interface PasswordQueueItem {
	callback?: (password: string) => void
	password?: string
	incorrect?: boolean
	filename?: string
}

export const usePasswordQueue = (): PasswordQueue => {
	const [passwordModalQueue, setPasswordModalQueue] = useState<
		PasswordQueueItem[]
	>([])

	const add = (item: PasswordQueueItem): void => {
		setPasswordModalQueue((queue) => [...queue, item])
	}

	const editCurrentItem = (item: PasswordQueueItem): void => {
		setPasswordModalQueue((queue) => {
			return [
				{
					...queue[0],
					...item
				},
				...queue.slice(1)
			]
		})
	}

	const currentItem =
		passwordModalQueue.length > 0 ? passwordModalQueue[0] : null

	const setAttr = (item: PasswordQueueItem): void => {
		setPasswordModalQueue([
			{
				...passwordModalQueue[0],
				...item
			},
			...passwordModalQueue.slice(1)
		])
	}

	const remove = (): void => setPasswordModalQueue(passwordModalQueue.slice(1))

	const removeAll = (): void => setPasswordModalQueue([])

	return {
		add,
		editCurrentItem,
		currentItem,
		setAttr,
		remove,
		removeAll
	}
}
