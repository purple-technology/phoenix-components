import{l}from"./iframe-bef07166.js";const d=(r,t)=>l`
	${({theme:$})=>{const i=r==="left"?"right":"left";return $.dir&&["ltr","rtl"].includes($.dir)?$.dir==="rtl"?l`
					${i}: ${t};
				`:l`
				${r}: ${t};
			`:l`
			${r}: ${t};
			[dir='rtl'] & {
				${r}: initial;
				${i}: ${t};
			}
		`}}
`,g=r=>d("left",r),n=r=>d("right",r);export{g as l,n as r};
