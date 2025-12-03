import{S as f,I as $}from"./index-3f76cd62.js";import{d as r,l as e}from"./iframe-bef07166.js";import{a as d,b as l,c as g}from"./helpers-ed7a2f24.js";import{m as h}from"./SpacingStyles-3467cbc6.js";const m=(n,o,i,a)=>{const s=parseInt(o.tokens.inputButton.sizing.height[n],10),t=Math.max(d(o.tokens.button.fontSize[n])*l(o.tokens.ref.lineHeight.sm),a?d(o.tokens.button.sizing.icon[n]):0),u=i?d(o.tokens.button.borderWidth):0;return e`
		min-height: ${o.tokens.inputButton.sizing.height[n]};
		font-size: ${o.tokens.button.fontSize[n]};
		padding: ${(s-t)/2-u}px
			${o.tokens.button.spacing.x[n]};
		border-radius: ${o.tokens.inputButton.borderRadius[n]};
	`},p=(n,o,i,a,s)=>{const{tokens:t}=n;return i?e`
			background: transparent;
			color: ${t.color.text[o].primary};
			&:hover {
				background: ${t.color.background[o].secondary};
			}
			path {
				transition: fill ${t.duration.transition.base};
				fill: ${t.color.text[o].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${t.borderWidth.focus}
					${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:s?e`
			background: transparent;
			color: ${t.color.text[o].primary};
			border: ${t.button.borderWidth} solid
				${t.color.border[o].primary};
			&:hover {
				background: ${t.color.background[o].primary};
				color: #fff;
				path {
					fill: #fff;
				}
			}
			path {
				transition: fill ${t.duration.transition.base};
				fill: ${t.color.text[o].primary};
			}
			&:focus {
				box-shadow: 0 0 0 ${t.borderWidth.focus}
					${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				border: 1px solid ${t.color.background[o].primaryDisabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:a?e`
			background: ${t.color.background[o].secondary};
			color: ${t.color.text[o].onSecondary};
			&:hover {
				background: ${t.color.background[o].secondaryInteraction};
			}
			path {
				transition: fill ${t.duration.transition.base};
				fill: ${t.color.text[o].onSecondary};
			}
			&:focus {
				box-shadow: 0 0 0 ${t.borderWidth.focus}
					${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				background: ${t.color.background[o].secondaryDisabled};
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:e`
			background: ${t.color.background[o].primary};
			box-shadow: ${g(t.button.boxShadow.primary)};
			color: ${t.color.text[o].onPrimary};
			&:hover {
				background: ${t.color.background[o].primaryInteraction};
				color: ${t.color.text[o].onPrimary};
			}
			path {
				transition: fill ${t.duration.transition.base};
				fill: ${t.color.text[o].onPrimary};
			}
			&:focus {
				box-shadow: 0 0 0 ${t.borderWidth.focus}
					${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.background.primary};
				background: ${t.color.background[o].primaryDisabled};
			}
		`},y=n=>e`
	// When display: flex is used, LinkButton is stretched 100% and close button is wrapped on the next line in a Notice component
	display: inline-flex;
	font-family: ${n.tokens.ref.fontFamily.base};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: ${n.tokens.button.fontWeight};
	line-height: ${l(n.tokens.ref.lineHeight.sm)};
	border: 0;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	position: relative;
	text-decoration: none;

	&[disabled] {
		cursor: default;
	}
`,w=r.div`
	display: flex;
	align-items: center;
	${({$loading:n})=>n?e`
					visibility: hidden;
			  `:e``}
`,c=e`
	${n=>y(n.theme)}
	${n=>m(n.size,n.theme,n.outline,!!n.icon)}
	${n=>p(n.theme,n.colorTheme,n.minimal,n.secondary,n.outline)}

	/** These styles are specific for stand-alone component Button */
	text-align: ${({icon:n})=>n?"start":"center"};

	${h}
`,v=r.button`
	${c}
`,W=r.a`
	${c}
`,I=r.div`
	flex: 1;
	display: flex;
	${({children:n,icon:o,iconAlignment:i})=>n&&o?i==="left"?e`
						margin-inline-start: 0.6em;
				  `:e`
						margin-inline-end: 0.6em;
				  `:void 0}
`,b=e`
	${({theme:n,size:o})=>o?e`
					width: ${n.tokens.button.sizing.icon[o]};
					height: ${n.tokens.button.sizing.icon[o]};
			  `:e``}
`,H=r(f)`
	${b}
`,C=r($)`
	${b}
`,L=r.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;export{v as B,W as L,C as S,m as a,p as b,H as c,L as d,w as e,I as f,y as g};
