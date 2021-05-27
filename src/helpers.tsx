import React from 'react'
import { DefaultTheme } from 'styled-components'

import phoenixTheme from './theme'

export const determineTheme = (externalTheme: DefaultTheme) => {
	return 'colors' in externalTheme ? externalTheme : phoenixTheme
}
