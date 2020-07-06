// import original module declarations
import 'styled-components'

import Theme from './src/phoenixTheme'

// and extend them!
declare module 'styled-components' {
  type ThemeType = typeof Theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
