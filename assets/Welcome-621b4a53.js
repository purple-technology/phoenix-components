import{j as e}from"./iframe-bef07166.js";import{u as r}from"./index-992158b8.js";import{M as s,c as a}from"./blocks-13a639b7.js";import"./index-5bc7f631.js";const i=`# Phoenix components

Our aim is to build a simple React components library using [\`styled-components\`](https://styled-components.com/) and TypeScript.

## 3rd party libraries

Phoenix Components takes advantage of some 3rd party libraries to create consistently styled components

- [\`@tippyjs/react\`](https://github.com/atomiks/tippyjs-react) - dropdown and positioning engine for the Dropdown component
- [\`countries-and-timezones\`](https://github.com/manuelmhtr/countries-and-timezones) - list of timezones for the TimezonePicker component
- [\`is-mobile\`](https://github.com/juliangruber/is-mobile) - detecting mobile device for the Select component 
- [\`nanoid\`](https://github.com/ai/nanoid) - unique string ID generator for Checkbox and Radio components
- [\`noUiSlider\`](https://refreshless.com/nouislider) - complete solution for the Slider (and Range) component
- [\`react-day-picker\`](http://react-day-picker.js.org/) - date picker for DatePicker and DateRangePicker components
- [\`react-dropzone\`](https://react-dropzone.js.org/) - drag'n'drop support for the FileUpload component
- [\`react-inlinesvg\`](https://github.com/gilbarbara/react-inlinesvg) - Inline loading of SVG files (to support hover effects) across all components using icons
- [\`react-pdf\`](https://react-pdf.org/) - PDF files preview for the FileUpload component
- [\`react-select\`](https://react-select.com/) - complete solution for the Select component
- [\`react-tabs\`](https://github.com/reactjs/react-tabs) - complete solution for the Tabs component and its subcomponents (TabList, Tab and TabPanel)

## Demo & Documentation

[Phoenix Components Storybook](https://purple-technology.github.io/phoenix-components)

## Running Storybook locally

To start dev server of storybook on Mac it needs few \`brew\` packages and one \`npm\` package to be installed first.

1. First install npm package \`npm install -g node-gyp\`
2. Then install brew packages: \`brew install pkg-config pixman cairo pango\`
3. Navigate to \`node_modules/.pnpm/canvas@2.11.2/node_modules/canvas\` in phoenix repo
4. Run command \`node-gyp rebuild\` to manually resolve binaries (\`npx node-gyp rebuild\` if some problems)
5. Start storybook in root folder of repo: \`pnpm storybook\`

Here are some useful links that solves some problems that can occur: [pkg-config error](https://stackoverflow.com/questions/29023316/node-gyp-pkg-config-command-not-found-on-mac-10-5-8-during-npm-install), [other path errors](https://github.com/Automattic/node-canvas/issues/1065).

## Deployment process

Before merging to master run \`npm run release:feature\`, this will create a new version tag. After that you can merge your branch to master and from there you can run \`npm run release:publish\`.

## Install

	npm i @purple/phoenix-components

## Usage with default (Axiory) design tokens

1. Phoenix components use by default Mulish font with weights 400 and 600. If you want to use this default font, please add it to your project, using for example Google Fonts.

	\`\`\`html
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap" rel="stylesheet">
	\`\`\`
   
2. Import \`Theme\` from Phoenix Components and wrap the app in \`<ThemeProvider>\` from \`styled-components\` providing the \`Theme\` object. If your repository already contains custom \`styled-components\` theme, merge both themes together. Also, import \`<GlobalStyles>\` component which provides styles such as default font and sizes, and include it once in your project.

	\`\`\`typescript
	import { merge } from 'es-toolkit'
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
	\`\`\`

	You can optionally include \`dir\` key in the theme with values either \`'ltr'\` or \`'rtl'\`. This is not required but it will slightly optimize CSS generated to support right-to-left layouts, resulting in smaller footprint.

	\`\`\`typescript
	...
	<ThemeProvider theme={merge({ dir: 'rtl' }, Theme)}>
	...
	\`\`\`

3. Import components that you need and use them according to [the docs](https://purple-technology.github.io/phoenix-components).

	\`\`\`typescript
	import { TextInput } from '@purple/phoenix-components'
	\`\`\`

## Components customization

You can extend the components with \`styled-components\`.
For example:

\`\`\`typescript
import styled from 'styled-components'
import { TextInput } from '@purple/phoenix-components'

const StyledInput = styled(TextInput)\`
	// css overrides here
\`
\`\`\`

## Custom design tokens

Since version 5, Phoenix components use design tokens for styling. If you want to change appearance of the components you need to provide \`ThemeProvider\` with a custom set of tokens (JSON file). 

> Previously (in v4), components were styled using object \`$pc\` within the theme file. This object is deprecated and will be removed in version 6.

Default MyAxiory tokens bundled with Phoenix components come from this repository https://github.com/purple-technology/my-axiory-tokens. These tokens originate from designers, specifically from Figma plugin called Tokens Studio. For your own project, you need to be given an access to a similar repo with custom design tokens.

Tokens in the repo come as a generic JSON file (or multiple files) that can be used on different platforms - web, mobile (iOS, Android). But in order to use them on each platform they need to be transformed accordingly for better usability. For this transformation, a tool called [\`style-dictionary\`](https://amzn.github.io/style-dictionary/#/) is used. Very basic config file could look like this (\`style-dictionary.config.json\`):

\`\`\`json
{
	"source": [
		"my-axiory-tokens/tokens/global.json"
	],
	"platforms": {
		"js": {
			"transformGroup": "js",
			"buildPath": "src/tokens/",
			"files": [
				{
					"destination": "tokens.json",
					"format": "json/nested"
				}
			]
		}
  }
}
\`\`\`

### Build process

1. Pull repo with custom tokens, for example:

		git -C my-axiory-tokens pull || git clone https://github.com/purple-technology/my-axiory-tokens.git

2. Run \`style-dictionary build\` which takes by default \`style-dictionary.config.json\` file placed in root of the project.
3. Merge default Phoenix theme with your custom generated tokens JSON file and provide it to \`ThemeProvider\` component. **Note: tokens reside within the theme object as a key \`tokens\`!**

	\`\`\`typescript
	import customTokens from './customTokens.json'

	(...)

	<ThemeProvider theme={merge(PhoenixTheme, { tokens: customTokens })}>
	\`\`\`

## 🔼 Migration guide from v4 to v5

Phoenix Components ver. 5 transitioned to using Design tokens. This change affected namings of several entities.

### Sizes

Sizes of the components have been updated to be more consistent with other sizing and spacing units.

| Previous size | **Current size** |
| -- | -- |
| tiny | **xs** |
| small | **sm** |
| medium | **md** |
| large | **lg** |

These changes affect components \`Button\`, \`ButtonGroup\`, \`DateInput\`, \`Heading\`, \`LinkButton\`, \`List\`, \`Modal\`, \`MultiSelect\`, \`Pagination\`, \`Paragraph\`, \`Tag\` and \`Text\`.

> #### What to do?
> 
> Find all instances of \`size="tiny"\` and replace with \`size="xs"\`. Similarly for other sizes. Don't forget that a value can be written also for example \`size={'tiny'}\` or that value can be calculated so you won't be able to look these instances so easily.

Also sizing types have been renamed.

| Previous size type | **Current size type** |
| -- | -- |
| ComponentSize | **Sizing** |
| ComponentSizeSmallMedium | **SizingSmMd** |
| ComponentSizeMediumLarge | **SizingMdLg** |
| ComponentSizeSmallMediumLarge | **SizingSmMdLg** |

> #### What to do?
> 
> Replace all previous size types with the new ones.

### Colors

Text colors were renamed

| Previous color | **Current color** |
| -- | -- |
| darkest | **primary** |
| dark | **secondary** |
| light | **tertiary** |
| lightest | **quaternary** |

These changes affect components \`Heading\`, \`Paragraph\` and \`Text\`.

For the \`ColorTheme\` enum and \`colorTheme\` props, the color \`primary\` has been renamed to color **\`brand\`**. Other colors (\`success\`, \`warning\`, \`error\`, \`info\`, \`neutral\`) remain the same.

> #### What to do?
> - Search for all \`colorTheme="primary"\` and replace with \`colorTheme="brand"\`
> - Search for all \`color="darkest"\` and replace with \`color="primary"\`. Same for dark, light and lightest.

### Spacings

Spacings were also updated to be more consistent with other units. **However, these changes are backwards compatible.** Old values have been deprecated and will be removed in the next major version.

| Previous value | **Current value** |
| -- | -- |
| xxxs | **3xs** |
| xxs | **2xs** |
| xs | **xs** |
| s | **sm** |
| m | **md** |
| l | **lg** |
| xl | **xl** |
| xxl | **2xl** |
| xxxl | **3xl** |

> #### What to do?
> Since these changes are backwards-compatible, you don't have to do anything right now. But from now on, use the new values. Also, only new values will be hinting in your editor.

### Button and Link Button

Both components have now a new style available - outline. This style can be enabled by the prop named \`outline\`.

Minimal style is now available in all color themes. Default style for minimal is now \`brand\`, instead of \`neutral\`.

> #### What to do?
> If you want to keep the same styling, add \`colorTheme="neutral"\` to Buttons with \`minimal\` prop.

### Tag

Previously, this component had only a single style. Currently, there are 3 styles available that correspond with the styles of the button - primary, secondary and outline. **Default style is now \`primary\`. Previous style is currently \`secondary\` and must be explicitly enabled by the prop \`secondary\`.** 

> #### What to do?
> Search for all instances of \`Tag\` component and add \`secondary\` prop.

### Heading, Paragraph and Text

Prop \`colorTheme\` has been removed and there's only \`color\` prop now excepting all text colors (primary, secondary, tertiary, quaternary), color theme colors (brand, success, warning, error, info, neutral) and any valid CSS value.

Instead of 3 sizes (small, medium, large), these components now include 4 sizes - xs, sm, md, lg. For Text and Paragraph components, default value is now \`sm\`. Since there's one more size, original size \`small\` is now \`xs\`.

> #### What to do?
> - Search all instances of Text, Paragraph and Heading and replace \`colorTheme\` with \`color\`.
> - Replace \`size="small"\` with \`size="xs"\`. (If you already replaced sizing with new sizes, you have to search for \`size="sm"\`.)

Also, \`Paragraph\` component now has a new prop \`lineHeight\` which accepts standard sizing values \`xs\`, \`sm\`, \`md\` and \`lg\` or any other valid CSS value. Default value is \`md\`.

### List and ListItem

Prop \`colorTheme\` has been removed and there's only \`color\` prop now excepting all text colors (primary, secondary, tertiary, quaternary), color theme colors (brand, success, warning, error, info, neutral) and any valid CSS value. Also, \`color\` prop now affects only text. To change color of the bullet, use \`bulletColor\` which accepts the same values.

> #### What to do?
> - Search all instances of List and ListItem and replace \`colorTheme\` with \`bulletColor\`.
> - Search for all \`bulletColor\` props and change \`darkest\` to \`primary\`, \`dark\` to \`secondary\` etc. (see the section Colors)

### Icon

Props \`colorTheme\` and \`light\` removed and replaced with a simple \`color\` prop. This prop behaves similarly like prop \`color\` in Heading/Text/Paragraph components, ie. excepting all text colors (primary, secondary, tertiary, quaternary), color theme colors (brand, success, warning, error, info, neutral) and any valid CSS value.

Also, filled icons ending with -primary are now named as -brand, so instead of \`icon="smartphone-primary"\`, it's now \`icon="smartphone-brand"\` etc.

> #### What to do?
> - Search for all instances of Icon component and if there's a \`light\` prop, then just replace it with \`color="white"\`
> - Search for all instances of Icon component and replace all \`colorTheme\` props with \`color\` (Note: If you haven't already done it before, replace values \`primary\` with \`brand\` - see the section Colors)
> - Search for all used filled brand icons. These icons were ending with \`-primary\`. You have to replace all \`-primary\` at the end with \`-brand\`

### Spacer

This component was marked as deprecated in v4 and was removed in v5. Use \`Box\` component instead.

> #### What to do?
> - Search for all instances of Spacer component and replace them with Box component. If there's a prop \`w\` or \`h\` used, use some kind of margin or padding prop instead (\`mt\`, \`pl\`, \`pr\` etc.). You can also use \`width\` or \`height\` props but these do not support Spacing values (\`xs\`, \`sm\`, \`md\` etc.).

## 🔼 Migration guide from v3 to v4

In prop tables, all removed properties are listed with notes how to update the component.

### Alert

Renamed to **Notice**.

| Property        | Notes                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text            | Use \`children\` instead.                                                                                                                                       |
| centerText      | Too specific prop. Centered text in a notice component is discouraged. If needed, however, it can be done manually through child element with custom styling. |
| type            | Use \`colorTheme\` instead.                                                                                                                                     |
| contentColor    | Use \`colorTheme\` instead.                                                                                                                                     |
| backgroundColor | Use \`colorTheme\` instead.                                                                                                                                     |
| title           | Use \`children\` instead.                                                                                                                                       |

### Button

| Property   | Notes                     |
| ---------- | ------------------------- |
| color      | Use \`colorTheme\` instead. |
| background | Use \`colorTheme\` instead. |

### CheckBox

Renamed to **Checkbox** (B lowercase).

| Property | Notes                     |
| -------- | ------------------------- |
| color    | Use \`colorTheme\` instead. |

### DateInput

| Property | Notes                                                 |
| -------- | ----------------------------------------------------- |
| label    | Removed. If needed, use standalone component \`Label\`. |

### FileUpload

| Property | Notes                     |
| -------- | ------------------------- |
| color    | Use \`colorTheme\` instead. |

### SelectBox

Renamed to **Select**.

| Property    | Notes                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoComplete | Remove. Select does not support \`autoComplete\` prop and it was not used in the v3 anyway. |
| description | Description is not part of this component anymore. If any description above the text input is needed, use component Text or Paragraph. |
| background | Remove. Should not be desired. We strive for unified design. |
| border | Remove. Should not be desired. We strive for unified design. |
| rowHeight | Remove without replacement. |

### SelectPicker

| Property    | Notes                                                 |
| ----------- | ----------------------------------------------------- |
| borderColor | Use \`colorTheme\` instead.                             |
| label       | Removed. If needed, use standalone component \`Label\`. |

### TextArea

| Property   | Notes                                                                           |
| ---------- | ------------------------------------------------------------------------------- |
| type       | Remove without replacement. \`textarea\` does not have an attribute \`type\`.       |
| withBorder | Remove without replacement. Should not be desired. We strive for unified design. |

### TextInput

| Property            | Notes                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| description         | Description is not part of this component anymore. If any description above the text input is needed, create a custom element with custom styling. |
| descriptionFontSize | The same applies as for \`description\` prop.                                                                                                        |
| background          | Remove without replacement. Background color should not be modified.                                                                               |
| disableErrorText    | If we don't want to display error text but want to mark the input as errored, we set the property \`error\` to \`true\` (instead of \`string\`).         |
| focusColor          | Remove without replacement. Focus color should not be modified.                                                                                    |
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Readme"}),`
`,e.jsx(a,{children:i})]})}function m(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{m as default};
