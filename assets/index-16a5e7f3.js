import{d as o,l as y,r as h,j as a}from"./iframe-bef07166.js";import{F as A}from"./index-9a14469c.js";import{a as p}from"./helpers-ed7a2f24.js";import{l as w}from"./rtl-584aedc3.js";import{S as I}from"./CheckboxStyles-e1fde11b.js";const b=(e,t)=>(p(t.tokens.inputButton.sizing.height[e])-2-p(t.tokens.checkboxRadio.sizing.md))/2,T=(e,t,i,s)=>s?e.tokens.color.text.quaternary:i?e.tokens.color.text[t].primary:e.tokens.color.text.secondary,M=o.div`
	display: grid;
	grid-template-columns: ${({optionsLength:e})=>`repeat(${e}, minmax(100px, 300px))`};
	grid-column-gap: ${({size:e})=>e==="md"?16:24}px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-row-gap: 20px;
		max-width: 100%;
	}
`,V=o.div`
	font-size: 12px;
	color: ${e=>T(e.theme,e.colorTheme,e.checked,e.isDisabled)};
	margin-top: 4px;
	font-weight: normal;
	opacity: 0.75;
`,W=o.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,B=o.div`
	display: flex;
	position: relative;
	min-height: ${({size:e,theme:t})=>t.tokens.inputButton.sizing.height[e]};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({withImage:e,checked:t,size:i,theme:s})=>{const d=b(i,s),u=p(s.tokens.checkboxRadio.sizing.md),l=(p(s.tokens.inputButton.sizing.height[i])-2-16)/2;return e?y`
				padding: ${l+4}px ${d}px;
			`:t?y`
					padding-top: ${l}px;
					padding-inline-end: ${d}px;
					padding-bottom: ${l}px;
					padding-inline-start: ${2*d+u}px;
			  `:y`
					padding: ${l}px ${d}px;
			  `}};
	text-align: center;
	border: 1px solid;
	background: ${({theme:e})=>e.tokens.color.background.primary};
	color: ${e=>T(e.theme,e.colorTheme,e.checked,e.isDisabled)};
	border-color: ${({isDisabled:e,checked:t,colorTheme:i,theme:s})=>e?s.tokens.color.border.secondary:t?s.tokens.color.border[i].primary:s.tokens.color.border.primary};
	font-weight: ${({hasDescription:e,theme:t})=>e?t.tokens.ref.fontWeight.bold:t.tokens.ref.fontWeight.regular};
	border-radius: 4px;
	transition: ${({theme:e})=>`border ${e.tokens.duration.transition.base}, padding ${e.tokens.duration.transition.base}`};
	cursor: ${({checked:e,multiSelect:t})=>e&&!t?"default":"pointer"};
	user-select: none;

	${({checked:e,theme:t})=>e?"":`
		&:hover {
			border-color: ${t.tokens.color.border.primaryInteraction};
		} 
	`}

	${({isDisabled:e})=>e?`
		pointer-events: none;
	`:""}
`,F=o.img`
	max-width: ${({imageSize:e,size:t})=>e??(t==="md"?"48px":"64px")};
	max-height: ${({imageSize:e,size:t})=>e??(t==="md"?"48px":"64px")};
	margin-bottom: 12px;
	opacity: ${({isDisabled:e})=>e?.25:1};
	width: 100%;
	height: 100%;
	object-fit: contain;
`,N=o(I)`
	position: absolute;
	top: ${({size:e,theme:t})=>b(e,t)}px;
	${({size:e,theme:t})=>w(`${b(e,t)}px`)};
	visibility: ${({checked:e})=>e?"visible":"hidden"};
	pointer-events: none;
`;o.div`
	color: ${({theme:e})=>e.tokens.color.text.error.primary};
	padding: 5px 0;
	font-size: 13px;
	margin-top: 5px;
`;const L=o.div`
	${w("-5%")}
	transform: translateX(6%);
	position: relative;
`,_=({colorTheme:e="brand",size:t="md",multiSelect:i=!1,testId:s="SelectPicker",imageSize:d,options:u,name:l,onChange:k,value:g,error:j,warning:q,onMouseOver:f,onMouseLeave:x,className:S})=>{const D=i&&Array.isArray(g)?g:[],[c,v]=h.useState(D),[$,R]=h.useState(!1);h.useEffect(()=>{if(i&&$)return k(c);$||R(!0)},[c]);const E=n=>{if(!i)k(n.value);else if(c.includes(n.value)){const r=c.filter(C=>C!==n.value);v(r)}else v([...c,n.value])},m=n=>i?c.includes(n.value):g===n.value,O=n=>n?n.map(r=>a.jsxs(B,{multiSelect:i,checked:m(r),onClick:()=>E(r),withImage:r.image,colorTheme:e,size:t,hasDescription:!!r.description,isDisabled:r.isDisabled,children:[a.jsxs(N,{colorTheme:e,size:t,checked:m(r),children:[a.jsx("input",{type:i?"checkbox":"radio",style:{display:"none"},value:r.value,name:l,checked:m(r),readOnly:!0,disabled:r.isDisabled}),a.jsx("label",{})]}),a.jsxs(W,{children:[r.image&&a.jsx(F,{src:r.image,size:t,isDisabled:r.isDisabled,imageSize:d}),a.jsx(L,{children:r.label??r.value})]}),r.description&&a.jsx(V,{checked:m(r),colorTheme:e,isDisabled:r.isDisabled,children:r.description})]},r.value)):null,P=n=>{n.persist(),f==null||f(n)},z=n=>{n.persist(),x==null||x(n)};return a.jsxs("div",{className:S,"data-testid":s,children:[a.jsx(M,{optionsLength:u.length,onMouseOver:P,onMouseLeave:z,size:t,children:O(u)}),a.jsx(A,{warning:q,error:j})]})};_.__docgenInfo={description:"",methods:[],displayName:"SelectPicker",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SelectPicker'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: string[] | string) => void",signature:{arguments:[{type:{name:"union",raw:"string[] | string",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"}]},name:"selected"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectPickerOption"}],raw:"Array<SelectPickerOption>"},description:""},name:{required:!1,tsType:{name:"string"},description:""},multiSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},warning:{required:!1,tsType:{name:"string"},description:""},onMouseOver:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"SizingMdLg"},description:"",defaultValue:{value:"'md'",computed:!1}},imageSize:{required:!1,tsType:{name:"string"},description:"Determines the max-width and max-height property of the <img> tag"}}};export{_ as S};
