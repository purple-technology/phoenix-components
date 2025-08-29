import{r as p,e as l}from"./iframe-22864007.js";import{a as i}from"./stories-5d325111.js";import{N as s}from"./index-bd9eef83.js";import"./Sizing-35dbcd46.js";import"./useFormControl-ca195f92.js";import"./check-9c2d93e5.js";import"./index-3434f921.js";import"./rtl-a2dddcc3.js";import"./index-15f66ba7.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-a9a54458.js";const y={component:s,argTypes:{...i},args:{label:"Input Label",maxDecimalCount:2,size:"md"}},e=r=>{const[m,u]=p.useState(r.value??null);return l.createElement(s,{...r,value:m,onChange:t=>{u(t),r.onChange(t)}})};e.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number | null>(args.value ?? null);
  return <NumberInputComponent {...args} value={value} onChange={(v): void => {
    setValue(v);
    args.onChange(v);
  }} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const E=["NumberInput"];export{e as NumberInput,E as __namedExportsOrder,y as default};
