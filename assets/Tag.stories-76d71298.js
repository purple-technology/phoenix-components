import{d as c,l as t,j as d}from"./iframe-bef07166.js";import{C as g}from"./Color-0aa54fb0.js";import{c as S}from"./Sizing-35dbcd46.js";import{b as o,a as s}from"./helpers-ed7a2f24.js";import{m as f}from"./SpacingStyles-3467cbc6.js";const b=c.div`
	border-radius: ${({theme:e})=>e.tokens.tag.borderRadius};

	${({secondary:e,outline:a,colorTheme:n,theme:{tokens:r}})=>a?t`
				border: ${r.tag.borderWidth} solid
					${r.color.border[n].primary};
				color: ${r.color.text[n].primary};
			`:e?t`
				background: ${r.color.background[n].secondary};
				color: ${r.color.text[n].primary};
			`:t`
			background: ${r.color.background[n].primary};
			color: #fff;
		`}

	font-size: ${({size:e,theme:a})=>a.tokens.tag.fontSize[e]};
	font-weight: ${({theme:e})=>e.tokens.tag.fontWeight};
	line-height: ${({theme:e})=>o(e.tokens.ref.lineHeight.sm)};
	min-height: ${({size:e,theme:a})=>a.tokens.tag.sizing.height[e]};
	padding: ${({size:e,outline:a,theme:{tokens:n}})=>`${(s(n.tag.sizing.height[e])-s(n.tag.fontSize[e])*o(n.ref.lineHeight.sm))/2-(a?s(n.tag.borderWidth):0)}px ${n.tag.spacing.x[e]};`};
	display: inline-block;
	white-space: nowrap;
	text-align: center;
	cursor: default;

	${f}
`,m=({colorTheme:e="brand",size:a="md",testId:n="Tag",...r})=>d.jsx(b,{colorTheme:e,size:a,"data-testid":n,...r});m.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tag'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ml:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mr:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx."},mt:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mb:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my."},mx:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},my:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px)."},m:{required:!1,tsType:{name:"union",raw:"Spacing | CSSValue",elements:[{name:"Spacing"},{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]}]},description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop."},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"SizingSmMd"},description:"",defaultValue:{value:"'md'",computed:!1}},secondary:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""}}};const C={component:m,argTypes:{colorTheme:{options:g,control:"select"},size:{options:S,control:"radio"}},args:{colorTheme:"brand",size:"md",children:"E-wallet",secondary:!1,outline:!1}},i={render:e=>d.jsx(m,{...e,children:e.children})};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <TagComponent {...args}>{args.children}</TagComponent>
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const v=["Tag"];export{i as Tag,v as __namedExportsOrder,C as default};
