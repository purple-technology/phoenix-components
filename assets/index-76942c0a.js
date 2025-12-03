import{d as m,l as a,j as o}from"./iframe-bef07166.js";import{B as y}from"./index-66c357df.js";import{V as l}from"./index-afcb9af5.js";import{b as h}from"./helpers-ed7a2f24.js";import{m as w,p as v}from"./SpacingStyles-3467cbc6.js";const k=m(y)`
	grid-area: button;
	background: #fff;
	color: ${({theme:e})=>e.tokens.color.text.primary};

	// Icons
	path {
		fill: ${({theme:e})=>e.tokens.color.text.primary};
	}
	&:hover path {
		fill: ${({theme:e})=>e.tokens.color.text.inverse};
	}

	// Loading spinner
	${l} {
		stroke: ${({theme:e})=>e.tokens.color.text.primary};
	}
	&:hover ${l} {
		stroke: ${({theme:e})=>e.tokens.color.text.inverse};
	}

	${({breakpoint:e})=>a`
		@media (max-width: ${e}px) {
			margin: 8px 0;
			justify-self: start;
		}
	`}
`,C=k,c=a`
	${({theme:e,colorTheme:n,borderRadius:i})=>`
		border-radius: ${i??e.tokens.notice.borderRadius};
		background: ${e.tokens.color.background[n].secondary};
		color: ${e.tokens.color.text[n].primary};
		line-height: ${h(e.tokens.ref.lineHeight.sm)};
	`}

	${w}
	${v}
`,$=m.div`
	${c};

	display: grid;
	align-items: center;
	grid-column-gap: 12px;

	${({withButton:e,withClose:n,breakpoint:i})=>e&&n?a`
				grid-template-columns: 1fr minmax(0, auto) 2rem;
				grid-template-areas: 'text button close';

				@media (max-width: ${i}px) {
					grid-template-columns: 1fr 2rem;
					grid-template-areas: 'text close' 'button button';
				}
			`:n?a`
				grid-template-columns: 1fr 2rem;
				grid-template-areas: 'text close';

				@media (max-width: ${i}px) {
					grid-template-columns: 1fr 2rem;
					grid-template-areas: 'text close';
				}
			`:e?a`
				grid-template-columns: 1fr minmax(0, auto);
				grid-template-areas: 'text button';

				@media (max-width: ${i}px) {
					grid-template-columns: 1fr;
					grid-template-areas: 'text' 'button';
				}
			`:a`
			grid-template-columns: 1fr;
			grid-template-areas: 'text';
		`}
`,q=m.div`
	${c};
`,T=m.div`
	grid-area: text;
	margin: 8px 0;
`,V=m.button`
	grid-area: close;
	border: none;
	outline: none;
	font-size: 2rem;
	font-weight: ${({theme:e})=>e.tokens.ref.fontWeight.regular};
	line-height: 0.5;
	vertical-align: middle;
	cursor: pointer;
	background: none;
	font-family: ${e=>e.theme.tokens.ref.fontFamily.base};
	color: ${({theme:e,colorTheme:n})=>e.tokens.color.text[n].primary};
	padding: 0;

	${({breakpoint:e})=>a`
		@media (max-width: ${e}px) {
			align-self: start;
			margin-top: 10px;
		}
	`}
`,z=({colorTheme:e="brand",testId:n="Notice",px:i="lg",breakpoint:p=640,onClose:r,onClick:d,buttonText:t,buttonLoading:g=!1,buttonIcon:S,buttonIconAlignment:f,buttonTestId:b,closeTestId:x,...s})=>{const u=s.py??(!t&&!r?"m":"xs");return!t&&!r?o.jsx(q,{colorTheme:e,"data-testid":n,px:i,py:u,...s,children:s.children}):o.jsxs($,{colorTheme:e,"data-testid":n,px:i,py:u,breakpoint:p,withButton:!!t,withClose:!!r,...s,children:[o.jsx(T,{children:s.children}),t&&o.jsx(C,{onClick:d,size:"sm",loading:g,icon:S,iconAlignment:f,colorTheme:e,breakpoint:p,testId:b,children:t}),r&&o.jsx(V,{type:"button",colorTheme:e,paddingLeft:!!t,onClick:r,breakpoint:p,"data-testid":x,children:"×"})]})};z.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Notice'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},pl:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px."},pt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},pb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py."},px:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",defaultValue:{value:"'lg'",computed:!1}},py:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},p:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop."},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Text of the button. When supplied, button will automatically appear. `onClick` handler should be also supplied to provide functionality."},buttonLoading:{required:!1,tsType:{name:"boolean"},description:"Action button is loading",defaultValue:{value:"false",computed:!1}},buttonIcon:{required:!1,tsType:{name:"union",raw:"PhoenixIconsOutlined | React.ReactElement | string",elements:[{name:"PhoenixIconsOutlined"},{name:"ReactReactElement",raw:"React.ReactElement"},{name:"string"}]},description:"Action button icon"},buttonIconAlignment:{required:!1,tsType:{name:"IconAlignment"},description:"Action button icon alignment"},buttonTestId:{required:!1,tsType:{name:"string"},description:"data-testid for action button"},closeTestId:{required:!1,tsType:{name:"string"},description:"data-testid for close button"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:"Function to handle click on the button."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:"Function to handle close event. When supplied, close button will automatically appear."},breakpoint:{required:!1,tsType:{name:"number"},description:"Mobile breakpoint in pixels.",defaultValue:{value:"640",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]},description:""}}};export{z as N};
