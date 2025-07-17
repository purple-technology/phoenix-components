import{r as f,e as l,s as L,C as Y}from"./iframe-a6e3c2ce.js";import{p as fe,c as z}from"./clsx-4877572a.js";import{a as Ie}from"./Sizing-35dbcd46.js";import{B as Ce}from"./index-3fcec67e.js";import{a as se}from"./helpers-4992d6b4.js";import"./index.esm-97e0a1f9.js";import"./SpacingStyles-3c7442ac.js";import"./TextStyles-7425ff6a.js";import"./Color-0aa54fb0.js";function X(e){return n=>!!n.type&&n.type.tabsRole===e}const _=X("Tab"),F=X("TabList"),U=X("TabPanel");function ke(e){return _(e)||F(e)||U(e)}function B(e,n){return f.Children.map(e,t=>t===null?null:ke(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:B(t.props.children,n)})):t)}function D(e,n){return f.Children.forEach(e,t=>{t!==null&&(_(t)||U(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(F(t)&&n(t),D(t.props.children,n)))})}function be(e,n,t){let r,u=0,i=0,c=!1;const d=[],T=e[n];return D(T,a=>{F(a)&&(a.props&&a.props.children&&typeof a.props.children=="object"&&D(a.props.children,b=>d.push(b)),c&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),_(a)?((!c||d.indexOf(a)===-1)&&(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),u++):U(a)&&i++}),!r&&u!==i&&(r=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${u} 'Tab' and ${i} 'TabPanel'.`)),r}function Pe(e,n,t,r,u){const i=e[n],c=u||n;let d=null;return i&&typeof i!="function"?d=new Error(`Invalid ${r} \`${c}\` of type \`${typeof i}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&i==null&&(d=new Error(`The ${r} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),d}function Re(e,n,t,r,u){const i=e[n],c=u||n;let d=null;if(i!=null&&typeof i!="number")d=new Error(`Invalid ${r} \`${c}\` of type \`${typeof i}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&i!=null)return new Error(`The ${r} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return d}function pe(e){let n=0;return D(e,t=>{_(t)&&n++}),n}const Ne=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function ve(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function me(e){return e&&"getAttribute"in e}function re(e){return me(e)&&e.getAttribute("data-rttab")}function P(e){return me(e)&&e.getAttribute("aria-disabled")==="true"}let j;function Se(e){const n=e||(typeof window<"u"?window:void 0);try{j=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{j=!1}}const Le={className:"react-tabs",focus:!1},_e={children:be},Oe=e=>{fe.checkPropTypes(_e,e,"prop","UncontrolledTabs");let n=f.useRef([]),t=f.useRef([]);const r=f.useRef();function u(s,o){if(s<0||s>=a())return;const{onSelect:m,selectedIndex:R}=e;m(s,R,o)}function i(s){const o=a();for(let m=s+1;m<o;m++)if(!P(b(m)))return m;for(let m=0;m<s;m++)if(!P(b(m)))return m;return s}function c(s){let o=s;for(;o--;)if(!P(b(o)))return o;for(o=a();o-- >s;)if(!P(b(o)))return o;return s}function d(){const s=a();for(let o=0;o<s;o++)if(!P(b(o)))return o;return null}function T(){let s=a();for(;s--;)if(!P(b(s)))return s;return null}function a(){const{children:s}=e;return pe(s)}function b(s){return n.current[`tabs-${s}`]}function p(){let s=0;const{children:o,disabledTabClassName:m,focus:R,forceRenderTabPanel:y,selectedIndex:w,selectedTabClassName:$,selectedTabPanelClassName:J,environment:Q}=e;t.current=t.current||[];let we=t.current.length-a();const $e=f.useId();for(;we++<0;)t.current.push(`${$e}${t.current.length}`);return B(o,k=>{let M=k;if(F(k)){let C=0,Z=!1;j==null&&Se(Q);const ee=Q||(typeof window<"u"?window:void 0);j&&ee&&(Z=l.Children.toArray(k.props.children).filter(_).some((te,H)=>ee.document.activeElement===b(H))),M=f.cloneElement(k,{children:B(k.props.children,te=>{const H=`tabs-${C}`,ne=w===C,K={tabRef:Ee=>{n.current[H]=Ee},id:t.current[C],selected:ne,focus:ne&&(R||Z)};return $&&(K.selectedClassName=$),m&&(K.disabledClassName=m),C++,f.cloneElement(te,K)})})}else if(U(k)){const C={id:t.current[s],selected:w===s};y&&(C.forceRender=y),J&&(C.selectedClassName=J),s++,M=f.cloneElement(k,C)}return M})}function g(s){const{direction:o,disableUpDownKeys:m,disableLeftRightKeys:R}=e;if(h(s.target)){let{selectedIndex:y}=e,w=!1,$=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(w=!0,$=!1,E(s)),!R&&(s.keyCode===37||s.code==="ArrowLeft")||!m&&(s.keyCode===38||s.code==="ArrowUp")?(o==="rtl"?y=i(y):y=c(y),w=!0,$=!0):!R&&(s.keyCode===39||s.code==="ArrowRight")||!m&&(s.keyCode===40||s.code==="ArrowDown")?(o==="rtl"?y=c(y):y=i(y),w=!0,$=!0):s.keyCode===35||s.code==="End"?(y=T(),w=!0,$=!0):(s.keyCode===36||s.code==="Home")&&(y=d(),w=!0,$=!0),w&&s.preventDefault(),$&&u(y,s)}}function E(s){let o=s.target;do if(h(o)){if(P(o))return;const m=[].slice.call(o.parentNode.children).filter(re).indexOf(o);u(m,s);return}while((o=o.parentNode)!=null)}function h(s){if(!re(s))return!1;let o=s.parentElement;do{if(o===r.current)return!0;if(o.getAttribute("data-rttabs"))break;o=o.parentElement}while(o);return!1}const I=Object.assign({},Le,e),{className:N,domRef:O}=I,xe=ve(I,Ne);return l.createElement("div",Object.assign({},xe,{className:z(N),onClick:E,onKeyDown:g,ref:s=>{r.current=s,O&&O(s)},"data-rttabs":!0}),p())},Ae=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function qe(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const De=0,q=1,je={children:be,onSelect:Pe,selectedIndex:Re},ze={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},Fe=e=>e.selectedIndex===null?q:De,Te=e=>{fe.checkPropTypes(je,e,"prop","Tabs");const n=Object.assign({},ze,e),{children:t,defaultFocus:r,defaultIndex:u,focusTabOnClick:i,onSelect:c}=n,d=qe(n,Ae),[T,a]=f.useState(r),[b]=f.useState(Fe(d)),[p,g]=f.useState(b===q?u||0:null);if(f.useEffect(()=>{a(!1)},[]),b===q){const I=pe(t);f.useEffect(()=>{if(p!=null){const N=Math.max(0,I-1);g(Math.min(p,N))}},[I])}const E=(I,N,O)=>{typeof c=="function"&&c(I,N,O)===!1||(i&&a(!0),b===q&&g(I))};let h=Object.assign({},e,d);return h.focus=T,h.onSelect=E,p!=null&&(h.selectedIndex=p),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,l.createElement(Oe,h,t)};Te.tabsRole="Tabs";const Ue=["children","className"];function We(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Me={className:"react-tabs__tab-list"},ye=e=>{const n=Object.assign({},Me,e),{children:t,className:r}=n,u=We(n,Ue);return l.createElement("ul",Object.assign({},u,{className:z(r),role:"tablist"}),t)};ye.tabsRole="TabList";const He=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function Ke(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const V="react-tabs__tab",Ve={className:V,disabledClassName:`${V}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${V}--selected`},he=e=>{let n=f.useRef();const t=Object.assign({},Ve,e),{children:r,className:u,disabled:i,disabledClassName:c,focus:d,id:T,selected:a,selectedClassName:b,tabIndex:p,tabRef:g}=t,E=Ke(t,He);return f.useEffect(()=>{a&&d&&n.current.focus()},[a,d]),l.createElement("li",Object.assign({},E,{className:z(u,{[b]:a,[c]:i}),ref:h=>{n.current=h,g&&g(h)},role:"tab",id:`tab${T}`,"aria-selected":a?"true":"false","aria-disabled":i?"true":"false","aria-controls":`panel${T}`,tabIndex:p||(a?"0":null),"data-rttab":!0}),r)};he.tabsRole="Tab";const Ye=["children","className","forceRender","id","selected","selectedClassName"];function Be(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const ae="react-tabs__tab-panel",Xe={className:ae,forceRender:!1,selectedClassName:`${ae}--selected`},v=e=>{const n=Object.assign({},Xe,e),{children:t,className:r,forceRender:u,id:i,selected:c,selectedClassName:d}=n,T=Be(n,Ye);return l.createElement("div",Object.assign({},T,{className:z(r,{[d]:c}),role:"tabpanel",id:`panel${i}`,"aria-labelledby":`tab${i}`}),u||c?t:null)};v.tabsRole="TabPanel";const Ge=L(Te)`
	.react-tabs__tab-panel {
		display: none;
	}

	.react-tabs__tab-panel--selected {
		display: block;
	}
`,G=({testId:e="Tabs",...n})=>l.createElement(Ge,{"data-testid":e,...n});G.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tabs'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};L.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`;const Je=L(ye)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`,Qe=L.a`
	display: block;
	height: ${({theme:e,size:n})=>se(e.tokens.ref.fontSize[n??"md"])*2+12}px;
	line-height: ${({theme:e,size:n})=>se(e.tokens.ref.fontSize[n??"md"])*2+12}px;
	padding: 0 12px;
	text-decoration: none;
	font-weight: ${({selected:e,theme:n})=>e?n.tokens.ref.fontWeight.bold:n.tokens.ref.fontWeight.regular};
	font-size: ${({theme:e,size:n})=>e.tokens.ref.fontSize[n??"md"]};
	cursor: ${({disabled:e})=>e?"default":"pointer"};

	color: ${({theme:e,disabled:n,selected:t})=>n?e.tokens.color.text.quaternary:t?e.tokens.color.text.brand.primary:e.tokens.color.text.primary};
	${({theme:e,disabled:n,selected:t})=>{if(!n&&!t)return Y`
				&:hover {
					color: ${e.tokens.color.text.brand.primary};
				}
			`}}

	${({theme:e,selected:n,animate:t})=>{if(!t&&n)return Y`
				position: relative;
				&:before {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 12px;
					height: ${e.tokens.tabs.borderWidth.tab.bottom};
					width: calc(100% - 24px);
					background: ${e.tokens.color.text.brand.primary};
				}
			`}}
`,x=f.forwardRef(function({disabledClassName:n,selectedClassName:t,tabIndex:r,id:u,testId:i="Tab",...c},d){return l.createElement(he,{disabled:c.disabled,disabledClassName:n,selectedClassName:t,tabIndex:r,selected:c.selected,id:u},l.createElement(Qe,{ref:d,"data-testid":i,...c}))});x.tabsRole="Tab";x.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tab'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},animate:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"Sizing"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},disabledClassName:{required:!1,tsType:{name:"string"},description:""},selectedClassName:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Ze=L.div`
	height: ${({theme:e})=>e.tokens.tabs.borderWidth.tab.bottom};
	background: ${({theme:e})=>e.tokens.color.text.brand.primary};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({theme:e,animate:n})=>n?Y`
					transition: transform ${e.tokens.duration.transition.base},
						width ${e.tokens.duration.transition.base};
			  `:void 0}
`,ge=({tabs:e,tabRefs:n,selectedIndex:t,size:r})=>{const[u,i]=f.useState(0),[c,d]=f.useState(0);return f.useEffect(()=>{let T=0;l.Children.forEach(e,a=>{var b;if(l.isValidElement(a)&&((b=a.type)==null?void 0:b.tabsRole)==="Tab"){const p=n.current[T];if(p&&(a.props.selected||t===T)){const g=getComputedStyle(p),E=p.clientWidth-parseFloat(g.paddingLeft)-parseFloat(g.paddingRight);d(E),i((p==null?void 0:p.offsetLeft)??0)}T++}})},[t]),l.createElement(Ze,{style:{transform:`translateX(${u}px)`,width:`${c}px`},animate:typeof t<"u",size:r})},et=ge;ge.__docgenInfo={description:"",methods:[],displayName:"ActiveTabIndicator",props:{tabs:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tabRefs:{required:!0,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<(HTMLAnchorElement | null)[]>",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(HTMLAnchorElement | null)[]"}]},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},size:{required:!0,tsType:{name:"Sizing"},description:""}}};const W=({animate:e=!0,testId:n="TabList",size:t="sm",children:r,...u})=>{const i=f.useRef([]),[c,d]=f.useState();let T=0;return l.createElement(Je,{"data-testid":n,...u},e&&l.createElement(et,{tabs:r,tabRefs:i,selectedIndex:c,size:t}),l.Children.map(r,a=>{var b;if(l.isValidElement(a)&&((b=a.type)==null?void 0:b.tabsRole)==="Tab"){const p=T++;return a.props.selected&&c!==p&&d(p),l.cloneElement(a,{...a.props,ref:g=>{i.current[p]=g},size:t,animate:e})}return a}))};W.tabsRole="TabList";W.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{animate:{defaultValue:{value:"true",computed:!1},required:!1},testId:{defaultValue:{value:"'TabList'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const dt={component:G,title:"components / Tabs",argTypes:{size:{control:"radio",options:Ie}},args:{size:"sm"}},S=e=>{const[n,t]=f.useState(0);return l.createElement(G,{onSelect:t,selectedIndex:n},l.createElement(W,{size:e.size},l.createElement(x,null,"Reward store"),l.createElement(x,null,"Your orders"),l.createElement(x,{disabled:!0},"Points history"),l.createElement(x,null,"How it works")),l.createElement(Ce,{pb:"l"}),l.createElement(v,null,"Reward store content"),l.createElement(v,null,"Your orders content"),l.createElement(v,null,"Points history content"),l.createElement(v,null,"How it works content"))},A={render:({size:e})=>l.createElement(W,{animate:!1,size:e},l.createElement(x,{href:"#TODO"},"Reward store"),l.createElement(x,{onClick:()=>console.log("click"),selected:!0},"Your orders"),l.createElement(x,{disabled:!0},"Points history"),l.createElement(x,{href:"#TODO",target:"_blank"},"How it works"))};S.__docgenInfo={description:"",methods:[],displayName:"Default"};var oe,le,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return <Tabs onSelect={setSelectedIndex} selectedIndex={selectedIndex}>
            <TabList size={args.size}>
                <Tab>Reward store</Tab>
                <Tab>Your orders</Tab>
                <Tab disabled>Points history</Tab>
                <Tab>How it works</Tab>
            </TabList>
            <Box pb="l" />
            <TabPanel>Reward store content</TabPanel>
            <TabPanel>Your orders content</TabPanel>
            <TabPanel>Points history content</TabPanel>
            <TabPanel>How it works content</TabPanel>
        </Tabs>;
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: ({
    size
  }) => {
    return <TabList animate={false} size={size}>
                <Tab href="#TODO">Reward store</Tab>
                <Tab onClick={(): void => console.log('click')} selected>
                    Your orders
                </Tab>
                <Tab disabled>Points history</Tab>
                <Tab href="#TODO" target="_blank">
                    How it works
                </Tab>
            </TabList>;
  }
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const ut=["Default","StaticTabList"];export{S as Default,A as StaticTabList,ut as __namedExportsOrder,dt as default};
