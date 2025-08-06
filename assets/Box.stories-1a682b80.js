import{e as r}from"./iframe-967d279e.js";import{m as S,p as w}from"./stories-b5d138ee.js";import{B as e}from"./index-52e8b132.js";const b={title:"components / Box",component:e,argTypes:{...S,...w,gap:{control:"text"},rowGap:{control:"text"},columnGap:{control:"text"}}},o={render:y=>r.createElement(e,{...y,textAlign:"center"},"Text centered")},n={render:()=>r.createElement(e,{ml:"xxl",py:20},"Content with margin and padding")},t={render:()=>r.createElement(e,{display:"flex",flexWrap:"wrap",columnGap:"s",rowGap:40},r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"),r.createElement(e,{px:"s",py:"xxs",border:"1px solid maroon",flexShrink:"0"},"Content with gaps"))},s={render:()=>r.createElement(e,{opacity:"0.5",position:"relative",left:"12px"},"Other CSS attributes")};var x,a,p;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Box {...args} textAlign="center">
            Text centered
        </Box>
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Box ml="xxl" py={20}>
            Content with margin and padding
        </Box>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var h,B,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Box opacity="0.5" position="relative" left="12px">
            Other CSS attributes
        </Box>
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const u=["TextAlign","MarginPadding","Gap","OtherExamples"],G=Object.freeze(Object.defineProperty({__proto__:null,Gap:t,MarginPadding:n,OtherExamples:s,TextAlign:o,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{G as B,t as G,n as M,s as O,o as T};
