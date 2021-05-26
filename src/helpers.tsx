import { DefaultTheme } from 'styled-components'

import phoenixTheme from './theme'
import React from 'react'

export const determineTheme = (externalTheme: DefaultTheme) => {
	return 'colors' in externalTheme ? externalTheme : phoenixTheme
}
