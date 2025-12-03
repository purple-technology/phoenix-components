import{r as t,j as e}from"./iframe-bef07166.js";import{a as d}from"./Sizing-35dbcd46.js";import{B as p}from"./index-66c357df.js";import{H as c}from"./index-d17109aa.js";import{P as a}from"./index-61567d96.js";import{M as u}from"./index-549d7226.js";import"./index-3940132f.js";import"./index-afcb9af5.js";import"./colors-3cc0579a.js";import"./SpacingStyles-3467cbc6.js";import"./index-3f76cd62.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./ButtonStyles-4f291526.js";import"./TextStyles-858d76bf.js";import"./index-5bc7f631.js";const B={title:"components / Modal",component:u,argTypes:{size:{options:d,control:"radio"}},args:{size:"md"}},i=s=>{const[l,n]=t.useState(s.open);return t.useEffect(()=>{n(s.open)},[s.open]),e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open modal"}),e.jsxs(u,{...s,open:l,onClose:()=>n(!1),children:[e.jsx(c,{children:"Hello modal!"}),e.jsx(a,{mt:"s",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mauris non metus varius egestas. Suspendisse condimentum ligula non egestas placerat. Curabitur mollis lectus nisi, sit amet blandit enim ornare quis. Sed bibendum et mi sed elementum. Morbi finibus condimentum sem, quis euismod nunc tempus vitae. Aliquam dignissim sapien neque."}),e.jsx(a,{mt:"s",children:"Praesent tincidunt id quam in eleifend. Vivamus rutrum felis consequat odio mattis mollis id convallis arcu. Nam nulla dui, fermentum eget tellus at, vehicula euismod nunc. Phasellus egestas mi metus, eu sagittis elit hendrerit a. Morbi pharetra ante eget suscipit fermentum. Mauris fermentum lorem magna, nec facilisis sapien dignissim sit amet."})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Modal"};var o,m,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);
  return <>
            <Button onClick={(): void => setOpen(true)}>Open modal</Button>
            <ModalComponent {...args} open={open} onClose={(): void => setOpen(false)}>
                <Heading>Hello modal!</Heading>
                <Paragraph mt="s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
                    mauris non metus varius egestas. Suspendisse condimentum ligula non
                    egestas placerat. Curabitur mollis lectus nisi, sit amet blandit enim
                    ornare quis. Sed bibendum et mi sed elementum. Morbi finibus
                    condimentum sem, quis euismod nunc tempus vitae. Aliquam dignissim
                    sapien neque.
                </Paragraph>
                <Paragraph mt="s">
                    Praesent tincidunt id quam in eleifend. Vivamus rutrum felis consequat
                    odio mattis mollis id convallis arcu. Nam nulla dui, fermentum eget
                    tellus at, vehicula euismod nunc. Phasellus egestas mi metus, eu
                    sagittis elit hendrerit a. Morbi pharetra ante eget suscipit
                    fermentum. Mauris fermentum lorem magna, nec facilisis sapien
                    dignissim sit amet.
                </Paragraph>
            </ModalComponent>
        </>;
}`,...(r=(m=i.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const z=["Modal"];export{i as Modal,z as __namedExportsOrder,B as default};
