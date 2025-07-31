import{s as u,e as r}from"./iframe-3d4a8e97.js";import{a as f}from"./stories-8cfccb62.js";import{C as g}from"./index-5139378e.js";import{F as R}from"./index-7aec5f09.js";import{a as b}from"./helpers-4992d6b4.js";import{C as y}from"./CheckboxRadioStyles-10e5ae14.js";import"./Color-0aa54fb0.js";import"./Sizing-35dbcd46.js";import"./rtl-e711b500.js";import"./index-1f0cdf82.js";import"./SpacingStyles-4e27dfe9.js";import"./colors-3cc0579a.js";const E=u(y)`
	label::before {
		border-radius: 100%;
	}

	input:checked + label::before {
		border: ${({theme:e,size:t})=>`${b(e.tokens.checkboxRadio.sizing[t])/4+1}px`}
			solid
			${({theme:e,colorTheme:t})=>e.tokens.color.background[t].primary};
	}
`,a=({size:e="md",colorTheme:t="brand",className:l,warning:n,error:s,testId:p="Radio",...c})=>r.createElement(r.Fragment,null,r.createElement(E,{className:l,colorTheme:t,size:e,"data-testid":p,warning:!!n,error:!!s},r.createElement(g,{type:"radio",...c})),r.createElement(R,{warning:n,error:s}));a.__docgenInfo={description:"`Radio` component supports all props from `InputHTMLAttributes<HTMLInputElement>` interface.",methods:[],displayName:"Radio",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Radio'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},colorTheme:{required:!1,tsType:{name:"ColorTheme"},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"SizingSmMdLg"},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},warning:{required:!1,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:"Show yellow warning text and icon under the input"},error:{required:!1,tsType:{name:"union",raw:"ReactElement | string | boolean",elements:[{name:"ReactElement"},{name:"string"},{name:"boolean"}]},description:"Show red error text and icon under the input"}},composes:["Omit"]};const v={component:a,argTypes:f,args:{label:"Click me"}},o={render:e=>r.createElement(a,{...e})};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <RadioComponent {...args} />
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["Radio"];export{o as Radio,z as __namedExportsOrder,v as default};
