import{d as t}from"./iframe-bef07166.js";import{r as a}from"./rtl-584aedc3.js";import{g as o,a as r,b as n}from"./ButtonStyles-4f291526.js";const p=t.div`
	position: relative;
	display: inline-flex;
`,d=t.button`
	${e=>o(e.theme)}
	${e=>r("sm",e.theme)}
	${e=>n(e.theme,"neutral",!1,!0)}
	
	padding-inline-end: 36px;
	font-weight: ${({theme:e})=>e.tokens.ref.fontWeight.regular};
`,m=t.button`
	${e=>o(e.theme)}
	${e=>r("sm",e.theme)}
	${e=>n(e.theme,"neutral",!0)}
	
	&:hover {
		background: ${({theme:e})=>e.tokens.color.background.error.secondaryInteraction};
	}

	position: absolute;
	top: 0;
	${a(0)}
	padding: 0 12px;
	width: 36px;
	background: transparent;
`;export{d as B,m as C,p as W};
