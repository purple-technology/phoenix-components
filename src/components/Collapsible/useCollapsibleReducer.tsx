import * as React from 'react'

type CollapsibleAction =
	| { type: 'start' }
	| { type: 'collapsing' }
	| { type: 'end' }

interface CollapsibleState {
	visibility: string
	height: string
	overflow: string
}

export const useCollapsibleReducer = (
	collapsed: boolean,
	ref: React.RefObject<HTMLDivElement | null>
): [state: CollapsibleState, dispatch: React.Dispatch<CollapsibleAction>] => {
	const collapsibleReducer = (
		state: CollapsibleState,
		action: CollapsibleAction
	): CollapsibleState => {
		switch (action.type) {
			case 'start':
				return {
					...state,
					overflow: 'hidden',
					visibility: 'visible',
					height: `${ref.current?.scrollHeight}px`
				}
			case 'collapsing':
				return {
					...state,
					height: '0px'
				}
			case 'end':
				return {
					...state,
					visibility: collapsed ? 'hidden' : 'visible',
					height: collapsed ? '0px' : 'auto',
					overflow: collapsed ? 'hidden' : 'visible'
				}
		}
	}
	const initialState = {
		visibility: collapsed ? 'hidden' : 'visible',
		height: collapsed ? '0px' : 'auto',
		overflow: collapsed ? 'hidden' : 'visible'
	}
	return React.useReducer(collapsibleReducer, initialState)
}
