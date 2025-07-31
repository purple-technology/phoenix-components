import{r as p,e as l}from"./iframe-3d4a8e97.js";import{a as i}from"./stories-5d325111.js";import{N as s}from"./index-557f8026.js";import"./Sizing-35dbcd46.js";import"./useFormControl-e55d219d.js";import"./check-9c2d93e5.js";import"./index-7aec5f09.js";import"./rtl-e711b500.js";import"./index-1f0cdf82.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-4e27dfe9.js";const y={component:s,argTypes:{...i},args:{label:"Input Label",maxDecimalCount:2,size:"md"}},e=r=>{const[m,u]=p.useState(r.value??null);return l.createElement(s,{...r,value:m,onChange:t=>{u(t),r.onChange(t)}})};e.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number | null>(args.value ?? null);
  return <NumberInputComponent {...args} value={value} onChange={(v): void => {
    setValue(v);
    args.onChange(v);
  }} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const E=["NumberInput"];export{e as NumberInput,E as __namedExportsOrder,y as default};
