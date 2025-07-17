import{s as o,C as d,e as i}from"./iframe-a6e3c2ce.js";import{c as w}from"./check-9c2d93e5.js";import{F as T}from"./index-54c3e827.js";import{S as v}from"./index-21f1dd54.js";import{a as p}from"./helpers-4992d6b4.js";import{l as E}from"./rtl-1d99c733.js";const m=(e,t)=>e.tokens.inputButton.sizing.height[t],u=(e,t)=>(p(m(e,t))-p(e.tokens.fontSize.base))/2,R=o.div`
	position: relative;
	width: 100%;
`,q=o.label`
	top: 0;
	position: absolute;
	transition: ${({theme:e})=>`color ${e.tokens.duration.transition.base}, transform ${e.tokens.duration.transition.base}`};
	z-index: 1;
	pointer-events: none;
	line-height: 1;
	color: ${e=>e.disabled?e.theme.tokens.color.text.quaternary:e.error?e.theme.tokens.color.text.error.primary:e.warning?e.theme.tokens.color.text.warning.primary:e.theme.tokens.color.text.tertiary};

	${E(0)}
	transform-origin: top left;
	[dir='rtl'] && {
		transform-origin: top right;
	}

	${({theme:e,focused:t,filled:n,size:r})=>t||n?d`
					transform: translate(${e.tokens.input.spacing.x}, -6px)
						scale(0.857);
					[dir='rtl'] && {
						transform: translate(-${e.tokens.input.spacing.x}, -6px)
							scale(0.857);
					}
			  `:d`
					transform: translate(
							${e.tokens.input.spacing.x},
							${u(e,r)}px
						)
						scale(1);
					[dir='rtl'] && {
						transform: translate(
								-${e.tokens.input.spacing.x},
								${u(e,r)}px
							)
							scale(1);
					}
			  `};
`,C=o.div`
	position: relative;
	display: flex;
`,S=(e,t,n,r,s,l,a)=>t?e.tokens.color.border.focus:n?"transparent":r?e.tokens.color.border.secondary:a?e.tokens.color.border.error.primary:l?e.tokens.color.border.warning.primary:s?e.tokens.color.border.success.primary:e.tokens.color.border.primary,F=(e,t,n)=>!t&&!n?d`
				&:hover + fieldset {
					border-color: ${e.tokens.color.border.primaryInteraction};
				}
		  `:d``,f=(e,t,n,r)=>d`
	flex: 1;
	font: inherit;
	border: 0;
	width: 100%;
	margin: 0;
	display: block;
	background: ${e.tokens.color.background.primary};
	border-radius: ${e.tokens.inputButton.borderRadius[t]};
	color: currentColor;
	min-width: 0;
	letter-spacing: inherit;
	-webkit-tap-highlight-color: transparent;

	&:focus {
		outline: none;
	}

	${F(e,n,r)}
`,G=o.input`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>`
		height: ${m(e,t)};
		padding: 0 ${e.tokens.input.spacing.x};
	`}
`,_=o.textarea`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>`
		padding: ${u(e,t)}px ${e.tokens.input.spacing.x};
	`}
`,U=o.select`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>`
		height: ${m(e,t)};
		padding-inline-start: ${e.tokens.input.spacing.x}};
		padding-inline-end: ${p(e.tokens.input.spacing.x)+20}px;
	`}
	
	appearance: none;
`,N=o.fieldset`
	position: absolute;
	left: 0;
	top: -5px;
	right: 0;
	bottom: 0;
	border-style: solid;
	pointer-events: none;
	margin: 0;
	padding: 0
		${({theme:e})=>p(e.tokens.input.spacing.x)-7}px;
	overflow: hidden;
	border-radius: ${({size:e,theme:t})=>t.tokens.inputButton.borderRadius[e]};
	transition: border-color
		${({theme:e})=>e.tokens.duration.transition.base};
	border-width: ${({theme:e,focused:t})=>t?e.tokens.borderWidth.focus:e.tokens.input.borderWidth};
	border-color: ${e=>S(e.theme,e.focused,e.minimal,e.disabled,e.success,e.warning,e.error)};
`,z=o.legend`
	width: auto;
	height: 11px;
	display: block;
	padding: 0;
	font-size: 0.857em;
	text-align: start;
	visibility: hidden;

	${({focused:e,filled:t,label:n})=>(e||t)&&n?`
		max-width: 1000px;
		transition: max-width .1s ease-in-out 50ms;
	`:`
		max-width: 0.01px;
		transition: max-width 0.05s;
	`}

	span {
		display: inline-block;
		padding-inline-start: 5px;
		padding-inline-end: 5px;
	}
`,I=o.div`
	transition: ${({theme:e})=>`opacity ${e.tokens.duration.transition.base}, transform ${e.tokens.duration.transition.base}`};
	transform: translateY(-5px);
	opacity: 0;
	font-size: 12px;
	color: ${({theme:e})=>e.tokens.color.text.tertiary};
	position: absolute;
	padding: 5px 0;
	${({focused:e})=>e?`
		opacity: 1;
		transform: translateY(0);
		`:""}
`,L=o.div`
	line-height: ${({theme:e,size:t})=>m(e,t)};
	padding-inline-end: ${({theme:e})=>e.tokens.input.spacing.x};
	color: ${({theme:e})=>e.tokens.color.text.tertiary};
`,W=o(v)`
	margin-inline-end: ${({theme:e})=>e.tokens.input.spacing.x};
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({theme:e,$size:t})=>`${u(e,t)+3}`}px;
	path {
		fill: ${e=>e.theme.tokens.color.text.success.primary};
	}
`,k=({size:e="md",success:t,warning:n,error:r,contentRight:s,helperText:l,className:a,disabled:b=!1,focused:c,minimal:y,filled:x,testId:h,...$})=>{const g=e!=="xs"?$.label:void 0;return i.createElement(R,{"data-testid":h,className:a},i.createElement(q,{focused:c,warning:!!n,error:!!r,filled:x,disabled:b,size:e},g),i.createElement(C,null,$.children,i.createElement(N,{focused:c,minimal:y,error:!!r,success:t,warning:!!n,disabled:b,size:e},i.createElement(z,{focused:c,filled:x,label:g},i.createElement("span",null,g))),t&&i.createElement(W,{$size:e,src:w}),s&&i.createElement(L,{size:e},s)),l&&!r&&!n&&i.createElement(I,{focused:c},l),i.createElement(T,{warning:n,error:r}))},j=k;k.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{testId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"Text displayed inside the input field"},success:{required:!1,tsType:{name:"boolean"},description:"Green border and checkmark visible"},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"},contentRight:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Content to display on the right in LTR and on the left in RTL mode"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display when input is focused"},size:{required:!1,tsType:{name:"Sizing"},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};function D(e,t){const[n,r]=i.useState(!1);return{focused:n,thisOnFocus:a=>{r(!0),e==null||e(a)},thisOnBlur:a=>{r(!1),t==null||t(a)}}}export{j as F,G as S,_ as a,U as b,F as g,D as u};
