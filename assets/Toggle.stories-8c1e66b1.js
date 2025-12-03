import{d as m,j as t}from"./iframe-bef07166.js";import{C as k}from"./Color-0aa54fb0.js";import{C as f}from"./index-8225fe0b.js";import{F as h}from"./index-9a14469c.js";import{a as n}from"./helpers-ed7a2f24.js";import{g as d}from"./colors-3cc0579a.js";import{l as $}from"./rtl-584aedc3.js";import"./CheckboxRadioStyles-5c7d460d.js";import"./index-3f76cd62.js";import"./SpacingStyles-3467cbc6.js";const i=o=>(n(o.tokens.toggle.sizing.container.md.height)-n(o.tokens.toggle.sizing.slider.md))/2,x=m.div`
	font-size: 0;

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: 2px;
		padding-inline-start: ${({theme:o})=>`${n(o.tokens.toggle.sizing.container.md.width)+8}px`};
		min-height: ${({theme:o})=>o.tokens.toggle.sizing.container.md.height};
		user-select: none;
		color: ${({theme:o,warning:e,error:r})=>d(o,"text",e,r)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
		display: block;
	}

	// Container
	label::before {
		height: ${({theme:o})=>o.tokens.toggle.sizing.container.md.height};
		width: ${({theme:o})=>o.tokens.toggle.sizing.container.md.width};
		border: 1px solid
			${({theme:o,warning:e,error:r})=>d(o,"border",e,r)??o.tokens.toggle.color.border.container.off};
		background: ${({theme:o})=>o.tokens.toggle.color.background.container.off};
		top: 0;
		${$(0)}
		transition: ${({theme:o})=>`box-shadow ${o.tokens.duration.transition.base}, background-color ${o.tokens.duration.transition.base}, border ${o.tokens.duration.transition.base}`};
		box-shadow: 0 0 0 0
			${({theme:o})=>o.tokens.color.border.focus};
		box-sizing: border-box;
		border-radius: ${({theme:o})=>o.tokens.ref.borderRadius.pill};
	}

	label:hover::before {
		background-color: ${o=>o.theme.tokens.toggle.color.background.container.offInteraction};
		border-color: ${o=>o.theme.tokens.toggle.color.border.container.offInteraction};
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${({theme:o})=>o.tokens.color.border.focus};
	}

	// Slider
	label::after {
		width: ${({theme:o})=>o.tokens.toggle.sizing.slider.md};
		height: ${({theme:o})=>o.tokens.toggle.sizing.slider.md};
		top: ${({theme:o})=>i(o)}px;
		left: ${({theme:o})=>i(o)}px;
		border-radius: ${({theme:o})=>o.tokens.ref.borderRadius.circle};
		background-color: ${({theme:o})=>o.tokens.toggle.color.background.slider.off};
		transition: ${({theme:o})=>`left ${o.tokens.duration.transition.base}, background-color ${o.tokens.duration.transition.base}`};
	}

	// ON state
	input:checked {
		// Container
		+ label::before {
			border-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primary};
			background-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primary};
		}
		+ label:hover::before {
			border-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primaryInteraction};
			background-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primaryInteraction};
		}

		// Slider
		+ label::after {
			background-color: ${({theme:o})=>o.tokens.ref.color.gray[0]};
			left: ${({theme:o})=>n(o.tokens.toggle.sizing.container.md.width)-n(o.tokens.toggle.sizing.slider.md)-i(o)}px;
		}
	}

	// DISABLED (and OFF) state
	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({theme:o})=>o.tokens.color.text.quaternary};
		}
		// Container
		+ label::before {
			background-color: ${({theme:o})=>o.tokens.toggle.color.background.container.offDisabled};
			border-color: ${({theme:o})=>o.tokens.toggle.color.border.container.offDisabled};
		}
	}

	// DISABLED and ON state
	input:disabled:checked {
		// Container
		+ label::before {
			border-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primaryDisabled};
			background-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primaryDisabled};
		}
	}
`,s=({colorTheme:o="brand",className:e,warning:r,error:l,testId:p="Toggle",...u})=>t.jsxs(t.Fragment,{children:[t.jsx(x,{className:e,colorTheme:o,"data-testid":p,warning:!!r,error:!!l,children:t.jsx(f,{type:"checkbox",...u})}),t.jsx(h,{warning:r,error:l})]});s.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Toggle'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}},composes:["Omit"]};const j={component:s,argTypes:{error:{control:"text"},warning:{control:"text"},label:{control:"text"},colorTheme:{options:[void 0,...k],control:"select"}},args:{colorTheme:"brand",label:"Click me",disabled:!1}},a={render:o=>t.jsx(s,{...o,children:o.children})};var c,g,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ToggleComponent {...args}>{args.children}</ToggleComponent>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const q=["Toggle"];export{a as Toggle,q as __namedExportsOrder,j as default};
