import{r as b,e as f}from"./iframe-d0511029.js";import{C as I}from"./Color-0aa54fb0.js";import{b as h}from"./Sizing-35dbcd46.js";import{S as g}from"./index-4fbb3328.js";import"./index-d254163b.js";import"./rtl-bf1a4ec1.js";import"./index-65d923a3.js";import"./helpers-4992d6b4.js";import"./SpacingStyles-66d9a443.js";import"./CheckboxStyles-f50ee76b.js";import"./check-9c2d93e5.js";import"./CheckboxRadioStyles-5a50e93b.js";import"./colors-3cc0579a.js";const o=""+new URL("example-image-cb6c40cf.svg",import.meta.url).href,P=[{value:"primary",image:o,label:"Primary education",description:"Basic education"},{value:"secondary",image:o,label:"Secondary education",description:"Some school"},{value:"university",image:o,label:"University education",description:"More education than average",isDisabled:!0}],S=[{value:"primary",label:"Primary education"},{value:"secondary",label:"Secondary education"},{value:"university",label:"University education"}],W={component:g,argTypes:{label:{control:{type:"text"}},size:{options:h,control:"radio"},colorTheme:{options:I,control:"select"}},args:{size:"md",colorTheme:"brand",multiSelect:!1}},a=y=>{const[O,v]=b.useState("");return f.createElement(g,{...y,value:O,onChange:T=>v(T)})},e={render:a,args:{options:S}},r={render:a,args:{options:S,name:"picker",multiSelect:!0}},t={render:a,args:{options:P,imageSize:"80px"}};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: OPTIONS,
    imageSize: '80px'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const w=["Default","Multiselect","WithImages"];export{e as Default,r as Multiselect,t as WithImages,w as __namedExportsOrder,W as default};
