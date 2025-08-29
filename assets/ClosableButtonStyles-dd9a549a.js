import{s as t}from"./iframe-22864007.js";import{r as s}from"./rtl-a2dddcc3.js";import{g as o,a as r,b as n}from"./ButtonStyles-b1115345.js";const p=t.div`
	position: relative;
	display: inline-flex;
`,m=t.button`
	${e=>o(e.theme)}
	${e=>r("sm",e.theme)}
	${e=>n(e.theme,"neutral",!1,!0)}
	
	padding-inline-end: 36px;
	font-weight: ${({theme:e})=>e.tokens.ref.fontWeight.regular};
`,d=t.button`
	${e=>o(e.theme)}
	${e=>r("sm",e.theme)}
	${e=>n(e.theme,"neutral",!0)}
	
	&:hover {
		background: ${({theme:e})=>e.tokens.color.background.error.secondaryInteraction};
	}

	position: absolute;
	top: 0;
	${s(0)}
	padding: 0 12px;
	width: 36px;
	background: transparent;
`;export{m as B,d as C,p as W};
