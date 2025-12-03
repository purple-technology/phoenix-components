import{l as n}from"./iframe-bef07166.js";import{g as e}from"./helpers-ed7a2f24.js";import{i}from"./Sizing-35dbcd46.js";import{p as s,m as a}from"./SpacingStyles-3467cbc6.js";const f={left:"start",center:"center",right:"end",justify:"justify"},g=n`
	${({textAlign:o})=>{if(o)return n`
			text-align: ${f[o]};
		`}}
`,$=n`
	font-size: ${({theme:o,size:t})=>i(t)?o.tokens.textParagraph.fontSize[t]:typeof t=="number"?`${t}px`:t};
	font-weight: ${({bold:o,semibold:t,theme:r})=>o?r.tokens.ref.fontWeight.bold:t?r.tokens.ref.fontWeight.semibold:r.tokens.ref.fontWeight.regular};
	color: ${e()};

	${g}

	// Padding
	${s}

	// Margin
	${a}
`;export{$ as c,g as t};
