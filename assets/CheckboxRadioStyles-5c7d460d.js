import{d as i}from"./iframe-bef07166.js";import{a as t}from"./helpers-ed7a2f24.js";import{g as n}from"./colors-3cc0579a.js";import{l as a}from"./rtl-584aedc3.js";const d=i.div`
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
		padding-top: ${({size:o,theme:e})=>`${(t(e.tokens.checkboxRadio.sizing[o])-16)/2}px`};
		padding-inline-start: ${({theme:o,size:e})=>`${t(o.tokens.checkboxRadio.sizing[e])+8}px`};
		min-height: ${({theme:o,size:e})=>o.tokens.checkboxRadio.sizing[e]};
		user-select: none;
		color: ${({theme:o,warning:e,error:r})=>n(o,"text",e,r)};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	// Outer box of the fake checkbox/radio
	label::before {
		height: ${({theme:o,size:e})=>o.tokens.checkboxRadio.sizing[e]};
		width: ${({theme:o,size:e})=>o.tokens.checkboxRadio.sizing[e]};
		border: 1px solid
			${({theme:o,warning:e,error:r})=>n(o,"border",e,r)??o.tokens.color.border.primary};
		background: ${({theme:o})=>o.tokens.color.background.primary};
		top: 0;
		${a(0)}
		transition: ${({theme:o})=>`box-shadow ${o.tokens.duration.transition.base}, background-color ${o.tokens.duration.transition.base}, border ${o.tokens.duration.transition.base}`};
		box-shadow: 0 0 0 0
			${({theme:o})=>o.tokens.color.border.focus};
		box-sizing: border-box;
	}

	label::after {
		display: none;
	}

	label:hover::before {
		border: 1px solid
			${o=>o.theme.tokens.color.border.primaryInteraction};
	}

	input:checked {
		+ label::after {
			display: block;
		}
		+ label:hover::before {
			border-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primary};
		}
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${({theme:o})=>o.tokens.color.border.focus};
	}

	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${({theme:o})=>o.tokens.color.text.quaternary};
		}
		+ label::before {
			background-color: ${({theme:o})=>o.tokens.color.background.secondary};
			border-color: ${({theme:o})=>o.tokens.color.border.secondary};
		}
		&:checked + label::before {
			border-color: ${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primaryDisabled};
		}
	}
`,k=i.label`
	font-size: ${({theme:o})=>o.tokens.fontSize.base};
`;export{d as C,k as L};
