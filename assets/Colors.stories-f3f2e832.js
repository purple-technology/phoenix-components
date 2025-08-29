import{s as c,e}from"./iframe-22864007.js";import{T as a}from"./index-05bf6054.js";import{C as l}from"./Color-0aa54fb0.js";import"./helpers-4992d6b4.js";import"./TextStyles-7697a8a1.js";import"./Sizing-35dbcd46.js";import"./SpacingStyles-a9a54458.js";const s=c.div`
	display: flex;
`,n=c.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	padding: 12px;
`,d=c.div`
	width: 100%;
	height: 100%;
	background: ${({theme:t,colorTheme:o,secondary:y})=>t.tokens.color.background[o][y?"secondary":"primary"]};
`,r=()=>e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement(n,null),l.map((t,o)=>e.createElement(n,{key:o},e.createElement(a,{bold:!0},t)))),e.createElement(s,null,e.createElement(n,null,e.createElement(a,null,"primary")),l.map((t,o)=>e.createElement(n,{key:o},e.createElement(d,{colorTheme:t})))),e.createElement(s,null,e.createElement(n,null,e.createElement(a,null,"secondary")),l.map((t,o)=>e.createElement(n,{key:o},e.createElement(d,{colorTheme:t,secondary:!0}))))),R={component:r,tags:["!dev"],title:"Foundation / Colors"},m={render:t=>e.createElement(r,{...t})};r.__docgenInfo={description:"",methods:[],displayName:"ColorsComponent"};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,h,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ColorsComponent {...args} />
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const _=["ColorsComponent","Colors"];export{m as Colors,r as ColorsComponent,_ as __namedExportsOrder,R as default};
