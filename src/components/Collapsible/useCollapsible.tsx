import * as React from 'react'

interface UseCollapsible {
	ref: (ref: HTMLDivElement | null) => void
	height: string
	onTransitionEnd: () => void
	visibility: string
	overflow: string
}

export const useCollapsible = (collapsed: boolean): UseCollapsible => {
	const [scrollHeight, setScrollHeight] = React.useState<string>()
	const [visibility, setVisibility] = React.useState(
		collapsed ? 'hidden' : 'visible'
	)
	const [height, setHeight] = React.useState(collapsed ? '0px' : 'auto')
	const [overflow, setOverflow] = React.useState(
		collapsed ? 'hidden' : 'visible'
	)
	const hasMountedRef = React.useRef(false)
	const animationFrameRef = React.useRef<number>()

	React.useEffect(() => {
		if (scrollHeight == null) return

		if (!hasMountedRef.current) {
			hasMountedRef.current = true
			return
		}

		setOverflow('hidden')
		setVisibility('visible')
		setHeight(scrollHeight)
	}, [collapsed, scrollHeight])

	React.useEffect(() => {
		if (scrollHeight == null) return

		if (collapsed && height === scrollHeight) {
			animationFrameRef.current = requestAnimationFrame(() => {
				setHeight('0px')
			})
		}

		return (): void => {
			if (animationFrameRef.current == null) return
			cancelAnimationFrame(animationFrameRef.current)
		}
	}, [collapsed, height, scrollHeight])

	const ref = React.useCallback((ref: HTMLDivElement | null) => {
		if (ref != null) {
			setScrollHeight(`${ref.scrollHeight}px`)
		}
	}, [])

	const onTransitionEnd = (): void => {
		if (collapsed) {
			setVisibility('hidden')
		} else {
			setHeight('auto')
			setOverflow('visible')
		}
	}

	return { ref, height, onTransitionEnd, visibility, overflow }
}
