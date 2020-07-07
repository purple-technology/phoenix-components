import { DefaultTheme } from 'styled-components'

import phoenixTheme from './theme'

export const determineTheme = (externalTheme: DefaultTheme) => {
  return 'colors' in externalTheme ? externalTheme : phoenixTheme
}

/** Use to avoid warnings from styled, custom components
 *
 * When mixing styled-components with custom react components,
 * all props are passed through, meaning the custom props are
 * not cleaned from standard attributes for HTML DOM elements.
 *
 * This method offers a work-around to avoid the resulting
 * (inconsequential) error
 */
export const nonDomPropResolve = (value: boolean) => {
  return value ? 1 : 0
}
