import{r as p,e as l}from"./iframe-a6e3c2ce.js";import{a as i}from"./stories-5d325111.js";import{N as s}from"./index-6acd3ba9.js";import"./Sizing-35dbcd46.js";import"./useFormControl-703be92c.js";import"./check-9c2d93e5.js";import"./index-54c3e827.js";import"./rtl-1d99c733.js";import"./index-21f1dd54.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-3c7442ac.js";const y={component:s,argTypes:{...i},args:{label:"Input Label",maxDecimalCount:2,size:"md"}},e=r=>{const[m,u]=p.useState(r.value??null);return l.createElement(s,{...r,value:m,onChange:t=>{u(t),r.onChange(t)}})};e.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number | null>(args.value ?? null);
  return <NumberInputComponent {...args} value={value} onChange={(v): void => {
    setValue(v);
    args.onChange(v);
  }} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const E=["NumberInput"];export{e as NumberInput,E as __namedExportsOrder,y as default};
