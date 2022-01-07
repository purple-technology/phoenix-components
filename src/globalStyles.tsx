import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html {
		font-size: ${({ theme }): number => theme.$pc.fontSize}px;
	}

	body {
		color: ${({ theme }): string => theme.$pc.colors.text.darkest};
		font-family: ${({ theme }): string => theme.$pc.fontFamily};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`
