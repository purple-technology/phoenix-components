import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html {
		font-size: ${({ theme }): string => theme.tokens.fontSize.base};
	}

	body {
		color: ${({ theme }): string => theme.tokens.color.text.primary};
		font-family: ${({ theme }): string => theme.tokens.ref.fontFamily.base};
		background: ${({ theme }): string => theme.tokens.color.background.primary};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`
