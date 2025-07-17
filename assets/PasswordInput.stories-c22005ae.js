import{s as I,r as p,e as t}from"./iframe-a6e3c2ce.js";import{a as g}from"./stories-5d325111.js";import{F as d}from"./index-c96ca032.js";import{I as w}from"./index-21f1dd54.js";import{T as v}from"./index-fb7d7dc6.js";import"./Sizing-35dbcd46.js";import"./index-3fcec67e.js";import"./index.esm-97e0a1f9.js";import"./SpacingStyles-3c7442ac.js";import"./TextStyles-7425ff6a.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./useFormControl-703be92c.js";import"./check-9c2d93e5.js";import"./index-54c3e827.js";import"./rtl-1d99c733.js";const P=I(d)`
	cursor: pointer;

	&:hover path {
		transition: fill
			${({theme:e})=>e.tokens.duration.transition.base};
		fill: ${({theme:e})=>e.tokens.color.text.primary};
	}
`,i=p.forwardRef(function({testId:s="PasswordInput",size:o="md",...a},c){const[n,f]=p.useState(!1);return t.createElement(v,{...a,testId:s,size:o,type:n?"text":"password",contentRight:t.createElement(d,{height:"100%",alignItems:"center"},t.createElement(P,{onClick:()=>f(!n)},t.createElement(w,{icon:n?"eye":"eye-hidden",size:o==="lg"?"lg":"md",color:"tertiary"}))),ref:c})});i.__docgenInfo={description:"`PasswordInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.",methods:[],displayName:"PasswordInput",props:{testId:{defaultValue:{value:"'PasswordInput'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const L={component:i,argTypes:g,args:{label:"Password",size:"md"}},r=e=>{const[s,o]=p.useState(e.value??"");return t.createElement(i,{...e,value:s,onChange:a=>o(a.target.value)})};r.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};var l,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? '');
  return <PasswordInputComponent {...args} value={value} onChange={(e): void => setValue(e.target.value)} />;
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const M=["PasswordInput"];export{r as PasswordInput,M as __namedExportsOrder,L as default};
