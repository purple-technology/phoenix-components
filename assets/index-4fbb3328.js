import{s as o,C as y,r as b,e as s}from"./iframe-d0511029.js";import{F as I}from"./index-d254163b.js";import{a as p}from"./helpers-4992d6b4.js";import{l as w}from"./rtl-bf1a4ec1.js";import{S as M}from"./CheckboxStyles-f50ee76b.js";const h=(e,t)=>(p(t.tokens.inputButton.sizing.height[e])-2-p(t.tokens.checkboxRadio.sizing.md))/2,E=(e,t,i,a)=>a?e.tokens.color.text.quaternary:i?e.tokens.color.text[t].primary:e.tokens.color.text.secondary,V=o.div`
	display: grid;
	grid-template-columns: ${({optionsLength:e})=>`repeat(${e}, minmax(100px, 300px))`};
	grid-column-gap: ${({size:e})=>e==="md"?16:24}px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-row-gap: 20px;
		max-width: 100%;
	}
`,W=o.div`
	font-size: 12px;
	color: ${e=>E(e.theme,e.colorTheme,e.checked,e.isDisabled)};
	margin-top: 4px;
	font-weight: normal;
	opacity: 0.75;
`,B=o.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,F=o.div`
	display: flex;
	position: relative;
	min-height: ${({size:e,theme:t})=>t.tokens.inputButton.sizing.height[e]};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${({withImage:e,checked:t,size:i,theme:a})=>{const d=h(i,a),m=p(a.tokens.checkboxRadio.sizing.md),l=(p(a.tokens.inputButton.sizing.height[i])-2-16)/2;return e?y`
				padding: ${l+4}px ${d}px;
			`:t?y`
					padding-top: ${l}px;
					padding-inline-end: ${d}px;
					padding-bottom: ${l}px;
					padding-inline-start: ${2*d+m}px;
			  `:y`
					padding: ${l}px ${d}px;
			  `}};
	text-align: center;
	border: 1px solid;
	background: ${({theme:e})=>e.tokens.color.background.primary};
	color: ${e=>E(e.theme,e.colorTheme,e.checked,e.isDisabled)};
	border-color: ${({isDisabled:e,checked:t,colorTheme:i,theme:a})=>e?a.tokens.color.border.secondary:t?a.tokens.color.border[i].primary:a.tokens.color.border.primary};
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
`,N=o.img`
	max-width: ${({imageSize:e,size:t})=>e??(t==="md"?"48px":"64px")};
	max-height: ${({imageSize:e,size:t})=>e??(t==="md"?"48px":"64px")};
	margin-bottom: 12px;
	opacity: ${({isDisabled:e})=>e?.25:1};
	width: 100%;
	height: 100%;
	object-fit: contain;
`,j=o(M)`
	position: absolute;
	top: ${({size:e,theme:t})=>h(e,t)}px;
	${({size:e,theme:t})=>w(`${h(e,t)}px`)};
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
`,_=({colorTheme:e="brand",size:t="md",multiSelect:i=!1,testId:a="SelectPicker",imageSize:d,options:m,name:l,onChange:k,value:g,error:T,warning:q,onMouseOver:f,onMouseLeave:x,className:S})=>{const D=i&&Array.isArray(g)?g:[],[c,v]=b.useState(D),[$,C]=b.useState(!1);b.useEffect(()=>{if(i&&$)return k(c);$||C(!0)},[c]);const O=n=>{if(!i)k(n.value);else if(c.includes(n.value)){const r=c.filter(A=>A!==n.value);v(r)}else v([...c,n.value])},u=n=>i?c.includes(n.value):g===n.value,R=n=>n?n.map(r=>s.createElement(F,{multiSelect:i,key:r.value,checked:u(r),onClick:()=>O(r),withImage:r.image,colorTheme:e,size:t,hasDescription:!!r.description,isDisabled:r.isDisabled},s.createElement(j,{colorTheme:e,size:t,checked:u(r)},s.createElement("input",{type:i?"checkbox":"radio",style:{display:"none"},value:r.value,name:l,checked:u(r),readOnly:!0,disabled:r.isDisabled}),s.createElement("label",null)),s.createElement(B,null,r.image&&s.createElement(N,{src:r.image,size:t,isDisabled:r.isDisabled,imageSize:d}),s.createElement(L,null,r.label??r.value)),r.description&&s.createElement(W,{checked:u(r),colorTheme:e,isDisabled:r.isDisabled},r.description))):null,P=n=>{n.persist(),f==null||f(n)},z=n=>{n.persist(),x==null||x(n)};return s.createElement("div",{className:S,"data-testid":a},s.createElement(V,{optionsLength:m.length,onMouseOver:P,onMouseLeave:z,size:t},R(m)),s.createElement(I,{warning:q,error:T}))};_.__docgenInfo={description:"",methods:[],displayName:"SelectPicker",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'SelectPicker'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: string[] | string) => void",signature:{arguments:[{type:{name:"union",raw:"string[] | string",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"}]},name:"selected"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectPickerOption"}],raw:"Array<SelectPickerOption>"},description:""},name:{required:!1,tsType:{name:"string"},description:""},multiSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},warning:{required:!1,tsType:{name:"string"},description:""},onMouseOver:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"SizingMdLg"},description:"",defaultValue:{value:"'md'",computed:!1}},imageSize:{required:!1,tsType:{name:"string"},description:"Determines the max-width and max-height property of the <img> tag"}}};export{_ as S};
