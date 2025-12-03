import{r as b,j as f}from"./iframe-bef07166.js";import{C as x}from"./Color-0aa54fb0.js";import{b as I}from"./Sizing-35dbcd46.js";import{S as g}from"./index-16a5e7f3.js";import"./index-9a14469c.js";import"./rtl-584aedc3.js";import"./index-3f76cd62.js";import"./helpers-ed7a2f24.js";import"./SpacingStyles-3467cbc6.js";import"./CheckboxStyles-e1fde11b.js";import"./check-9c2d93e5.js";import"./CheckboxRadioStyles-5c7d460d.js";import"./colors-3cc0579a.js";const o=""+new URL("example-image-cb6c40cf.svg",import.meta.url).href,h=[{value:"primary",image:o,label:"Primary education",description:"Basic education"},{value:"secondary",image:o,label:"Secondary education",description:"Some school"},{value:"university",image:o,label:"University education",description:"More education than average",isDisabled:!0}],S=[{value:"primary",label:"Primary education"},{value:"secondary",label:"Secondary education"},{value:"university",label:"University education"}],L={component:g,argTypes:{label:{control:{type:"text"}},size:{options:I,control:"radio"},colorTheme:{options:x,control:"select"}},args:{size:"md",colorTheme:"brand",multiSelect:!1}},a=y=>{const[O,v]=b.useState("");return f.jsx(g,{...y,value:O,onChange:T=>v(T)})},e={render:a,args:{options:S}},r={render:a,args:{options:S,name:"picker",multiSelect:!0}},t={render:a,args:{options:h,imageSize:"80px"}};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: OPTIONS_NO_IMAGE
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: OPTIONS_NO_IMAGE,
    name: 'picker',
    multiSelect: true
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: OPTIONS,
    imageSize: '80px'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const R=["Default","Multiselect","WithImages"];export{e as Default,r as Multiselect,t as WithImages,R as __namedExportsOrder,L as default};
