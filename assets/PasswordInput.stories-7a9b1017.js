import{d as f,r as l,j as t}from"./iframe-bef07166.js";import{a as I}from"./stories-5d325111.js";import{F as d}from"./index-007cde26.js";import{I as g}from"./index-3f76cd62.js";import{T as x}from"./index-2b2adb63.js";import"./Sizing-35dbcd46.js";import"./index-643a9259.js";import"./index.esm-08e1df75.js";import"./SpacingStyles-3467cbc6.js";import"./TextStyles-858d76bf.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./useFormControl-7b675c3c.js";import"./check-9c2d93e5.js";import"./index-9a14469c.js";import"./rtl-584aedc3.js";const w=f(d)`
	cursor: pointer;

	&:hover path {
		transition: fill
			${({theme:e})=>e.tokens.duration.transition.base};
		fill: ${({theme:e})=>e.tokens.color.text.primary};
	}
`,p=({testId:e="PasswordInput",size:r="md",ref:o,...a})=>{const[n,c]=l.useState(!1);return t.jsx(x,{...a,testId:e,size:r,type:n?"text":"password",contentRight:t.jsx(d,{height:"100%",alignItems:"center",children:t.jsx(w,{onClick:()=>c(!n),children:t.jsx(g,{icon:n?"eye":"eye-hidden",size:r==="lg"?"lg":"md",color:"tertiary"})})}),ref:o})};p.__docgenInfo={description:"`PasswordInput` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.",methods:[],displayName:"PasswordInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},testId:{defaultValue:{value:"'PasswordInput'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["Omit"]};const k={component:p,argTypes:I,args:{label:"Password",size:"md"}},s=e=>{const[r,o]=l.useState(e.value??"");return t.jsx(p,{...e,value:r,onChange:a=>o(a.target.value)})};s.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? '');
  return <PasswordInputComponent {...args} value={value} onChange={(e): void => setValue(e.target.value)} />;
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const q=["PasswordInput"];export{s as PasswordInput,q as __namedExportsOrder,k as default};
