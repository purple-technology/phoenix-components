import{s as i,e}from"./iframe-967d279e.js";import{l}from"./rtl-f9a8c78b.js";import{I as s}from"./index-e1d7f538.js";const t=i.div`
	position: relative;
	padding-inline-start: 28px;
	padding-inline-end: 0;
	padding-top: 7px;
	padding-bottom: 1px;
	color: ${({theme:o,colorTheme:n})=>o.tokens.color.text[n].primary};
	font-size: 12px;
	line-height: 1.2;
`,r=i(s)`
	position: absolute;
	top: 6px;
	${l("5px")}
`,a=({warning:o,error:n})=>e.createElement(e.Fragment,null,!!o&&e.createElement(t,{colorTheme:"warning"},e.createElement(r,{icon:"exclamation-warning",size:"s"}),o),!["boolean","undefined"].includes(typeof n)&&n!==""&&e.createElement(t,{colorTheme:"error"},e.createElement(r,{icon:"exclamation-error",size:"s"}),n)),d=a;a.__docgenInfo={description:"",methods:[],displayName:"FormControlWarningError",props:{warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}}};export{d as F};
