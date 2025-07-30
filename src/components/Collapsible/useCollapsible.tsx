import * as React from 'react'

import { useCollapsibleReducer } from './useCollapsibleReducer'

interface UseCollapsible {
	ref: React.RefObject<HTMLDivElement | null>
	height: string
	onTransitionEnd: () => void
	visibility: string
	overflow: string
}

export const useCollapsible = (collapsed: boolean): UseCollapsible => {
	const hasMountedRef = React.useRef(false)
	const animationFrameRef = React.useRef<number>(0)
	const ref = React.useRef<HTMLDivElement>(null)
	const [state, dispatch] = useCollapsibleReducer(collapsed, ref)

	React.useLayoutEffect(() => {
		if (ref.current == null) return

		if (!hasMountedRef.current) {
			hasMountedRef.current = true
			return
		}

		animationFrameRef.current = requestAnimationFrame(() => {
			dispatch({ type: 'start' })

			if (collapsed) {
				animationFrameRef.current = requestAnimationFrame(() => {
					dispatch({ type: 'collapsing' })
				})
			}
		})

		return (): void => {
			if (animationFrameRef.current == null) return
			cancelAnimationFrame(animationFrameRef.current)
		}
	}, [collapsed, dispatch])

	const onTransitionEnd = React.useCallback((): void => {
		dispatch({ type: 'end' })
	}, [dispatch])

	return {
		ref,
		height: state.height,
		onTransitionEnd,
		visibility: state.visibility,
		overflow: state.overflow
	}
}
