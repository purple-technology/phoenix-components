import{d as n,j as r,e as u}from"./iframe-136c36ed.js";import{a as f}from"./Sizing-35dbcd46.js";import{B as s}from"./index-6221cfe1.js";import"./index-a658addf.js";import"./index-f40dd58a.js";import"./colors-3cc0579a.js";import"./SpacingStyles-3c074695.js";import"./index-c341f01d.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./ButtonStyles-f68666c2.js";const h=n.div`
	display: inline-flex;
`,x=n.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 1px;
`,B=n.div`
	height: 80%;
	background: ${({theme:e})=>e.tokens.color.border.primary};
`,z=(e,t)=>u.Children.map(e,o=>o.props.minimal?[o,t]:[o]).flat().slice(0,-1),a=({testId:e="ButtonGroup",children:t,dividers:o,...c})=>{const l=o&&Array.isArray(t)?z(t,r.jsx(x,{children:r.jsx(B,{})})):t;return r.jsx(h,{...c,"data-testid":e,children:l})};a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ButtonGroup'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},description:""},dividers:{required:!1,tsType:{name:"boolean"},description:""}}};const S={component:a,argTypes:{size:{control:"radio",options:f}}},i={render:e=>r.jsxs(a,{...e,children:[r.jsx(s,{size:e.size,colorTheme:"success",icon:"deposit",mr:"2xs",children:"Deposit"}),r.jsx(s,{size:e.size,icon:"withdrawal",minimal:!0,colorTheme:"neutral",mr:"2xs",children:"Withdraw"}),r.jsx(s,{size:e.size,icon:"transfer",minimal:!0,colorTheme:"neutral",children:"Transfer"})]}),args:{size:"md",dividers:!1}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const b=["ButtonGroup"];export{i as ButtonGroup,b as __namedExportsOrder,S as default};
