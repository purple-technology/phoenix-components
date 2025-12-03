import{d as i,j as n}from"./iframe-bef07166.js";import{l as s}from"./rtl-584aedc3.js";import{I as l}from"./index-3f76cd62.js";const r=i.div`
	position: relative;
	padding-inline-start: 28px;
	padding-inline-end: 0;
	padding-top: 7px;
	padding-bottom: 1px;
	color: ${({theme:o,colorTheme:e})=>o.tokens.color.text[e].primary};
	font-size: 12px;
	line-height: 1.2;
`,t=i(l)`
	position: absolute;
	top: 6px;
	${s("5px")}
`,a=({warning:o,error:e})=>n.jsxs(n.Fragment,{children:[!!o&&n.jsxs(r,{colorTheme:"warning",children:[n.jsx(t,{icon:"exclamation-warning",size:"s"}),o]}),!["boolean","undefined"].includes(typeof e)&&e!==""&&n.jsxs(r,{colorTheme:"error",children:[n.jsx(t,{icon:"exclamation-error",size:"s"}),e]})]}),c=a;a.__docgenInfo={description:"",methods:[],displayName:"FormControlWarningError",props:{warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}}};export{c as F};
