import{d as i,l as t}from"./iframe-bef07166.js";import{c as n}from"./check-9c2d93e5.js";import{a as r}from"./helpers-ed7a2f24.js";import{l as s}from"./rtl-584aedc3.js";import{C as a}from"./CheckboxRadioStyles-5c7d460d.js";const c=""+new URL("minus-e749a24d.svg",import.meta.url).href,p=i(a)`
	label::before {
		border-radius: ${o=>o.theme.tokens.inputButton.borderRadius.xs};
	}

	label::after {
		background: ${o=>o.indeterminate?`url(${c})`:`url(${n})`};
		background-size: 100% 100%;
		${({theme:o,size:e})=>t`
			width: ${r(o.tokens.checkboxRadio.sizing[e])/2+2}px;
			height: ${r(o.tokens.checkboxRadio.sizing[e])/2}px;
			top: ${r(o.tokens.checkboxRadio.sizing[e])/4}px;
			${s(`${r(o.tokens.checkboxRadio.sizing[e])/4-1}px`)};
		`}
	}

	input:checked + label::before {
		border: ${({theme:o,size:e})=>`${r(o.tokens.checkboxRadio.sizing[e])/2}px`}
			solid
			${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primary};
	}
`;export{p as S};
