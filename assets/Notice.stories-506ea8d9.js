import{j as d}from"./iframe-bef07166.js";import{C as u}from"./Color-0aa54fb0.js";import{N as i}from"./index-76942c0a.js";import"./index-66c357df.js";import"./index-3940132f.js";import"./index-afcb9af5.js";import"./Sizing-35dbcd46.js";import"./colors-3cc0579a.js";import"./SpacingStyles-3467cbc6.js";import"./index-3f76cd62.js";import"./helpers-ed7a2f24.js";import"./ButtonStyles-4f291526.js";const _={component:i,title:"components/Notice",argTypes:{colorTheme:{control:"select",options:u},borderRadius:{control:"text"}}},p=t=>{const l=t.onClose?()=>{console.log("close")}:void 0;return d.jsx(i,{...t,onClose:l})},o={render:p,args:{children:"A random notice text",onClose:!1,colorTheme:"brand"}},e={render:p,args:{...o.args,buttonText:"Action Button"}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'A random notice text',
    onClose: false,
    colorTheme: 'brand'
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...Default.args,
    buttonText: 'Action Button'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const E=["Default","WithButton"];export{o as Default,e as WithButton,E as __namedExportsOrder,_ as default};
