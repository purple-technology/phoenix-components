import{d as u,j as r}from"./iframe-bef07166.js";import{a as f}from"./stories-8cfccb62.js";import{C as R}from"./index-8225fe0b.js";import{F as g}from"./index-9a14469c.js";import{a as b}from"./helpers-ed7a2f24.js";import{C as x}from"./CheckboxRadioStyles-5c7d460d.js";import"./Color-0aa54fb0.js";import"./Sizing-35dbcd46.js";import"./rtl-584aedc3.js";import"./index-3f76cd62.js";import"./SpacingStyles-3467cbc6.js";import"./colors-3cc0579a.js";const y=u(x)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({theme:e,size:o})=>`${b(e.tokens.checkboxRadio.sizing[o])/4+1}px`}
			solid
			${({theme:e,colorTheme:o})=>e.tokens.color.background[o].primary};
	}
`,t=({size:e="md",colorTheme:o="brand",className:p,warning:s,error:n,testId:l="Radio",...c})=>r.jsxs(r.Fragment,{children:[r.jsx(y,{className:p,colorTheme:o,size:e,"data-testid":l,warning:!!s,error:!!n,children:r.jsx(R,{type:"radio",...c})}),r.jsx(g,{warning:s,error:n})]});t.__docgenInfo={description:"`Radio` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.",methods:[],displayName:"Radio",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Radio'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"SizingSmMdLg"},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}},composes:["Omit"]};const $={component:t,argTypes:f,args:{label:"Click me"}},a={render:e=>r.jsx(t,{...e})};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <RadioComponent {...args} />
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const v=["Radio"];export{a as Radio,v as __namedExportsOrder,$ as default};
