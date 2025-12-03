import{d as g,l as w,j as m,r as h}from"./iframe-bef07166.js";import{C}from"./Color-0aa54fb0.js";import{a as T}from"./Sizing-35dbcd46.js";import{a as q}from"./helpers-ed7a2f24.js";import{B as z}from"./index-66c357df.js";import{g as k,a as V,b as M}from"./ButtonStyles-4f291526.js";import{m as x}from"./SpacingStyles-3467cbc6.js";import"./index-3940132f.js";import"./index-afcb9af5.js";import"./colors-3cc0579a.js";import"./index-3f76cd62.js";const $=g.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	${x}
`,d=g(z)`
	[dir='rtl'] & svg {
		transform: scaleX(-1);
	}

	${({selected:e})=>e===!1?"font-weight: normal;":""}
`,j=g.div`
	${e=>k(e.theme)}
	${e=>V(e.size,e.theme)}
	${e=>M(e.theme,"brand",!0)}

	${({theme:e,size:n})=>{const i=q(e.tokens.inputButton.sizing.height[n])/4;return w`
			padding-left: ${i}px;
			padding-right: ${i}px;
		`}}

	&:hover {
		cursor: default;
		background: transparent;
	}

	${x}
`,c=(e,n)=>{const i=n-e+1;return Array.from({length:i},(l,s)=>e+s)},_=({page:e,totalPages:n})=>{const s=c(1,Math.min(1,n)),a=c(Math.max(n-1+1,1+1),n),o=Math.max(Math.min(e-1,n-1-1*2-1),1+2),t=Math.min(Math.max(e+1,1+1*2+2),a.length>0?a[0]-2:n-1);return[...s,...o>1+2?["ellipsis-start"]:1+1<n-1?[1+1]:[],...c(o,t),...t<n-1-1?["ellipsis-end"]:n-1>1?[n-1]:[],...a]},b=({testId:e="Pagination",size:n="md",colorTheme:i="brand",previousLabel:l="Previous page",nextLabel:s="Next page",page:a,totalPages:o,onChange:t,...P})=>{const v=_({page:a,totalPages:o}),p={colorTheme:i,size:n,mx:"3xs",mb:"2xs"};return m.jsxs($,{mx:"-4px",...P,"data-testid":e,children:[m.jsx(d,{...p,disabled:a<=1,onClick:()=>t(a-1),icon:"arrow-left",secondary:!0,children:l}),v.map(r=>typeof r=="string"?m.jsx(j,{size:n,mb:p.mb,children:"..."},r):h.createElement(d,{...p,key:r,onClick:()=>t(r),selected:a===r,secondary:a!==r},r)),m.jsx(d,{...p,disabled:a>=o,onClick:()=>t(a+1),icon:"arrow-right",iconAlignment:"right",secondary:!0,children:s})]})};b.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pagination'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"number"},description:""},previousLabel:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"'Previous page'",computed:!1}},nextLabel:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"'Next page'",computed:!1}},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"Sizing"},description:"",defaultValue:{value:"'md'",computed:!1}}}};const F={title:"components / Pagination",component:b,argTypes:{colorTheme:{control:"select",options:C},size:{control:"radio",options:T}},args:{totalPages:10,page:1,previousLabel:"Previous page",nextLabel:"Next page"}},u=e=>{const[n,i]=h.useState(1);return m.jsx(b,{...e,page:n,onChange:i})};u.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var S,y,f;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [page, setPage] = useState(1);
  return <PaginationComponent {...args} page={page} onChange={setPage} />;
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["Pagination"];export{u as Pagination,G as __namedExportsOrder,F as default};
