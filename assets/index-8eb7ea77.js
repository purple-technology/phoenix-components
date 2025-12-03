import{d,j as t}from"./iframe-bef07166.js";import{i as p}from"./angle-down-c5ec8aca.js";import{g as f,u as g,F as h,b as v}from"./useFormControl-7b675c3c.js";import{S as y}from"./index-3f76cd62.js";import{r as b}from"./rtl-584aedc3.js";const T=d(y)`
	${({theme:n})=>b(n.tokens.input.spacing.x)};

	position: absolute;
	width: 10px;
	height: 6px;
	top: 0;
	bottom: 0;
	margin: auto;
	pointer-events: none;
	${({disabled:n,theme:i})=>n?`
			path {
				fill: ${i.tokens.color.text.quaternary};
			}
		`:""}
`,w=d.div.attrs({className:"select-native-wrapper"})`
	position: relative;
	width: 100%;
	${n=>f(n.theme,n.focused,n.disabled)}
`,S=({testId:n="SelectNative",size:i="md",options:r=[],...e})=>{var o;const{focused:s,thisOnFocus:u,thisOnBlur:m}=g(e.onFocus,e.onBlur),c=a=>{e.onChange(r.find(l=>l.value===a.target.value)??null)};return t.jsx(h,{label:e.label,success:e.success,warning:e.warning,error:e.error,contentRight:e.contentRight,className:e.className,size:i,disabled:e.disabled,filled:!!e.value,focused:s,minimal:e.minimal,testId:n,children:t.jsxs(w,{focused:s,disabled:e.disabled,children:[t.jsxs(v,{onFocus:u,onBlur:m,onChange:c,value:(o=e.value)==null?void 0:o.value,focused:s,disabled:e.disabled,$size:i,children:[!e.value&&t.jsx("option",{}),r.map((a,l)=>t.jsx("option",{value:a.value,disabled:a.isDisabled,children:a.label},l))]}),t.jsx(T,{src:p,disabled:e.disabled})]})})};S.__docgenInfo={description:"",methods:[],displayName:"SelectNative",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SelectNative'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"Text displayed inside the input field"},success:{required:!1,tsType:{name:"boolean"},description:"Green border and checkmark visible"},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"},contentRight:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Content to display on the right in LTR and on the left in RTL mode"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display when input is focused"},size:{required:!1,tsType:{name:"Sizing"},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: Option | null) => void",signature:{arguments:[{type:{name:"union",raw:"Option | null",elements:[{name:"Option"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"Option | null",elements:[{name:"Option"},{name:"null"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"FocusEventHandler<HTMLSelectElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"FocusEventHandler<HTMLSelectElement>"},description:""}}};export{S};
