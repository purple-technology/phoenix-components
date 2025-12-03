import{d as y,j as m,r as D}from"./iframe-bef07166.js";import{S as f,b as R,a as k}from"./DatePickerStyles-6ecae0a8.js";const b=y(f)`
	&.DateRangePicker
		.rdp-day_selected:not(.rdp-day_range_start):not(.rdp-day_range_end):not(.rdp-day_outside) {
		background-color: ${({theme:t})=>t.tokens.color.background.brand.secondary} !important;
		color: ${({theme:t})=>t.tokens.color.text.brand.primary};
	}
	&.DateRangePicker .rdp-day {
		border-radius: 0 !important;
	}
	&.DateRangePicker .rdp-day_range_start {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
	}
	&.DateRangePicker .rdp-day_range_end {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
	}
	[dir='rtl'] &.DateRangePicker .rdp-day_range_start {
		border-top-right-radius: 50% !important;
		border-bottom-right-radius: 50% !important;
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
	}
	[dir='rtl'] &.DateRangePicker .rdp-day_range_end {
		border-top-left-radius: 50% !important;
		border-bottom-left-radius: 50% !important;
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
`,d=({testId:t="DateRangePicker",value:e,onChange:o,dayPickerProps:n,...s})=>{const i={from:e.from??void 0,to:e.to??void 0};return m.jsx(b,{className:"DateRangePicker",selected:i,initialDate:e.from,onDayClick:(u,{disabled:l})=>{if(l)return;const r=R(u,i);o({from:(r==null?void 0:r.from)??null,to:(r==null?void 0:r.to)??null})},testId:t,...s,...n})};d.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'DateRangePicker'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"DateRangeValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(dates: DateRangeValue) => void",signature:{arguments:[{type:{name:"DateRangeValue"},name:"dates"}],return:{name:"void"}}},description:""},dayPickerProps:{required:!1,tsType:{name:"DayPickerProps"},description:""},yearMonthSelect:{required:!1,tsType:{name:"boolean"},description:""}},composes:["DayPickerRangeProps"]};const h={component:d,argTypes:k},a=t=>{const e=new Date(2021,6,5),o=new Date(e.getFullYear(),e.getMonth(),e.getDate()+3),[n,s]=D.useState({from:e,to:o});return m.jsx(d,{...t,value:n,mode:"range",onChange:s})};a.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  // We chose a specific date to always generate the same screenshots
  const today = new Date(2021, 6, 5);
  const threeDaysLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
  const [range, setRange] = useState<DateRangeValue>({
    from: today,
    to: threeDaysLater
  });
  return <DateRangePickerComponent {...args} value={range} mode="range" onChange={setRange} />;
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const x=["DateRangePicker"];export{a as DateRangePicker,x as __namedExportsOrder,h as default};
