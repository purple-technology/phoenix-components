import{s as u,e as t}from"./iframe-3d4a8e97.js";import{C as k}from"./Color-0aa54fb0.js";import{C as f}from"./index-5139378e.js";import{F as h}from"./index-7aec5f09.js";import{a as n}from"./helpers-4992d6b4.js";import{g as d}from"./colors-3cc0579a.js";import{l as $}from"./rtl-e711b500.js";import"./CheckboxRadioStyles-10e5ae14.js";import"./index-1f0cdf82.js";import"./SpacingStyles-4e27dfe9.js";const i=e=>(n(e.tokens.toggle.sizing.container.md.height)-n(e.tokens.toggle.sizing.slider.md))/2,x=u.div`
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
		padding-inline-start: ${({theme:e})=>`${n(e.tokens.toggle.sizing.container.md.width)+8}px`};
		min-height: ${({theme:e})=>e.tokens.toggle.sizing.container.md.height};
		user-select: none;
		color: ${({theme:e,warning:o,error:r})=>d(e,"text",o,r)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
		display: block;
	}

	// Container
	label::before {
		height: ${({theme:e})=>e.tokens.toggle.sizing.container.md.height};
		width: ${({theme:e})=>e.tokens.toggle.sizing.container.md.width};
		border: 1px solid
			${({theme:e,warning:o,error:r})=>d(e,"border",o,r)??e.tokens.toggle.color.border.container.off};
		background: ${({theme:e})=>e.tokens.toggle.color.background.container.off};
		top: 0;
		${$(0)}
		transition: ${({theme:e})=>`box-shadow ${e.tokens.duration.transition.base}, background-color ${e.tokens.duration.transition.base}, border ${e.tokens.duration.transition.base}`};
		box-shadow: 0 0 0 0
			${({theme:e})=>e.tokens.color.border.focus};
		box-sizing: border-box;
		border-radius: ${({theme:e})=>e.tokens.ref.borderRadius.pill};
	}

	label:hover::before {
		background-color: ${e=>e.theme.tokens.toggle.color.background.container.offInteraction};
		border-color: ${e=>e.theme.tokens.toggle.color.border.container.offInteraction};
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${({theme:e})=>e.tokens.color.border.focus};
	}

	// Slider
	label::after {
		width: ${({theme:e})=>e.tokens.toggle.sizing.slider.md};
		height: ${({theme:e})=>e.tokens.toggle.sizing.slider.md};
		top: ${({theme:e})=>i(e)}px;
		left: ${({theme:e})=>i(e)}px;
		border-radius: ${({theme:e})=>e.tokens.ref.borderRadius.circle};
		background-color: ${({theme:e})=>e.tokens.toggle.color.background.slider.off};
		transition: ${({theme:e})=>`left ${e.tokens.duration.transition.base}, background-color ${e.tokens.duration.transition.base}`};
	}

	// ON state
	input:checked {
		// Container
		+ label::before {
			border-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primary};
			background-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primary};
		}
		+ label:hover::before {
			border-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primaryInteraction};
			background-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primaryInteraction};
		}

		// Slider
		+ label::after {
			background-color: ${({theme:e})=>e.tokens.ref.color.gray[0]};
			left: ${({theme:e})=>n(e.tokens.toggle.sizing.container.md.width)-n(e.tokens.toggle.sizing.slider.md)-i(e)}px;
		}
	}

	// DISABLED (and OFF) state
	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({theme:e})=>e.tokens.color.text.quaternary};
		}
		// Container
		+ label::before {
			background-color: ${({theme:e})=>e.tokens.toggle.color.background.container.offDisabled};
			border-color: ${({theme:e})=>e.tokens.toggle.color.border.container.offDisabled};
		}
	}

	// DISABLED and ON state
	input:disabled:checked {
		// Container
		+ label::before {
			border-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primaryDisabled};
			background-color: ${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primaryDisabled};
		}
	}
`,l=({colorTheme:e="brand",className:o,warning:r,error:s,testId:m="Toggle",...p})=>t.createElement(t.Fragment,null,t.createElement(x,{className:o,colorTheme:e,"data-testid":m,warning:!!r,error:!!s},t.createElement(f,{type:"checkbox",...p})),t.createElement(h,{warning:r,error:s}));l.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Toggle'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}},composes:["Omit"]};const q={component:l,argTypes:{error:{control:"text"},warning:{control:"text"},label:{control:"text"},colorTheme:{options:[void 0,...k],control:"select"}},args:{colorTheme:"brand",label:"Click me",disabled:!1}},a={render:e=>t.createElement(l,{...e},e.children)};var c,g,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ToggleComponent {...args}>{args.children}</ToggleComponent>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const v=["Toggle"];export{a as Toggle,v as __namedExportsOrder,q as default};
