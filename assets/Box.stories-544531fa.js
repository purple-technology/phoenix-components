import{j as o}from"./iframe-bef07166.js";import{m as S,p as w}from"./stories-2c96ac35.js";import{B as r}from"./index-643a9259.js";const u={title:"components / Box",component:r,argTypes:{...S,...w,gap:{control:"text"},rowGap:{control:"text"},columnGap:{control:"text"}}},e={render:y=>o.jsx(r,{...y,textAlign:"center",children:"Text centered"})},n={render:()=>o.jsx(r,{ml:"xxl",py:20,children:"Content with margin and padding"})},s={render:()=>o.jsxs(r,{display:"flex",flexWrap:"wrap",columnGap:"s",rowGap:40,children:[o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"}),o.jsx(r,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0",children:"Content with gaps"})]})},x={render:()=>o.jsx(r,{opacity:"0.5",position:"relative",left:"12px",children:"Other CSS attributes"})};var t,p,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Box {...args} textAlign="center">
            Text centered
        </Box>
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Box ml="xxl" py={20}>
            Content with margin and padding
        </Box>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexWrap="wrap" columnGap="s" rowGap={40}>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
            <Box px="s" py="xxs" border="1px solid maroon" flexShrink="0">
                Content with gaps
            </Box>
        </Box>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,B,f;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Box opacity="0.5" position="relative" left="12px">
            Other CSS attributes
        </Box>
}`,...(f=(B=x.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const b=["TextAlign","MarginPadding","Gap","OtherExamples"],G=Object.freeze(Object.defineProperty({__proto__:null,Gap:s,MarginPadding:n,OtherExamples:x,TextAlign:e,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{G as B,s as G,n as M,x as O,e as T};
