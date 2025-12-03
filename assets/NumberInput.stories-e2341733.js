import{r as p,j as i}from"./iframe-bef07166.js";import{a as l}from"./stories-5d325111.js";import{N as s}from"./index-cdba774e.js";import"./Sizing-35dbcd46.js";import"./useFormControl-7b675c3c.js";import"./check-9c2d93e5.js";import"./index-9a14469c.js";import"./rtl-584aedc3.js";import"./index-3f76cd62.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-3467cbc6.js";const j={component:s,argTypes:{...l},args:{label:"Input Label",maxDecimalCount:2,size:"md"}},e=r=>{const[u,m]=p.useState(r.value??null);return i.jsx(s,{...r,value:u,onChange:t=>{m(t),r.onChange(t)}})};e.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number | null>(args.value ?? null);
  return <NumberInputComponent {...args} value={value} onChange={(v): void => {
    setValue(v);
    args.onChange(v);
  }} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const y=["NumberInput"];export{e as NumberInput,y as __namedExportsOrder,j as default};
