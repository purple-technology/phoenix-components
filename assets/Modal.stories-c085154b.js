import{r as s,e}from"./iframe-a6e3c2ce.js";import{a as p}from"./Sizing-35dbcd46.js";import{B as d}from"./index-d84864de.js";import{H as c}from"./index-8bc57f67.js";import{P as a}from"./index-5a0b5d87.js";import{M as u}from"./index-841b94f5.js";import"./index-20c57795.js";import"./index-9a965812.js";import"./colors-3cc0579a.js";import"./SpacingStyles-3c7442ac.js";import"./index-21f1dd54.js";import"./helpers-4992d6b4.js";import"./Color-0aa54fb0.js";import"./ButtonStyles-db6577b5.js";import"./TextStyles-7425ff6a.js";import"./index-142d930f.js";const z={title:"components / Modal",component:u,argTypes:{size:{options:p,control:"radio"}},args:{size:"md"}},n=t=>{const[l,i]=s.useState(t.open);return s.useEffect(()=>{i(t.open)},[t.open]),e.createElement(e.Fragment,null,e.createElement(d,{onClick:()=>i(!0)},"Open modal"),e.createElement(u,{...t,open:l,onClose:()=>i(!1)},e.createElement(c,null,"Hello modal!"),e.createElement(a,{mt:"s"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mauris non metus varius egestas. Suspendisse condimentum ligula non egestas placerat. Curabitur mollis lectus nisi, sit amet blandit enim ornare quis. Sed bibendum et mi sed elementum. Morbi finibus condimentum sem, quis euismod nunc tempus vitae. Aliquam dignissim sapien neque."),e.createElement(a,{mt:"s"},"Praesent tincidunt id quam in eleifend. Vivamus rutrum felis consequat odio mattis mollis id convallis arcu. Nam nulla dui, fermentum eget tellus at, vehicula euismod nunc. Phasellus egestas mi metus, eu sagittis elit hendrerit a. Morbi pharetra ante eget suscipit fermentum. Mauris fermentum lorem magna, nec facilisis sapien dignissim sit amet.")))};n.__docgenInfo={description:"",methods:[],displayName:"Modal"};var o,m,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
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
}`,...(r=(m=n.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const F=["Modal"];export{n as Modal,F as __namedExportsOrder,z as default};
