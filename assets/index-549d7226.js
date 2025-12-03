import{d as m,l as s,r,j as t}from"./iframe-bef07166.js";import{R as T}from"./index-5bc7f631.js";import{c as q}from"./helpers-ed7a2f24.js";import{i as V}from"./Sizing-35dbcd46.js";import{B as z}from"./index-66c357df.js";import{m as M,p as $}from"./SpacingStyles-3467cbc6.js";const R=m.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	z-index: 9000;
	background: ${({theme:e})=>e.tokens.modal.color.background.overlay};
	opacity: ${({visible:e})=>e?1:0};
	${({theme:e,animate:n})=>n?s`
					transition: opacity ${e.tokens.duration.transition.base};
			  `:s``}
`,j=m.div`
	display: flex;
	justify-content: center;
	align-items: ${({center:e})=>e?"center":"flex-start"};
	min-height: 100%;
`,B=m.div`
	border-radius: ${({theme:e})=>e.tokens.modal.borderRadius};
	box-shadow: ${({theme:e})=>q(e.tokens.modal.boxShadow)};
	background: ${({theme:e})=>e.tokens.color.background.primary};
	position: relative;
	${({theme:e,animate:n})=>n?s`
					transition: transform ${e.tokens.duration.transition.base};
			  `:s``}
	transform: ${({visible:e})=>e?"translateY(0)":"translateY(-20px)"};
	width: 100%;
	min-height: 58px;
	max-width: ${({theme:e,$size:n})=>V(n)?e.tokens.modal.sizing.maxWidth[n]:typeof n=="number"?`${n}px`:n};

	${M}
	${$}
`,E=m(z)`
	position: absolute;
	top: 1rem;
	padding: 4px;
	min-height: 30px;

	right: 1rem;
	[dir='rtl'] & {
		right: initial;
		left: 1rem;
	}
`,L=({testId:e="Modal",size:n="md",center:w=!0,animate:d=!0,showCloseButton:x=!0,closeOnOverlayClick:y=!0,container:c,open:i,onClose:o,children:h,...v})=>{const[u,p]=r.useState(i),[C,S]=r.useState(i),l=r.useRef(null),k=a=>{var b;a.stopPropagation(),!((b=l.current)!=null&&b.contains(a.target))&&o&&y&&o()};if(r.useEffect(()=>{var a;i?p(!0):(S(!1),d?(a=l.current)==null||a.addEventListener("transitionend",()=>p(!1)):p(!1))},[i]),r.useEffect(()=>{u&&setTimeout(()=>S(!0),1)},[u]),!u&&!i)return null;const g={visible:C,animate:d},f=t.jsx(R,{...g,onClick:k,"data-testid":e,children:t.jsx(j,{center:w,children:t.jsxs(B,{$size:n,my:"3xl",p:"md",...g,...v,ref:l,children:[x&&t.jsx(E,{minimal:!0,size:"lg",icon:"cross",onClick:o,colorTheme:"neutral"}),h]})})});return c?T.createPortal(f,c):f};L.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Modal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},pl:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},pb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},px:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},py:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},p:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop."},ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"Sizing | CSSValue",elements:[{name:"Sizing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"",defaultValue:{value:"'md'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},center:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},container:{required:!1,tsType:{name:"Element"},description:""}}};export{L as M};
