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

But in most cases, you probably just want to change the theme. This can be done by wrapping your
app in a `ThemeProvider` component from the `styled-components` library.

https://styled-components.com/docs/advanced#theming

The theme must conform to a certain shape for this library to recognize the key names. Please
refer to `src/theme.tsx` to see the shape. If you do not provider your own theme, this library
will use the theme in `src/theme.tsx`.
