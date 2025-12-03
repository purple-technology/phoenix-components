import{m as r,d as t,j as i}from"./iframe-bef07166.js";import{i as p}from"./Sizing-35dbcd46.js";import{a as u}from"./colors-3cc0579a.js";import{m as l}from"./SpacingStyles-3467cbc6.js";const a=(e,n)=>p(e)?n.tokens.spinner.sizing[e]:typeof e=="number"?`${e}px`:e,c=r`
	100% {
    transform: rotate(360deg);
	}
`,d=t.div`
	transform-origin: center center;
	animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) 0ms infinite normal none
		running ${c};
	height: ${({theme:e,size:n})=>a(n,e)};
	width: ${({theme:e,size:n})=>a(n,e)};
	display: inline-flex;
	vertical-align: middle;

	${l}
`,g=r`
	0% {
		transform: rotate(50deg);
		opacity: 0;
		stroke-dashoffset: 60;
	}
	100% {
		transform: rotate(230deg);
		opacity: 1;
		stroke-dashoffset: 50;
	}
`,S=t.svg`
	opacity: 0;
	animation: 1s ease-in-out 0ms 1 normal forwards running ${g};
	fill: none;
	stroke: ${e=>u(e.theme,e.colorTheme,e.light)};
	stroke-width: 2;
	stroke-linecap: round;
	stroke-dasharray: 60;
	stroke-dashoffset: 50;
`,f=({size:e="md",light:n=!1,testId:s="Spinner",colorTheme:m,...o})=>i.jsx(d,{size:e,"data-testid":s,...o,children:i.jsx(S,{height:"100%",width:"100%",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",colorTheme:m,light:n,children:i.jsx("circle",{cx:"8",cy:"8",r:"7"})})});f.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Spinner'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"Sizing | CSSValue",elements:[{name:"Sizing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"",defaultValue:{value:"'md'",computed:!1}},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:""},light:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{f as S,S as V};
