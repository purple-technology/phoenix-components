import{e as d}from"./iframe-a6e3c2ce.js";import{C as u}from"./Color-0aa54fb0.js";import{N as i}from"./index-977c957b.js";import"./index-d84864de.js";import"./index-20c57795.js";import"./index-9a965812.js";import"./Sizing-35dbcd46.js";import"./colors-3cc0579a.js";import"./SpacingStyles-3c7442ac.js";import"./index-21f1dd54.js";import"./helpers-4992d6b4.js";import"./ButtonStyles-db6577b5.js";const E={component:i,title:"components/Notice",argTypes:{colorTheme:{control:"select",options:u},borderRadius:{control:"text"}}},l=t=>{const p=t.onClose?()=>{console.log("close")}:void 0;return d.createElement(i,{...t,onClose:p})},e={render:l,args:{children:"A random notice text",onClose:!1,colorTheme:"brand"}},o={render:l,args:{...e.args,buttonText:"Action Button"}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'A random notice text',
    onClose: false,
    colorTheme: 'brand'
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,c,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    buttonText: 'Action Button'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Default","WithButton"];export{e as Default,o as WithButton,S as __namedExportsOrder,E as default};
