import{j as n}from"./iframe-bef07166.js";import{u as d}from"./index-992158b8.js";import{M as r}from"./blocks-13a639b7.js";import{E as c}from"./index-f511d176.js";import"./index-5bc7f631.js";import"./assertThisInitialized-72cc4d9c.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Foundation / Spacing",parameters:{viewMode:"docs"}}),`
`,n.jsx(e.h1,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.p,{children:["Basic spacing system in Phoenix components is represented by the type called ",n.jsx(e.code,{children:"Spacing"}),". This type is used throughout multiple different components and their margin and padding props and includes the following options:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"3xs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"2xs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"xs"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"sm"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"md"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"lg"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"2xl"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"3xl"})}),`
`]}),`
`,n.jsxs(e.p,{children:["Values are defined by a specific set of design tokens, i.e. for different projects, these values might differ. For Phoenix components, we use Axiory design tokens by default. These values can be found in ",n.jsx(e.a,{href:"?path=/docs/foundation-design-tokens--docs",children:"Design tokens"}),". Please see the tokens starting with ",n.jsx(e.code,{children:"ref"}),":"]}),`
`,n.jsx(c,{showSearch:!1,categoryName:"Spacing",maxHeight:460}),`
`,n.jsx(e.h2,{id:"margin--padding-props",children:"Margin & padding props"}),`
`,n.jsx(e.p,{children:"Margin and padding props in Phoenix components are unified and are used by many components where applicable. They use Spacing values as defined above and include these props:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ml"})," - margin-inline-start (= margin-left in standard left-to-right page direction)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mr"})," - margin-inline-end (= margin-right in standard left-to-right page direction)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mt"})," - margin-top"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mb"})," - margin-bottom"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mx"})," - ",n.jsx(e.code,{children:"ml"})," and ",n.jsx(e.code,{children:"mr"})," in a single prop"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"my"})," - ",n.jsx(e.code,{children:"mt"})," and ",n.jsx(e.code,{children:"mb"})," in a single prop"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"m"})," - margin (shortcut for all margins together)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pl"})," - padding-inline-start (= padding-left in standard left-to-right page direction)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pr"})," - padding-inline-end (= padding-right in standard left-to-right page direction)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pt"})," - padding-top"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pb"})," - padding-bottom"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"px"})," - ",n.jsx(e.code,{children:"pl"})," and ",n.jsx(e.code,{children:"pr"})," in a single prop"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"py"})," - ",n.jsx(e.code,{children:"pt"})," and ",n.jsx(e.code,{children:"pb"})," in a single prop"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"p"})," - padding (shortcut for all paddings together)"]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"In addition to Spacing values they also accept:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"string"}),' as any CSS value with valid units ("20px", "1.5rem", "100%" etc.)']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"number"})," which is interpreted as px"]}),`
`]})]})}function p(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
