# Phoenix components

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Purple-Technology/phoenix-components)

Our aim is to build a simple React components library using [`styled-components`](https://styled-components.com/) and TypeScript.

## 3rd party libraries

Phoenix Components takes advantage of some 3rd party libraries to create consistently styled components

- [`@tippyjs/react`](https://github.com/atomiks/tippyjs-react) - dropdown and positioning engine for the Dropdown component
- [`countries-and-timezones`](https://github.com/manuelmhtr/countries-and-timezones) - list of timezones for the TimezonePicker component
- [`is-mobile`](https://github.com/juliangruber/is-mobile) - detecting mobile device for the Select component 
- [`nanoid`](https://github.com/ai/nanoid) - unique string ID generator for Checkbox and Radio components
- [`noUiSlider`](https://refreshless.com/nouislider) - complete solution for the Slider (and Range) component
- [`react-day-picker`](http://react-day-picker.js.org/) - date picker for DatePicker and DateRangePicker components
- [`react-dropzone`](https://react-dropzone.js.org/) - drag'n'drop support for the FileUpload component
- [`react-inlinesvg`](https://github.com/gilbarbara/react-inlinesvg) - Inline loading of SVG files (to support hover effects) across all components using icons
- [`react-pdf`](https://react-pdf.org/) - PDF files preview for the FileUpload component
- [`react-select`](https://react-select.com/) - complete solution for the Select component
- [`react-tabs`](https://github.com/reactjs/react-tabs) - complete solution for the Tabs component and its subcomponents (TabList, Tab and TabPanel)

## Demo & Documentation

[Phoenix Components Storybook](https://purple-technology.github.io/phoenix-components)

## Install

`npm i @purple/phoenix-components`

## Usage

1. Phoenix components use by default Roboto font with weights 400 and 500. If you want to use this default font, please add it to your project, using for example Google Fonts. (If you want to use different font family and/or different font weights, please refer to the section Customization.)

  ```html
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  ```

2. Import `Theme` from Phoenix Components and wrap the app in `<ThemeProvider>` from `styled-components` providing the `Theme` object. If your repository already contains custom `styled-components` theme, merge both themes together. If you're going to use overrides inside `$pc` key (see the Customization section), you need to use deep merge (e.g. `merge` from `lodash`).

    Also, import `<GlobalStyles>` component which provides styles such as default font and sizes, and include it once in your project.

```typescript
import merge from 'lodash/merge'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Theme as PhoenixTheme } from '@purple/phoenix-components'
import { Theme } from './CustomAppTheme'
...

function App() {
  return (
    <ThemeProvider theme={merge(PhoenixTheme, Theme)}>
      <GlobalStyles />
      { ... your app ... }
    </ThemeProvider>
  )
}
```

You can optionally include `dir` key in the theme with values either `'ltr'` or `'rtl'`. This is not required but it will slightly optimize CSS generated to support right-to-left layouts, resulting in smaller footprint.

```typescript
...
<ThemeProvider theme={merge({ dir: 'rtl' }, Theme)}>
...
```

3. Import components that you need and use them according to [the docs](https://purple-technology.github.io/phoenix-components).

```typescript
import { TextInput } from '@purple/phoenix-components'
```

## Customization

You can either extended the components with `styled-components`.
For example:

```typescript
import styled from 'styled-components'
import { TextInput } from '@purple/phoenix-components'

const StyledInput = styled(TextInput)`
	// css overrides here
`
```

Or you can override the default properties inside the `$pc` object. In your own theme file, define the overrides as shown below, deep merge your theme file with the Phoenix theme file, and provide it to `ThemeProvider`.

```typescript
export const Theme = {
	...

	// overriding phoenix components defaults
	$pc: {
		fontFamily: 'Mulish, sans-serif',
		fontWeight: {
			regular: 400,
			bold: 600
		}
	}
}
```

For more information about what's possible to customize please refer directly to the file `src/theme.tsx`.


## 🔼 Migration guide from v3 to v4

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
| autoComplete | Remove. Select does not support `autoComplete` prop and it was not used in the v3 anyway. |
| description | Description is not part of this component anymore. If any description above the text input is needed, use component Text or Paragraph. |
| background | Remove. Should not be desired. We strive for unified design. |
| border | Remove. Should not be desired. We strive for unified design. |
| rowHeight | Remove without replacement. |

### SelectPicker

| Property    | Notes                                                 |
| ----------- | ----------------------------------------------------- |
| borderColor | Use `colorTheme` instead.                             |
| label       | Removed. If needed, use standalone component `Label`. |

### TextArea

| Property   | Notes                                                                           |
| ---------- | ------------------------------------------------------------------------------- |
| type       | Remove without replacement. `textarea` does not have an attribute `type`.       |
| withBorder | Remove without replacement. Should not be desired. We strive for unified design. |

### TextInput

| Property            | Notes                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| description         | Description is not part of this component anymore. If any description above the text input is needed, create a custom element with custom styling. |
| descriptionFontSize | The same applies as for `description` prop.                                                                                                        |
| background          | Remove without replacement. Background color should not be modified.                                                                               |
| disableErrorText    | If we don't want to display error text but want to mark the input as errored, we set the property `error` to `true` (instead of `string`).         |
| focusColor          | Remove without replacement. Focus color should not be modified.                                                                                    |
