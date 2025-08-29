import{s as f,r as u,e as t}from"./iframe-22864007.js";import{a as I}from"./stories-5d325111.js";import{F as d}from"./index-6224c4f9.js";import{I as g}from"./index-15f66ba7.js";import{T as w}from"./index-223a013d.js";import"./Sizing-35dbcd46.js";import"./index-71c111d9.js";import"./index.esm-ed4e9270.js";import"./SpacingStyles-a9a54458.js";import"./TextStyles-7697a8a1.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./useFormControl-ca195f92.js";import"./check-9c2d93e5.js";import"./index-3434f921.js";import"./rtl-a2dddcc3.js";const v=f(d)`
	cursor: pointer;

	&:hover path {
		transition: fill
			${({theme:e})=>e.tokens.duration.transition.base};
		fill: ${({theme:e})=>e.tokens.color.text.primary};
	}
`,p=({testId:e="PasswordInput",size:s="md",ref:o,...a})=>{const[n,c]=u.useState(!1);return t.createElement(w,{...a,testId:e,size:s,type:n?"text":"password",contentRight:t.createElement(d,{height:"100%",alignItems:"center"},t.createElement(v,{onClick:()=>c(!n)},t.createElement(g,{icon:n?"eye":"eye-hidden",size:s==="lg"?"lg":"md",color:"tertiary"}))),ref:o})};p.__docgenInfo={description:"`PasswordInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.",methods:[],displayName:"PasswordInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},testId:{defaultValue:{value:"'PasswordInput'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["Omit"]};const q={component:p,argTypes:I,args:{label:"Password",size:"md"}},r=e=>{const[s,o]=u.useState(e.value??"");return t.createElement(p,{...e,value:s,onChange:a=>o(a.target.value)})};r.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? '');
  return <PasswordInputComponent {...args} value={value} onChange={(e): void => setValue(e.target.value)} />;
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const $=["PasswordInput"];export{r as PasswordInput,$ as __namedExportsOrder,q as default};
