import{s as g,e as o}from"./iframe-d0511029.js";import{T as C,C as E}from"./Color-0aa54fb0.js";import{I as s,a as G,P as k,b as P}from"./index-65d923a3.js";import{H as T}from"./index-d5c4704b.js";import{P as O}from"./index-e0b17608.js";import{T as v}from"./index-3010ef15.js";import"./helpers-4992d6b4.js";import"./SpacingStyles-66d9a443.js";import"./Sizing-35dbcd46.js";import"./TextStyles-a2f425cd.js";const $=g.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
	margin: 0 auto;
	border-top: 1px dashed
		${({theme:e})=>e.tokens.color.border.secondary};
	border-left: 1px dashed
		${({theme:e})=>e.tokens.color.border.secondary};
	max-width: 800px;
`,B=g.div`
	border-right: 1px dashed
		${({theme:e})=>e.tokens.color.border.secondary};
	border-bottom: 1px dashed
		${({theme:e})=>e.tokens.color.border.secondary};
	text-align: center;
	padding: 12px;
	height: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`,A={component:s,argTypes:{icon:{control:"select",options:G},color:{control:"radio",options:[void 0,...C,...E]}}},r={render:e=>o.createElement(s,{...e}),args:{icon:"edit",color:"primary"}},x=({heading:e,description:I,icons:b})=>o.createElement(o.Fragment,null,o.createElement(T,{mb:"xs"},e),o.createElement(O,{mb:"l"},I),o.createElement($,null,b.map((a,f)=>o.createElement(B,{key:f},o.createElement(s,{icon:a}),o.createElement(v,{color:"tertiary",mt:"s"},a))))),n={render:()=>o.createElement(x,{heading:"Outlined icons",description:"These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component.",icons:k}),name:"Gallery - outlined"},t={render:()=>o.createElement(x,{heading:"Colored icons",description:"Colored verions can be used only as standalone icons directly through this Icon component.",icons:P}),name:"Gallery - colored"};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <IconComponent {...args} />;
  },
  args: {
    icon: 'edit',
    color: 'primary'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Gallery heading="Outlined icons" description="These icons can be used in components such as Button, LinkButton, Link, MenuItem, and of course - this Icon component." icons={PhoenixIconsOutlined} />;
  },
  name: 'Gallery - outlined'
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Gallery heading="Colored icons" description="Colored verions can be used only as standalone icons directly through this Icon component." icons={PhoenixIconsColored} />;
  },
  name: 'Gallery - colored'
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const D=["Icon","OutlinedIcons","ColoredIcons"];export{t as ColoredIcons,r as Icon,n as OutlinedIcons,D as __namedExportsOrder,A as default};
