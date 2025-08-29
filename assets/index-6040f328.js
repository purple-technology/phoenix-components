import{j as e}from"./jsx-runtime-9bc08dc0.js";import{u as t}from"./index-fe6f8d96.js";import{M as i,C as r}from"./blocks-7b093098.js";import"./index-aa1de450.js";import{Colors as c}from"./Colors.stories-f3f2e832.js";import{Headings as d}from"./Headings.stories-fa4a3d04.js";import"./Button.stories-a3534d0c.js";import"./iframe-22864007.js";import"./index-90e8dd18.js";import"./index-05bf6054.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./TextStyles-7697a8a1.js";import"./Sizing-35dbcd46.js";import"./SpacingStyles-a9a54458.js";import"./index-150f92c8.js";import"./stories-aa6ddf21.js";import"./IconAlignment-a51119ec.js";import"./index-15f66ba7.js";import"./index-9fcc56cb.js";import"./index-23fd3e1a.js";import"./index-c8a053b3.js";import"./colors-3cc0579a.js";import"./ButtonStyles-b1115345.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Foundation / Colors",parameters:{viewMode:"docs"}}),`
`,e.jsx(o.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(o.h2,{id:"color-theme",children:"Color Theme"}),`
`,e.jsxs(o.p,{children:['Phoenix components use 6 different "theme colors" as a ',e.jsx(o.code,{children:"ColorTheme"}),' type. In some design systems (for example Tailwind) these colors are referred to as "intents". These theme colors are:']}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"brand"})," - default brand color"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"success"})," - color used to convey success state (often green)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"warning"})," - color used to convey warning state (often orange or yellow)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"error"})," - color used to convey danger or error state (often red)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"info"})," - color used to convey some kind of information in situation where we can't or don't want to use ",e.jsx(o.code,{children:"brand"})," color theme (often blue)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"neutral"})," - theme color that convey no specific intention or state, should be always gray/grayish"]}),`
`]}),`
`,e.jsx(o.p,{children:"Specific colors (their hex/rgba values) for theme colors are defined by a specific set of design tokens. For Phoenix components and its default Axiory design tokens theme colors are as following:"}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs(o.p,{children:["As you can see, there are two sets - primary and secondary. They are used for example for ",e.jsx(o.a,{href:"/docs/components-button--docs",children:"Button"})," or ",e.jsx(o.a,{href:"/docs/components-tag--docs",children:"Tag"})," components. Primary is the default appearance and secondary is the background color if prop ",e.jsx(o.code,{children:"secondary"})," is set. Full set of color tokens can be found on page ",e.jsx(o.a,{href:"/docs/foundation-design-tokens--docs",children:"Design tokens"}),"."]}),`
`,e.jsx(o.h2,{id:"text-color",children:"Text Color"}),`
`,e.jsxs(o.p,{children:["In addition to theme colors, for some text components (",e.jsx(o.a,{href:"?path=/docs/components-text--docs",children:"Text"}),", ",e.jsx(o.a,{href:"/docs/components-paragraph--docs",children:"Paragraph"})," and ",e.jsx(o.a,{href:"/docs/components-heading--docs",children:"Heading"}),") you can set different text colors (shades of gray) as a ",e.jsx(o.code,{children:"color"})," prop:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"primary"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"secondary"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"tertiary"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"quaternary"})}),`
`]}),`
`,e.jsx(r,{of:d})]})}function I(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{I as default};
