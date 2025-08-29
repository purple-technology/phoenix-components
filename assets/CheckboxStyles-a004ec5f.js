import{s as i,C as t}from"./iframe-22864007.js";import{c as s}from"./check-9c2d93e5.js";import{a as r}from"./helpers-4992d6b4.js";import{l as n}from"./rtl-a2dddcc3.js";import{C as a}from"./CheckboxRadioStyles-a1692841.js";const c=""+new URL("minus-e749a24d.svg",import.meta.url).href,p=i(a)`
	label::before {
		border-radius: ${o=>o.theme.tokens.inputButton.borderRadius.xs};
	}

	label::after {
		background: ${o=>o.indeterminate?`url(${c})`:`url(${s})`};
		background-size: 100% 100%;
		${({theme:o,size:e})=>t`
			width: ${r(o.tokens.checkboxRadio.sizing[e])/2+2}px;
			height: ${r(o.tokens.checkboxRadio.sizing[e])/2}px;
			top: ${r(o.tokens.checkboxRadio.sizing[e])/4}px;
			${n(`${r(o.tokens.checkboxRadio.sizing[e])/4-1}px`)};
		`}
	}

	input:checked + label::before {
		border: ${({theme:o,size:e})=>`${r(o.tokens.checkboxRadio.sizing[e])/2}px`}
			solid
			${({theme:o,colorTheme:e})=>o.tokens.color.background[e].primary};
	}
`;export{p as S};
