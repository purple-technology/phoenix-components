import * as React from 'react'

interface UseCollapsible {
	ref: (ref: HTMLDivElement | null) => void
	height: string
	onTransitionEnd: () => void
	visibility: string
}

export const useCollapsible = (collapsed: boolean): UseCollapsible => {
	const [clientHeight, setClientHeight] = React.useState<string>('auto')
	const [visibility, setVisibility] = React.useState(
		collapsed ? 'hidden' : 'visible'
	)

	React.useEffect(() => {
		if (!collapsed) {
			setVisibility('visible')
		}
	}, [collapsed])

	const ref = React.useCallback((ref: HTMLDivElement | null) => {
		if (ref != null) {
			setClientHeight(`${ref.clientHeight}px`)
		}
	}, [])

	const onTransitionEnd = (): void => {
		if (collapsed) {
			setVisibility('hidden')
		}
	}

	const height = collapsed ? '0px' : clientHeight

	return { ref, height, onTransitionEnd, visibility }
}
