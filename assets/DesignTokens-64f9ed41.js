import{j as e}from"./iframe-bef07166.js";import{u as i}from"./index-992158b8.js";import{M as t}from"./blocks-13a639b7.js";import{E as o}from"./index-f511d176.js";import"./index-5bc7f631.js";import"./assertThisInitialized-72cc4d9c.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundation / Design Tokens",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.h2,{id:"basics",children:"Basics"}),`
`,e.jsxs(n.p,{children:["Styling of Phoenix components is done primarily by Design tokens. These are name and value pairs that represent small, repeatable design decisions. Design tokens use meaningful names to represent visual styles, instead of hard-coded values. For example, a background color for a Card component uses a design token ",e.jsx(n.code,{children:"card.color.background"}),", instead of a specific color value like ",e.jsx(n.code,{children:"#FFFFFF"}),"."]}),`
`,e.jsx(n.h2,{id:"naming-convention",children:"Naming convention"}),`
`,e.jsxs(n.p,{children:["In short, design tokens are named following the pattern ",e.jsx(n.code,{children:"component.category.usage.variant"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"component"})," - What component is it affecting? It can be ",e.jsx(n.code,{children:"button"}),", ",e.jsx(n.code,{children:"card"}),", ",e.jsx(n.code,{children:"tag"}),", ",e.jsx(n.code,{children:"checkbox"})," and so on. This part can be omitted if it's a general-purpose token, or it can have a value ",e.jsx(n.code,{children:"ref"})," if it's a reference token (see below)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"category"})," - What attribute are you referring to? It can be ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"spacing"}),", ",e.jsx(n.code,{children:"sizing"}),", ",e.jsx(n.code,{children:"fontSize"}),", ",e.jsx(n.code,{children:"fontWeight"})," etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"usage"})," - Where is it being used? It can be ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"background"}),", ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"border"})," etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," - Are there any variants? This part can be ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"base"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"interaction"}),", ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})," etc."]}),`
`]}),`
`,e.jsx(n.p,{children:"There are 3 main token categories:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reference tokens"}),": These tokens start with ",e.jsx(n.code,{children:"ref"})," and are always defined by its absolute value (e.g. ",e.jsx(n.code,{children:"40px"}),", ",e.jsx(n.code,{children:"#FFFFFF"}),"). Specifically for colors, these tokens should NOT be ideally used because they have always the same values for a specific project, regardless of the light or dark theme (both light and dark theme use the same reference tokens). If they are used, light and dark theme must be handled manually in the project by switching colors. Other tokens (not related to colors) might be used."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global tokens"}),": Start with category and, as the name implies, they define general-purpose tokens (used for any component). They are often defined by referencing the reference tokens. These tokens should be used primarily. For colors, values of these tokens might differ for light and dark theme."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component tokens"}),": They start with the name of the component and affect only this component or a set of components (e.g. ",e.jsx(n.code,{children:"tag"}),", ",e.jsx(n.code,{children:"inputButton"}),"). They are often defined by referencing global or reference tokens. These tokens can be also freely used. For colors, values of these tokens might also differ for light and dark theme."]}),`
`]}),`
`,e.jsx(n.p,{children:"In overall, this naming convention is a guideline that should be followed for better consistency and readability whenever possible but should not be forced. There are scenarios where different approach or slightly adjusted naming convention should be preferred."}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:["Phoenix components ship with a default style, i.e. default set of tokens. These tokens come from https://github.com/purple-technology/my-axiory-tokens. However, custom styling is possible and is done primarily by providing an alternative set of tokens. These alternative tokens should be provided by designers. The whole process from a development point of view is described in a ",e.jsx(n.a,{href:"?path=/docs/readme--docs",children:"README file"}),"."]}),`
`,e.jsx(n.h2,{id:"default-axiory-tokens",children:"Default (Axiory) tokens"}),`
`,e.jsxs(n.p,{children:["Below you can see default tokens grouped by type. Because these tables are generated from SCSS file, variable name format is different from the usage in code. In your TypeScript code you should use it with dot notation and without $ sign. E.g. ",e.jsx(n.code,{children:"$color-background-primary"})," turns into ",e.jsx(n.code,{children:"color.background.primary"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:"background-color: ${({ theme }): string => theme.tokens.color.background.primary};\n"})}),`
`,e.jsx(n.h3,{id:"color",children:"Color"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"Color",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"fontweight",children:"FontWeight"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"FontWeights",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"fontfamily",children:"FontFamily"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"FontFamilies",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"fontsize",children:"FontSize"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"FontSizes",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"fontweight-1",children:"FontWeight"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"FontWeights",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"lineheight",children:"LineHeight"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"LineHeights",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"Spacing",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"Sizing",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"boxshadow",children:"BoxShadow"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"BoxShadow",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"borderradius",children:"BorderRadius"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"BorderRadius",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"borderwidth",children:"BorderWidth"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"BorderWidth",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"Typography",maxHeight:9999}),`
`,e.jsx(n.h3,{id:"other",children:"Other"}),`
`,e.jsx(o,{showSearch:!1,categoryName:"Other",maxHeight:9999})]})}function g(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{g as default};
