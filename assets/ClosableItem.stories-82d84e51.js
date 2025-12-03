import{d as i,j as t}from"./iframe-bef07166.js";import{i as p}from"./times-e63eec19.js";import{C as c}from"./ClosableButtonStyles-cb865937.js";import{a as u}from"./ButtonStyles-4f291526.js";import"./rtl-584aedc3.js";import"./index-3f76cd62.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-3467cbc6.js";const f=i.div`
	position: relative;
	display: inline-flex;
`,g=i.div`
	${e=>u("sm",e.theme)}

	display: flex;
	width: 100%;
	align-items: center;
	cursor: default;
	background: ${({theme:e})=>e.tokens.color.background.neutral.secondary};
	color: ${({theme:e})=>e.tokens.color.text.primary};
	padding-inline-end: 36px;
`,o=({testId:e="ClosableItem",className:l,onClose:m,...d})=>t.jsxs(f,{className:l,"data-testid":e,children:[t.jsx(g,{...d}),t.jsx(c,{type:"button",onClick:m,children:t.jsx("img",{src:p,alt:""})})]});o.__docgenInfo={description:"",methods:[],displayName:"ClosableItem",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ClosableItem'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const T={component:o,args:{children:"Status is In progress"}},s={render:e=>t.jsx(o,{...e})};var r,a,n;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ClosableItemComponent {...args} />
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const k=["ClosableItem"];export{s as ClosableItem,k as __namedExportsOrder,T as default};
