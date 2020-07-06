# Phoenix components

Our aim is to build a simple React components library using styled components and typescript.

**3rd party libraries**

Phoenix Components takes advantage of some 3rd party libraries and provides consistent styling for them.

- `react-select` for the Selectbox component
- `react-window` for the Selectbox component
- `react-dropzone` for the FileUpload component
- `react-pdf` for the FileUpload component
- `react-icons` for the FileUpload, Input, SelectBox, and SelectPicker components
- `floating-label-react` for the Input and TextArea components

**Documentation**

[Phoenix components storybook](https://purple-technology.github.io/phoenix-components)

**Install**

`npm i @purple/phoenix-components`

Include Roboto font into repository
Example:

```
<link
  href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
  rel="stylesheet"
/>
```

**Import components**

`import { Input } from "@purple/phoenix-components"`

**Customization**

To a certain degree, many of the components can be extended with `styled-components`.
For example:

```typescript
import styled from 'styled-components'
import { Input } from '@purple/phoenix-components'

const StyledInput = styled(Input)`
  // css overrides here
`
```

But in most cases, you probably just want to change the theme. See the example
code below for instructions on doing this.

```typescript
// optionally import the phoenixTheme if you only want to overide certain attributes
import { ThemeSettings, phoenixTheme } from '@purple/phoenix-components'

// Customize the theme to your liking
export const customTheme = {
  colors: {
    ...phoenixTheme.colors,
    primary: 'blue'
  },
  font: "'Times New Roman', Times, serif"
}

// And then change the theme
ThemeSettings.setTheme(customTheme)
```

> :warning: **setTheme does not trigger rerenders**: You need to call setTheme as early
> as possible in your app, e.g., before any of the Phoenix Components are rendered.
