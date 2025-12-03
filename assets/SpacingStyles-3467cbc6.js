import{l as c}from"./iframe-bef07166.js";const $=["3xs","2xs","xs","sm","md","lg","xl","2xl","3xl"],u=n=>$.includes(n),S=["xxxs","xxs","xs","s","m","l","xl","xxl","xxxl"],b=n=>S.includes(n),m={xxxs:"3xs",xxs:"2xs",xs:"xs",s:"sm",m:"md",l:"lg",xl:"xl",xxl:"2xl",xxxl:"3xl"},a=(n,s,r="0")=>u(s)?n.tokens.ref.spacing[s]:b(s)?n.tokens.ref.spacing[m[s]]:typeof s=="number"?`${s}px`:s&&new RegExp(/^\d+$/).test(s)?`${parseInt(s,10)}px`:s||r,i=(n,s,r,e)=>typeof s<"u"?a(n,s):typeof r<"u"?a(n,r):typeof e<"u"?a(n,e):"0",k=c`
	${({theme:n,pt:s,pb:r,pl:e,pr:d,px:o,py:x,p:t})=>{const p=i(n,s,x,t),g=i(n,d,o,t),l=i(n,r,x,t),f=i(n,e,o,t);return c`
			padding-top: ${p};
			padding-bottom: ${l};
			padding-inline-start: ${f};
			padding-inline-end: ${g};
		`}}
`,y=c`
	${({theme:n,mt:s,mb:r,ml:e,mr:d,mx:o,my:x,m:t})=>{const p=i(n,s,x,t),g=i(n,d,o,t),l=i(n,r,x,t),f=i(n,e,o,t);return c`
			margin-top: ${p};
			margin-bottom: ${l};
			margin-inline-start: ${f};
			margin-inline-end: ${g};
		`}}
`;export{$ as S,a as g,y as m,k as p};
