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
refer to `src/theme.tsx` to see the shape. If you do not provide your own theme, this library
will use the theme in `src/theme.tsx`.

## 🔼 Migration guide from v1 to v2

In prop tables, all removed properties are listed with notes how to update the component.

### Alert

Renamed to **Notice**.

| Property        | Notes                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text            | Use `children` instead.                                                                                                                                       |
| centerText      | Too specific prop. Centered text in a notice component is discouraged. If needed, however, it can be done manually through child element with custom styling. |
| type            | Use `colorTheme` instead.                                                                                                                                     |
| contentColor    | Use `colorTheme` instead.                                                                                                                                     |
| backgroundColor | Use `colorTheme` instead.                                                                                                                                     |
| title           | Use `children` instead.                                                                                                                                       |

### Button

| Property   | Notes                     |
| ---------- | ------------------------- |
| color      | Use `colorTheme` instead. |
| background | Use `colorTheme` instead. |

### CheckBox

Renamed to **Checkbox** (B lowercase).

| Property | Notes                     |
| -------- | ------------------------- |
| color    | Use `colorTheme` instead. |

### DateInput

| Property | Notes                                                 |
| -------- | ----------------------------------------------------- |
| label    | Removed. If needed, use standalone component `Label`. |

### FileUpload

| Property | Notes                     |
| -------- | ------------------------- |
| color    | Use `colorTheme` instead. |

### SelectBox

Renamed to **Select**.

| Property    | Notes                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| description | Description is not part of this component anymore. If any description above the text input is needed, create a custom element with custom styling. |

### SelectPicker

| Property    | Notes                                                 |
| ----------- | ----------------------------------------------------- |
| borderColor | Use `colorTheme` instead.                             |
| label       | Removed. If needed, use standalone component `Label`. |

### TextArea

| Property   | Notes                                                                           |
| ---------- | ------------------------------------------------------------------------------- |
| type       | Remove without replacement. `textarea` does not have an attribute `type`.       |
| withBorder | Remove without replacement. Should not be wanted. We strive for unified design. |

### TextInput

| Property            | Notes                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| description         | Description is not part of this component anymore. If any description above the text input is needed, create a custom element with custom styling. |
| descriptionFontSize | The same applies as for `description` prop.                                                                                                        |
| background          | Remove without replacement. Background color should not be modified.                                                                               |
| disableErrorText    | If we don't want to display error text but want to mark the input as errored, we set the property `error` to `true` (instead of `string`).         |
| focusColor          | Remove without replacement. Focus color should not be modified.                                                                                    |
