import{C as e}from"./iframe-d0511029.js";import{g as n}from"./helpers-4992d6b4.js";import{i}from"./Sizing-35dbcd46.js";import{p as s,m as a}from"./SpacingStyles-66d9a443.js";const f={left:"start",center:"center",right:"end",justify:"justify"},g=e`
	${({textAlign:o})=>{if(o)return e`
			text-align: ${f[o]};
		`}}
`,d=e`
	font-size: ${({theme:o,$size:t})=>i(t)?o.tokens.textParagraph.fontSize[t]:typeof t=="number"?`${t}px`:t};
	font-weight: ${({bold:o,semibold:t,theme:r})=>o?r.tokens.ref.fontWeight.bold:t?r.tokens.ref.fontWeight.semibold:r.tokens.ref.fontWeight.regular};
	color: ${n()};

	${g}

	// Padding
	${s}

	// Margin
	${a}
`;export{d as c,g as t};
