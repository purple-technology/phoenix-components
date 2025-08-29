import{s as n,e as r}from"./iframe-22864007.js";import{a as u}from"./Sizing-35dbcd46.js";import{B as s}from"./index-9fcc56cb.js";import"./index-23fd3e1a.js";import"./index-c8a053b3.js";import"./colors-3cc0579a.js";import"./SpacingStyles-a9a54458.js";import"./index-15f66ba7.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./ButtonStyles-b1115345.js";const f=n.div`
	display: inline-flex;
`,B=n.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 1px;
`,h=n.div`
	height: 80%;
	background: ${({theme:e})=>e.tokens.color.border.primary};
`,z=(e,t)=>r.Children.map(e,o=>o.props.minimal?[o,t]:[o]).flat().slice(0,-1),a=({testId:e="ButtonGroup",children:t,dividers:o,...d})=>{const p=o&&Array.isArray(t)?z(t,r.createElement(B,null,r.createElement(h,null))):t;return r.createElement(f,{...d,"data-testid":e},p)};a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ButtonGroup'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:""},dividers:{required:!1,tsType:{name:"boolean"},description:""}}};const S={component:a,argTypes:{size:{control:"radio",options:u}}},i={render:e=>r.createElement(a,{...e},r.createElement(s,{size:e.size,colorTheme:"success",icon:"deposit",mr:"2xs"},"Deposit"),r.createElement(s,{size:e.size,icon:"withdrawal",minimal:!0,colorTheme:"neutral",mr:"2xs"},"Withdraw"),r.createElement(s,{size:e.size,icon:"transfer",minimal:!0,colorTheme:"neutral"},"Transfer")),args:{size:"md",dividers:!1}};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ButtonGroupComponent {...args}>
            <Button size={args.size} colorTheme={'success'} icon="deposit" mr="2xs">
                Deposit
            </Button>
            <Button size={args.size} icon="withdrawal" minimal colorTheme="neutral" mr="2xs">
                Withdraw
            </Button>
            <Button size={args.size} icon="transfer" minimal colorTheme="neutral">
                Transfer
            </Button>
        </ButtonGroupComponent>,
  args: {
    size: 'md',
    dividers: false
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const b=["ButtonGroup"];export{i as ButtonGroup,b as __namedExportsOrder,S as default};
