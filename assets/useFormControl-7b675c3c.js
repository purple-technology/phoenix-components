import{d as i,l as a,j as o,e as w}from"./iframe-bef07166.js";import{c as T}from"./check-9c2d93e5.js";import{F as v}from"./index-9a14469c.js";import{S as R}from"./index-3f76cd62.js";import{a as p}from"./helpers-ed7a2f24.js";import{l as q}from"./rtl-584aedc3.js";const m=(e,t)=>e.tokens.inputButton.sizing.height[t],u=(e,t)=>(p(m(e,t))-p(e.tokens.fontSize.base))/2,S=i.div`
	position: relative;
	width: 100%;
`,j=i.label`
	top: 0;
	position: absolute;
	transition: ${({theme:e})=>`color ${e.tokens.duration.transition.base}, transform ${e.tokens.duration.transition.base}`};
	z-index: 1;
	pointer-events: none;
	line-height: 1;
	color: ${e=>e.disabled?e.theme.tokens.color.text.quaternary:e.error?e.theme.tokens.color.text.error.primary:e.warning?e.theme.tokens.color.text.warning.primary:e.theme.tokens.color.text.tertiary};

	${q(0)}
	transform-origin: top left;
	[dir='rtl'] && {
		transform-origin: top right;
	}

	${({theme:e,focused:t,filled:n,size:r})=>t||n?a`
					transform: translate(${e.tokens.input.spacing.x}, -6px)
						scale(0.857);
					[dir='rtl'] && {
						transform: translate(-${e.tokens.input.spacing.x}, -6px)
							scale(0.857);
					}
			  `:a`
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
`,C=i.div`
	position: relative;
	display: flex;
`,F=(e,t,n,r,l,d,s)=>t?e.tokens.color.border.focus:n?"transparent":r?e.tokens.color.border.secondary:s?e.tokens.color.border.error.primary:d?e.tokens.color.border.warning.primary:l?e.tokens.color.border.success.primary:e.tokens.color.border.primary,N=(e,t,n)=>!t&&!n?a`
				&:hover + fieldset {
					border-color: ${e.tokens.color.border.primaryInteraction};
				}
		  `:a``,f=(e,t,n,r)=>a`
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

	${N(e,n,r)}
`,G=i.input`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>`
		height: ${m(e,t)};
		padding: 0 ${e.tokens.input.spacing.x};
	`}
`,_=i.textarea`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>`
		padding: ${u(e,t)}px ${e.tokens.input.spacing.x};
	`}
`,U=i.select`
	${e=>f(e.theme,e.$size,e.focused,e.disabled)}

	${({theme:e,$size:t})=>a`
		padding-inline-end: ${p(e.tokens.input.spacing.x)+20}px;
		height: ${m(e,t)};
		padding-inline-start: ${e.tokens.input.spacing.x};
	`}
	
	appearance: none;
`,z=i.fieldset`
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
	border-color: ${e=>F(e.theme,e.focused,e.minimal,e.disabled,e.success,e.warning,e.error)};
`,E=i.legend`
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
`,I=i.div`
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
`,L=i.div`
	line-height: ${({theme:e,size:t})=>m(e,t)};
	padding-inline-end: ${({theme:e})=>e.tokens.input.spacing.x};
	color: ${({theme:e})=>e.tokens.color.text.tertiary};
`,W=i(R)`
	margin-inline-end: ${({theme:e})=>e.tokens.input.spacing.x};
	/** Add 3px from the top so the checkmark icon is vertically centered to the text. */
	margin-top: ${({theme:e,$size:t})=>`${u(e,t)+3}`}px;
	path {
		fill: ${e=>e.theme.tokens.color.text.success.primary};
	}
`,$=({size:e="md",success:t,warning:n,error:r,contentRight:l,helperText:d,className:s,disabled:x=!1,focused:c,minimal:k,filled:b,testId:y,...h})=>{const g=e!=="xs"?h.label:void 0;return o.jsxs(S,{"data-testid":y,className:s,children:[o.jsx(j,{focused:c,warning:!!n,error:!!r,filled:b,disabled:x,size:e,children:g}),o.jsxs(C,{children:[h.children,o.jsx(z,{focused:c,minimal:k,error:!!r,success:t,warning:!!n,disabled:x,size:e,children:o.jsx(E,{focused:c,filled:b,label:g,children:o.jsx("span",{children:g})})}),t&&o.jsx(W,{$size:e,src:T}),l&&o.jsx(L,{size:e,children:l})]}),d&&!r&&!n&&o.jsx(I,{focused:c,children:d}),o.jsx(v,{warning:n,error:r})]})},D=$;$.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{testId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"Text displayed inside the input field"},success:{required:!1,tsType:{name:"boolean"},description:"Green border and checkmark visible"},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"},contentRight:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Content to display on the right in LTR and on the left in RTL mode"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display when input is focused"},size:{required:!1,tsType:{name:"Sizing"},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};function J(e,t){const[n,r]=w.useState(!1);return{focused:n,thisOnFocus:s=>{r(!0),e==null||e(s)},thisOnBlur:s=>{r(!1),t==null||t(s)}}}export{D as F,G as S,_ as a,U as b,N as g,J as u};
