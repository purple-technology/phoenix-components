import{s,C as m,e as n,r as E}from"./iframe-a6e3c2ce.js";import{C as x,T as S}from"./Color-0aa54fb0.js";import{I as w}from"./IconAlignment-a51119ec.js";import{S as v,I as R,i as _,P as A}from"./index-21f1dd54.js";import{g as O}from"./helpers-4992d6b4.js";import{m as P,p as b}from"./SpacingStyles-3c7442ac.js";const q=s.a`
	text-decoration: ${({noUnderline:e})=>e?" none":"underline"};
	color: ${O(!0)};
	cursor: pointer;
	${({bold:e,theme:t})=>e?`font-weight: ${t.tokens.ref.fontWeight.bold};`:""}

	&:hover,
	&:active,
	&:focus {
		text-decoration: ${({noUnderline:e})=>e?"underline":"none"};
	}

	${P}
	${b}
`,C=m`
	path {
		fill: ${({color:e,theme:t})=>e?e in x?t.tokens.color.text[e].primary:e in S?t.tokens.color.text[e]:e:t.tokens.color.text.brand.primary};
	}
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
`,V=s(v)`
	${C}
`,W=s(R)`
	${C}
`,H=s.span`
	${({children:e,icon:t,iconAlignment:a})=>e&&t?a==="left"?m`
						margin-inline-start: 0.4em;
				  `:m`
						margin-inline-end: 0.4em;
				  `:void 0}
`,L=({icon:e,color:t})=>e?_(e)?n.createElement(W,{icon:e,color:t}):typeof e=="string"?n.createElement(V,{src:e,color:t}):e:null,u=L;L.__docgenInfo={description:"",methods:[],displayName:"LinkIcon",props:{icon:{required:!1,tsType:{name:"union",raw:"PhoenixIconsOutlined | React.ReactElement | string",elements:[{name:"PhoenixIconsOutlined"},{name:"ReactReactElement",raw:"React.ReactElement"},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"TextColor | ColorTheme | CSSColor",elements:[{name:"TextColor"},{name:"ColorTheme"},{name:"intersection",raw:"string & {}",elements:[{name:"string"},{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}]}]},description:""}}};const p=E.forwardRef(function({testId:t="Link",children:a,icon:i,iconAlignment:c="left",color:l,...y},$){return n.createElement(q,{ref:$,"data-testid":t,$color:l,...y},c==="left"&&n.createElement(u,{icon:i,color:l}),n.createElement(H,{icon:!!i,iconAlignment:c},a),c==="right"&&n.createElement(u,{icon:i,color:l}))});p.__docgenInfo={description:"`Link` component supports all props from `AnchorHTMLAttributes<HTMLAnchorElement>` interface.",methods:[],displayName:"Link",props:{testId:{defaultValue:{value:"'Link'",computed:!1},required:!1},iconAlignment:{defaultValue:{value:"'left'",computed:!1},required:!1}}};const D={component:p,argTypes:{icon:{options:A,control:"select"},iconAlignment:{options:w,control:"radio"},colorTheme:{options:[void 0,...x],control:"select"}}},d=e=>n.createElement(p,{...e});d.args={children:"Click me",iconAlignment:"left"};const r={args:{...d.args}},o={args:{...d.args,icon:"paper"}};var f,g,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Template.args
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,I,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Template.args,
    icon: 'paper'
  }
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const F=["Link","WithIcon"];export{r as Link,o as WithIcon,F as __namedExportsOrder,D as default};
