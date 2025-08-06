import{s as f,r as u,e as t}from"./iframe-967d279e.js";import{a as I}from"./stories-5d325111.js";import{F as d}from"./index-86eff72b.js";import{I as g}from"./index-e1d7f538.js";import{T as w}from"./index-92673e72.js";import"./Sizing-35dbcd46.js";import"./index-52e8b132.js";import"./index.esm-55c8321e.js";import"./SpacingStyles-2ec446a3.js";import"./TextStyles-74717613.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./useFormControl-b135524d.js";import"./check-9c2d93e5.js";import"./index-9fae1e2e.js";import"./rtl-f9a8c78b.js";const v=f(d)`
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
