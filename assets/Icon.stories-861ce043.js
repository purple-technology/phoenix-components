import{d as g,j as e}from"./iframe-bef07166.js";import{T as j,C}from"./Color-0aa54fb0.js";import{I as t,a as G,P as k,b as P}from"./index-3f76cd62.js";import{H as T}from"./index-d17109aa.js";import{P as O}from"./index-61567d96.js";import{T as v}from"./index-4ddb66de.js";import"./helpers-ed7a2f24.js";import"./SpacingStyles-3467cbc6.js";import"./Sizing-35dbcd46.js";import"./TextStyles-858d76bf.js";const $=g.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
	margin: 0 auto;
	border-top: 1px dashed
		${({theme:o})=>o.tokens.color.border.secondary};
	border-left: 1px dashed
		${({theme:o})=>o.tokens.color.border.secondary};
	max-width: 800px;
`,B=g.div`
	border-right: 1px dashed
		${({theme:o})=>o.tokens.color.border.secondary};
	border-bottom: 1px dashed
		${({theme:o})=>o.tokens.color.border.secondary};
	text-align: center;
	padding: 12px;
	height: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`,z={component:t,argTypes:{icon:{control:"select",options:G},color:{control:"radio",options:[void 0,...j,...C]}}},r={render:o=>e.jsx(t,{...o}),args:{icon:"edit",color:"primary"}},y=({heading:o,description:I,icons:b})=>e.jsxs(e.Fragment,{children:[e.jsx(T,{mb:"xs",children:o}),e.jsx(O,{mb:"l",children:I}),e.jsx($,{children:b.map((i,f)=>e.jsxs(B,{children:[e.jsx(t,{icon:i}),e.jsx(v,{color:"tertiary",mt:"s",children:i})]},f))})]}),n={render:()=>e.jsx(y,{heading:"Outlined icons",description:"These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component.",icons:k}),name:"Gallery - outlined"},s={render:()=>e.jsx(y,{heading:"Colored icons",description:"Colored verions can be used only as standalone icons directly through this Icon component.",icons:P}),name:"Gallery - colored"};var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <IconComponent {...args} />;
  },
  args: {
    icon: 'edit',
    color: 'primary'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Gallery heading="Outlined icons" description="These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component." icons={PhoenixIconsOutlined} />;
  },
  name: 'Gallery - outlined'
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Gallery heading="Colored icons" description="Colored verions can be used only as standalone icons directly through this Icon component." icons={PhoenixIconsColored} />;
  },
  name: 'Gallery - colored'
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const A=["Icon","OutlinedIcons","ColoredIcons"];export{s as ColoredIcons,r as Icon,n as OutlinedIcons,A as __namedExportsOrder,z as default};
