import{s as m,C as s,r,e as t}from"./iframe-d0511029.js";import{R as T}from"./index-0eb4885c.js";import{c as q}from"./helpers-4992d6b4.js";import{i as V}from"./Sizing-35dbcd46.js";import{B as z}from"./index-f1bdfe6b.js";import{m as M,p as $}from"./SpacingStyles-66d9a443.js";const E=m.div`
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
`,R=m.div`
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
`,L=m(z)`
	position: absolute;
	top: 1rem;
	padding: 4px;
	min-height: 30px;

	right: 1rem;
	[dir='rtl'] & {
		right: initial;
		left: 1rem;
	}
`,O=({testId:e="Modal",size:n="md",center:w=!0,animate:d=!0,showCloseButton:y=!0,closeOnOverlayClick:x=!0,container:c,open:a,onClose:o,children:h,...v})=>{const[u,p]=r.useState(a),[C,S]=r.useState(a),l=r.useRef(null),k=i=>{var b;i.stopPropagation(),!((b=l.current)!=null&&b.contains(i.target))&&o&&x&&o()};if(r.useEffect(()=>{var i;a?p(!0):(S(!1),d?(i=l.current)==null||i.addEventListener("transitionend",()=>p(!1)):p(!1))},[a]),r.useEffect(()=>{u&&setTimeout(()=>S(!0),1)},[u]),!u&&!a)return null;const g={visible:C,animate:d},f=t.createElement(E,{...g,onClick:k,"data-testid":e},t.createElement(R,{center:w},t.createElement(B,{ref:l,$size:n,my:"3xl",p:"md",...g,...v},y&&t.createElement(L,{minimal:!0,size:"lg",icon:"cross",onClick:o,colorTheme:"neutral"}),h)));return c?T.createPortal(f,c):f};O.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Modal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},pl:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},pb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},px:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},py:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},p:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop."},ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"Sizing | CSSValue",elements:[{name:"Sizing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"",defaultValue:{value:"'md'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},center:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},container:{required:!1,tsType:{name:"Element"},description:""}}};export{O as M};
