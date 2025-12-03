import{d as i,j as e}from"./iframe-bef07166.js";import{T as m}from"./index-4ddb66de.js";import{C as d}from"./Color-0aa54fb0.js";import"./helpers-ed7a2f24.js";import"./TextStyles-858d76bf.js";import"./Sizing-35dbcd46.js";import"./SpacingStyles-3467cbc6.js";const a=i.div`
	display: flex;
`,t=i.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	padding: 12px;
`,c=i.div`
	width: 100%;
	height: 100%;
	background: ${({theme:o,colorTheme:r,secondary:u})=>o.tokens.color.background[r][u?"secondary":"primary"]};
`,n=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{}),d.map((o,r)=>e.jsx(t,{children:e.jsx(m,{bold:!0,children:o})},r))]}),e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(m,{children:"primary"})}),d.map((o,r)=>e.jsx(t,{children:e.jsx(c,{colorTheme:o})},r))]}),e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(m,{children:"secondary"})}),d.map((o,r)=>e.jsx(t,{children:e.jsx(c,{colorTheme:o,secondary:!0})},r))]})]}),k={component:n,tags:["!dev"],title:"Foundation / Colors"},s={render:o=>e.jsx(n,{...o})};n.__docgenInfo={description:"",methods:[],displayName:"ColorsComponent"};var l,p,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <>
            <Row>
                <Item />
                {ColorTheme.map((theme, index) => <Item key={index}>
                        <Text bold>{theme}</Text>
                    </Item>)}
            </Row>
            <Row>
                <Item>
                    <Text>primary</Text>
                </Item>
                {ColorTheme.map((theme, index) => <Item key={index}>
                        <Color colorTheme={theme} />
                    </Item>)}
            </Row>
            <Row>
                <Item>
                    <Text>secondary</Text>
                </Item>
                {ColorTheme.map((theme, index) => <Item key={index}>
                        <Color colorTheme={theme} secondary />
                    </Item>)}
            </Row>
        </>;
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,C,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ColorsComponent {...args} />
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const _=["ColorsComponent","Colors"];export{s as Colors,n as ColorsComponent,_ as __namedExportsOrder,k as default};
