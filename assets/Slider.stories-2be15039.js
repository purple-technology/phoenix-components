import{r as c,j as a,d as R}from"./iframe-bef07166.js";import{B as b}from"./index-643a9259.js";import{T as v}from"./index-2b2adb63.js";import{u as I,a as M,C as j}from"./useSlider-b41c0b37.js";import"./index.esm-08e1df75.js";import"./SpacingStyles-3467cbc6.js";import"./TextStyles-858d76bf.js";import"./helpers-ed7a2f24.js";import"./Color-0aa54fb0.js";import"./Sizing-35dbcd46.js";import"./useFormControl-7b675c3c.js";import"./check-9c2d93e5.js";import"./index-9a14469c.js";import"./rtl-584aedc3.js";import"./index-3f76cd62.js";const g=({testId:s="MultiSlider",px:u,disabled:t,...n})=>{const l=I(n.value),[r,i]=M(n.value,n,l);return c.useEffect(()=>{!r||!r.current||(r.current.on("update",()=>{var o;const e=(o=r.current)==null?void 0:o.get();Array.isArray(e)&&n.onChange(e)}),r.current.on("change",()=>{var o;const e=(o=r.current)==null?void 0:o.get();n.onRelease&&Array.isArray(e)&&n.onRelease(e)}))},[r]),a.jsx(j,{className:n.className,testId:s,sliderRef:i,sliderApi:r.current,disabled:t,px:u})};g.__docgenInfo={description:"",methods:[],displayName:"MultiSlider",props:{range:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	min: SubRange
	max: SubRange
	[key: string]: SubRange
}`,signature:{properties:[{key:"min",value:{name:"union",raw:"number | [number] | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number]",elements:[{name:"number"}]},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}],required:!0}},{key:"max",value:{name:"union",raw:"number | [number] | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number]",elements:[{name:"number"}]},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}],required:!0}},{key:{name:"string"},value:{name:"union",raw:"number | [number] | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number]",elements:[{name:"number"}]},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}],required:!0}}]}},description:""},connect:{required:!1,tsType:{name:"union",raw:"'lower' | 'upper' | boolean | boolean[]",elements:[{name:"literal",value:"'lower'"},{name:"literal",value:"'upper'"},{name:"boolean"},{name:"Array",elements:[{name:"boolean"}],raw:"boolean[]"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},pips:{required:!1,tsType:{name:"union",raw:`| PositionsPips
| ValuesPips
| CountPips
| StepsPips
| RangePips`,elements:[{name:"PositionsPips"},{name:"ValuesPips"},{name:"CountPips"},{name:"StepsPips"},{name:"RangePips"}]},description:""},snap:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'MultiSlider'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},px:{required:!1,tsType:{name:"union",raw:"(string & {}) | number",elements:[{name:"unknown"},{name:"number"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(number | string)[]"},description:""}}};const J={title:"components / MultiSlider",component:g},m=s=>{const[u,t]=c.useState([60,80]);return a.jsx(g,{...s,value:u,onChange:n=>t(n),range:{min:0,max:100}})},q=R.div`
    display: flex;
`,p=s=>{const[u,t]=c.useState([60,80]),[n,l]=c.useState([60,80]),r=u[0],i=u[1];return a.jsxs(a.Fragment,{children:[a.jsxs(q,{children:[a.jsx(v,{value:r.toString(),onChange:e=>t([e.currentTarget.value,i]),onBlur:e=>l([e.currentTarget.value,i])}),a.jsx(b,{pr:"s"}),a.jsx(v,{value:i,onChange:e=>t([r,e.currentTarget.value]),onBlur:e=>l([r,e.currentTarget.value])})]}),a.jsx(b,{pt:"s"}),a.jsx(g,{...s,value:n,onChange:e=>{l(e),t(e)},range:{min:0,max:100}})]})},d=s=>{const[u,t]=c.useState([25,50,75]);return a.jsx(g,{...s,value:u,onChange:n=>t(n),range:{min:0,max:100}})};m.__docgenInfo={description:"",methods:[],displayName:"Range"};p.__docgenInfo={description:"",methods:[],displayName:"RangeWithInputs"};d.__docgenInfo={description:"",methods:[],displayName:"MultiSlider"};var S,V,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<MultiSliderValue>([60, 80]);
  return <MultiSliderComponent {...args} value={value} onChange={(value): void => setValue(value)} range={{
    min: 0,
    max: 100
  }} />;
}`,...(x=(V=m.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var y,f,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [inputValue, setInputValue] = useState<MultiSliderValue>([60, 80]);
  const [sliderValue, setSliderValue] = useState<MultiSliderValue>([60, 80]);
  const startValue = inputValue[0];
  const endValue = inputValue[1];
  return <>
            <FlexRow>
                <TextInput value={startValue.toString()} onChange={(e): void => setInputValue([e.currentTarget.value, endValue])} onBlur={(e): void => setSliderValue([e.currentTarget.value, endValue])} />
                <Box pr="s" />
                <TextInput value={endValue} onChange={(e): void => setInputValue([startValue, e.currentTarget.value])} onBlur={(e): void => setSliderValue([startValue, e.currentTarget.value])} />
            </FlexRow>
            <Box pt="s" />
            <MultiSliderComponent {...args} value={sliderValue} onChange={(value): void => {
      setSliderValue(value);
      setInputValue(value);
    }} range={{
      min: 0,
      max: 100
    }} />
        </>;
}`,...(w=(f=p.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var T,h,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<MultiSliderValue>([25, 50, 75]);
  return <MultiSliderComponent {...args} value={value} onChange={(value): void => setValue(value)} range={{
    min: 0,
    max: 100
  }} />;
}`,...(C=(h=d.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const K=["Range","RangeWithInputs","MultiSlider"];export{d as MultiSlider,m as Range,p as RangeWithInputs,K as __namedExportsOrder,J as default};
