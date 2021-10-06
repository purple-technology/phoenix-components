import * as React from 'react'

interface UseCollapsible {
	ref: React.RefObject<HTMLDivElement>
}

interface UseCollapsibleProps {
	collapsed: boolean
}

export const useCollapsible = ({
	collapsed
}: UseCollapsibleProps): UseCollapsible => {
	const ref = React.useRef<HTMLDivElement>(null)
	const hasMounted = React.useRef(false)
	const onTransitionEnd = React.useRef<() => void>()

	React.useLayoutEffect(() => {
		const onCollapsed = (): void => {
			if (ref.current == null) return

			if (!hasMounted.current) {
				ref.current.style.height = '0px'
				ref.current.style.visibility = 'hidden'
				hasMounted.current = true
				return
			}

			const height = ref.current.scrollHeight

			onTransitionEnd.current = (): void => {
				if (ref.current == null) return

				if (onTransitionEnd.current != null) {
					ref.current.removeEventListener(
						'transitionend',
						onTransitionEnd.current
					)
				}

				ref.current.style.visibility = 'hidden'
			}

			if (onTransitionEnd.current != null) {
				ref.current.addEventListener('transitionend', onTransitionEnd.current)
			}

			requestAnimationFrame(() => {
				if (ref.current == null) return

				ref.current.style.height = `${height}px`

				requestAnimationFrame(() => {
					if (ref.current == null) return

					ref.current.style.height = '0px'
				})
			})
		}

		const onExpanded = (): void => {
			if (ref.current == null) return

			ref.current.style.visibility = 'visible'

			if (!hasMounted.current) {
				ref.current.style.height = ''
				hasMounted.current = true
				return
			}

			onTransitionEnd.current = (): void => {
				if (ref.current == null) return

				if (onTransitionEnd.current != null) {
					ref.current.removeEventListener(
						'transitionend',
						onTransitionEnd.current
					)
				}

				ref.current.style.height = ''
				ref.current.style.overflow = ''
			}

			const height = ref.current.scrollHeight

			if (onTransitionEnd.current != null) {
				ref.current.addEventListener('transitionend', onTransitionEnd.current)
			}

			ref.current.style.height = `${height}px`
		}

		if (collapsed) {
			onCollapsed()
		} else {
			onExpanded()
		}

		return (): void => onTransitionEnd.current?.()
	}, [collapsed])

	return { ref }
}
