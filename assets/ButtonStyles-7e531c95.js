import{S as f,I as $}from"./index-e1d7f538.js";import{s as e,C as i}from"./iframe-967d279e.js";import{a as d,b as l,c as g}from"./helpers-4992d6b4.js";import{m as h}from"./SpacingStyles-2ec446a3.js";const y=(n,o,r,a)=>{const s=parseInt(o.tokens.inputButton.sizing.height[n],10),t=Math.max(d(o.tokens.button.fontSize[n])*l(o.tokens.ref.lineHeight.sm),a?d(o.tokens.button.sizing.icon[n]):0),u=r?d(o.tokens.button.borderWidth):0;return`
		min-height: ${o.tokens.inputButton.sizing.height[n]};
		font-size: ${o.tokens.button.fontSize[n]};
		padding: ${(s-t)/2-u}px ${o.tokens.button.spacing.x[n]};
		border-radius: ${o.tokens.inputButton.borderRadius[n]};
	`},m=(n,o,r,a,s)=>{const{tokens:t}=n;return r?`
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
				box-shadow: 0 0 0 ${t.borderWidth.focus} ${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:s?`
			background: transparent;
			color: ${t.color.text[o].primary};
			border: ${t.button.borderWidth} solid ${t.color.border[o].primary};
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
				box-shadow: 0 0 0 ${t.borderWidth.focus} ${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				border: 1px solid ${t.color.background[o].primaryDisabled};
				background: transparent;
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:a?`
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
				box-shadow: 0 0 0 ${t.borderWidth.focus} ${t.color.border.focus};
			}
			&[disabled] {
				color: ${t.color.text[o].disabled};
				background: ${t.color.background[o].secondaryDisabled};
			}
			&[disabled] path {
				fill: ${t.color.text[o].disabled};
			}
		`:`
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
					box-shadow: 0 0 0 ${t.borderWidth.focus} ${t.color.border.focus};
				}
				&[disabled] {
					color: ${t.color.background.primary};
					background: ${t.color.background[o].primaryDisabled};
				}
			`},p=n=>i`
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
`,w=e.div`
	display: flex;
	align-items: center;
	${({$loading:n})=>n?`
		visibility: hidden;
	`:""}
`,c=i`
	${n=>p(n.theme)}
	${n=>y(n.size,n.theme,n.outline,!!n.icon)}
	${n=>m(n.theme,n.colorTheme,n.minimal,n.secondary,n.outline)}

	/** These styles are specific for stand-alone component Button */
	text-align: ${({icon:n})=>n?"start":"center"};

	${h}
`,v=e.button`
	${c}
`,W=e.a`
	${c}
`,I=e.div`
	flex: 1;
	display: flex;
	${({children:n,icon:o,iconAlignment:r})=>n&&o?r==="left"?i`
						margin-inline-start: 0.6em;
				  `:i`
						margin-inline-end: 0.6em;
				  `:void 0}
`,b=i`
	${({theme:n,$size:o})=>`
		width: ${n.tokens.button.sizing.icon[o]};
		height: ${n.tokens.button.sizing.icon[o]};
	`}
`,C=e(f)`
	${b}
`,H=e($)`
	${b}
`,L=e.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;export{v as B,W as L,H as S,y as a,m as b,C as c,L as d,w as e,I as f,p as g};
