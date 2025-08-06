import{s as l,e as t}from"./iframe-967d279e.js";import{i as c}from"./times-e63eec19.js";import{C as p}from"./ClosableButtonStyles-d6983ea4.js";import{a as u}from"./ButtonStyles-7e531c95.js";import"./rtl-f9a8c78b.js";import"./index-e1d7f538.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./SpacingStyles-2ec446a3.js";const f=l.div`
	position: relative;
	display: inline-flex;
`,g=l.div`
	${e=>u("sm",e.theme)}

	display: flex;
	width: 100%;
	align-items: center;
	cursor: default;
	background: ${({theme:e})=>e.tokens.color.background.neutral.secondary};
	color: ${({theme:e})=>e.tokens.color.text.primary};
	padding-inline-end: 36px;
`,s=({testId:e="ClosableItem",className:i,onClose:m,...d})=>t.createElement(f,{className:i,"data-testid":e},t.createElement(g,{...d}),t.createElement(p,{type:"button",onClick:m},t.createElement("img",{src:c,alt:""})));s.__docgenInfo={description:"",methods:[],displayName:"ClosableItem",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ClosableItem'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""}}};const _={component:s,args:{children:"Status is In progress"}},r={render:e=>t.createElement(s,{...e})};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <ClosableItemComponent {...args} />
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const h=["ClosableItem"];export{r as ClosableItem,h as __namedExportsOrder,_ as default};
