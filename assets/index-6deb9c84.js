import{s as d,e as t}from"./iframe-967d279e.js";import{i as p}from"./angle-down-c5ec8aca.js";import{g as f,u as g,F as y,b as v}from"./useFormControl-b135524d.js";import{S as h}from"./index-e1d7f538.js";import{r as b}from"./rtl-f9a8c78b.js";const T=d(h)`
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
`,S=({testId:n="SelectNative",size:i="md",options:r=[],...e})=>{var o;const{focused:l,thisOnFocus:m,thisOnBlur:u}=g(e.onFocus,e.onBlur),c=a=>{e.onChange(r.find(s=>s.value===a.target.value)??null)};return t.createElement(y,{label:e.label,success:e.success,warning:e.warning,error:e.error,contentRight:e.contentRight,className:e.className,size:i,disabled:e.disabled,filled:!!e.value,focused:l,minimal:e.minimal,testId:n},t.createElement(w,{focused:l,disabled:e.disabled},t.createElement(v,{onFocus:m,onBlur:u,onChange:c,value:(o=e.value)==null?void 0:o.value,focused:l,disabled:e.disabled,$size:i},!e.value&&t.createElement("option",null),r.map((a,s)=>t.createElement("option",{key:s,value:a.value,disabled:a.isDisabled},a.label))),t.createElement(T,{src:p,disabled:e.disabled})))};S.__docgenInfo={description:"",methods:[],displayName:"SelectNative",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SelectNative'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"Text displayed inside the input field"},success:{required:!1,tsType:{name:"boolean"},description:"Green border and checkmark visible"},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"},contentRight:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Content to display on the right in LTR and on the left in RTL mode"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display when input is focused"},size:{required:!1,tsType:{name:"Sizing"},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: Option | null) => void",signature:{arguments:[{type:{name:"union",raw:"Option | null",elements:[{name:"Option"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"Option | null",elements:[{name:"Option"},{name:"null"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFocus:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"FocusEventHandler<HTMLSelectElement>"},description:""},onBlur:{required:!1,tsType:{name:"FocusEventHandler",elements:[{name:"HTMLSelectElement"}],raw:"FocusEventHandler<HTMLSelectElement>"},description:""}}};export{S};
