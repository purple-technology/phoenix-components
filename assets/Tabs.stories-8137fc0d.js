import{r as f,e as g,d as L,j as b,l as B}from"./iframe-bef07166.js";import{p as be,c as q}from"./clsx-3f4d3d07.js";import{a as ke}from"./Sizing-35dbcd46.js";import{B as Pe}from"./index-643a9259.js";import{a as re}from"./helpers-ed7a2f24.js";import"./index.esm-08e1df75.js";import"./SpacingStyles-3467cbc6.js";import"./TextStyles-858d76bf.js";import"./Color-0aa54fb0.js";function G(e){return n=>!!n.type&&n.type.tabsRole===e}const _=G("Tab"),U=G("TabList"),W=G("TabPanel");function Re(e){return _(e)||U(e)||W(e)}function X(e,n){return f.Children.map(e,t=>t===null?null:Re(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:X(t.props.children,n)})):t)}function F(e,n){return f.Children.forEach(e,t=>{t!==null&&(_(t)||W(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(U(t)&&n(t),F(t.props.children,n)))})}function pe(e,n,t){let r,d=0,l=0,i=!1;const u=[],m=e[n];return F(m,o=>{U(o)&&(o.props&&o.props.children&&typeof o.props.children=="object"&&F(o.props.children,c=>u.push(c)),i&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),i=!0),_(o)?((!i||u.indexOf(o)===-1)&&(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),d++):W(o)&&l++}),!r&&d!==l&&(r=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${d} 'Tab' and ${l} 'TabPanel'.`)),r}function ve(e,n,t,r,d){const l=e[n],i=d||n;let u=null;return l&&typeof l!="function"?u=new Error(`Invalid ${r} \`${i}\` of type \`${typeof l}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&l==null&&(u=new Error(`The ${r} \`${i}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),u}function Ne(e,n,t,r,d){const l=e[n],i=d||n;let u=null;if(l!=null&&typeof l!="number")u=new Error(`Invalid ${r} \`${i}\` of type \`${typeof l}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&l!=null)return new Error(`The ${r} \`${i}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${i}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return u}function me(e){let n=0;return F(e,t=>{_(t)&&n++}),n}const Ee=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function Se(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function Te(e){return e&&"getAttribute"in e}function ae(e){return Te(e)&&e.getAttribute("data-rttab")}function v(e){return Te(e)&&e.getAttribute("aria-disabled")==="true"}let z;function je(e){const n=e||(typeof window<"u"?window:void 0);try{z=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{z=!1}}const Le={className:"react-tabs",focus:!1},_e={children:pe},Oe=e=>{be.checkPropTypes(_e,e,"prop","UncontrolledTabs");let n=f.useRef([]),t=f.useRef([]);const r=f.useRef();function d(s,a){if(s<0||s>=o())return;const{onSelect:p,selectedIndex:N}=e;p(s,N,a)}function l(s){const a=o();for(let p=s+1;p<a;p++)if(!v(c(p)))return p;for(let p=0;p<s;p++)if(!v(c(p)))return p;return s}function i(s){let a=s;for(;a--;)if(!v(c(a)))return a;for(a=o();a-- >s;)if(!v(c(a)))return a;return s}function u(){const s=o();for(let a=0;a<s;a++)if(!v(c(a)))return a;return null}function m(){let s=o();for(;s--;)if(!v(c(s)))return s;return null}function o(){const{children:s}=e;return me(s)}function c(s){return n.current[`tabs-${s}`]}function T(){let s=0;const{children:a,disabledTabClassName:p,focus:N,forceRenderTabPanel:h,selectedIndex:$,selectedTabClassName:I,selectedTabPanelClassName:Q,environment:Z}=e;t.current=t.current||[];let $e=t.current.length-o();const Ie=f.useId();for(;$e++<0;)t.current.push(`${Ie}${t.current.length}`);return X(a,R=>{let H=R;if(U(R)){let P=0,ee=!1;z==null&&je(Z);const te=Z||(typeof window<"u"?window:void 0);z&&te&&(ee=g.Children.toArray(R.props.children).filter(_).some((ne,K)=>te.document.activeElement===c(K))),H=f.cloneElement(R,{children:X(R.props.children,ne=>{const K=`tabs-${P}`,se=$===P,V={tabRef:Ce=>{n.current[K]=Ce},id:t.current[P],selected:se,focus:se&&(N||ee)};return I&&(V.selectedClassName=I),p&&(V.disabledClassName=p),P++,f.cloneElement(ne,V)})})}else if(W(R)){const P={id:t.current[s],selected:$===s};h&&(P.forceRender=h),Q&&(P.selectedClassName=Q),s++,H=f.cloneElement(R,P)}return H})}function y(s){const{direction:a,disableUpDownKeys:p,disableLeftRightKeys:N}=e;if(x(s.target)){let{selectedIndex:h}=e,$=!1,I=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&($=!0,I=!1,C(s)),!N&&(s.keyCode===37||s.code==="ArrowLeft")||!p&&(s.keyCode===38||s.code==="ArrowUp")?(a==="rtl"?h=l(h):h=i(h),$=!0,I=!0):!N&&(s.keyCode===39||s.code==="ArrowRight")||!p&&(s.keyCode===40||s.code==="ArrowDown")?(a==="rtl"?h=i(h):h=l(h),$=!0,I=!0):s.keyCode===35||s.code==="End"?(h=m(),$=!0,I=!0):(s.keyCode===36||s.code==="Home")&&(h=u(),$=!0,I=!0),$&&s.preventDefault(),I&&d(h,s)}}function C(s){let a=s.target;do if(x(a)){if(v(a))return;const p=[].slice.call(a.parentNode.children).filter(ae).indexOf(a);d(p,s);return}while((a=a.parentNode)!=null)}function x(s){if(!ae(s))return!1;let a=s.parentElement;do{if(a===r.current)return!0;if(a.getAttribute("data-rttabs"))break;a=a.parentElement}while(a);return!1}const k=Object.assign({},Le,e),{className:E,domRef:O}=k,we=Se(k,Ee);return g.createElement("div",Object.assign({},we,{className:q(E),onClick:C,onKeyDown:y,ref:s=>{r.current=s,O&&O(s)},"data-rttabs":!0}),T())},Ae=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function De(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Fe=0,D=1,ze={children:pe,onSelect:ve,selectedIndex:Ne},qe={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},Ue=e=>e.selectedIndex===null?D:Fe,he=e=>{be.checkPropTypes(ze,e,"prop","Tabs");const n=Object.assign({},qe,e),{children:t,defaultFocus:r,defaultIndex:d,focusTabOnClick:l,onSelect:i}=n,u=De(n,Ae),[m,o]=f.useState(r),[c]=f.useState(Ue(u)),[T,y]=f.useState(c===D?d||0:null);if(f.useEffect(()=>{o(!1)},[]),c===D){const k=me(t);f.useEffect(()=>{if(T!=null){const E=Math.max(0,k-1);y(Math.min(T,E))}},[k])}const C=(k,E,O)=>{typeof i=="function"&&i(k,E,O)===!1||(l&&o(!0),c===D&&y(k))};let x=Object.assign({},e,u);return x.focus=m,x.onSelect=C,T!=null&&(x.selectedIndex=T),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,g.createElement(Oe,x,t)};he.tabsRole="Tabs";const We=["children","className"];function Me(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const He={className:"react-tabs__tab-list"},ye=e=>{const n=Object.assign({},He,e),{children:t,className:r}=n,d=Me(n,We);return g.createElement("ul",Object.assign({},d,{className:q(r),role:"tablist"}),t)};ye.tabsRole="TabList";const Ke=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function Ve(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Y="react-tabs__tab",Ye={className:Y,disabledClassName:`${Y}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${Y}--selected`},xe=e=>{let n=f.useRef();const t=Object.assign({},Ye,e),{children:r,className:d,disabled:l,disabledClassName:i,focus:u,id:m,selected:o,selectedClassName:c,tabIndex:T,tabRef:y}=t,C=Ve(t,Ke);return f.useEffect(()=>{o&&u&&n.current.focus()},[o,u]),g.createElement("li",Object.assign({},C,{className:q(d,{[c]:o,[i]:l}),ref:x=>{n.current=x,y&&y(x)},role:"tab",id:`tab${m}`,"aria-selected":o?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${m}`,tabIndex:T||(o?"0":null),"data-rttab":!0}),r)};xe.tabsRole="Tab";const Be=["children","className","forceRender","id","selected","selectedClassName"];function Xe(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const oe="react-tabs__tab-panel",Ge={className:oe,forceRender:!1,selectedClassName:`${oe}--selected`},S=e=>{const n=Object.assign({},Ge,e),{children:t,className:r,forceRender:d,id:l,selected:i,selectedClassName:u}=n,m=Xe(n,Be);return g.createElement("div",Object.assign({},m,{className:q(r,{[u]:i}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),d||i?t:null)};S.tabsRole="TabPanel";const Je=L(he)`
	.react-tabs__tab-panel {
		display: none;
	}

	.react-tabs__tab-panel--selected {
		display: block;
	}
`,J=({testId:e="Tabs",...n})=>b.jsx(Je,{"data-testid":e,...n});J.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tabs'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};L.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`;const Qe=L(ye)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`,Ze=L.a`
	display: block;
	height: ${({theme:e,size:n})=>re(e.tokens.ref.fontSize[n??"md"])*2+12}px;
	line-height: ${({theme:e,size:n})=>re(e.tokens.ref.fontSize[n??"md"])*2+12}px;
	padding: 0 12px;
	text-decoration: none;
	font-weight: ${({selected:e,theme:n})=>e?n.tokens.ref.fontWeight.bold:n.tokens.ref.fontWeight.regular};
	font-size: ${({theme:e,size:n})=>e.tokens.ref.fontSize[n??"md"]};
	cursor: ${({disabled:e})=>e?"default":"pointer"};

	color: ${({theme:e,disabled:n,selected:t})=>n?e.tokens.color.text.quaternary:t?e.tokens.color.text.brand.primary:e.tokens.color.text.primary};
	${({theme:e,disabled:n,selected:t})=>{if(!n&&!t)return B`
				&:hover {
					color: ${e.tokens.color.text.brand.primary};
				}
			`}}

	${({theme:e,selected:n,animate:t})=>{if(!t&&n)return B`
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
`,w=({disabledClassName:e,selectedClassName:n,tabIndex:t,id:r,testId:d="Tab",ref:l,...i})=>b.jsx(xe,{disabled:i.disabled,disabledClassName:e,selectedClassName:n,tabIndex:t,selected:i.selected,id:r,children:b.jsx(Ze,{ref:l,"data-testid":d,...i})});w.tabsRole="Tab";w.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{testId:{defaultValue:{value:"'Tab'",computed:!1},required:!1}}};const et=L.div`
	height: ${({theme:e})=>e.tokens.tabs.borderWidth.tab.bottom};
	background: ${({theme:e})=>e.tokens.color.text.brand.primary};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({theme:e,animate:n})=>n?B`
					transition: transform ${e.tokens.duration.transition.base},
						width ${e.tokens.duration.transition.base};
			  `:void 0}
`,ge=({tabs:e,tabRefs:n,selectedIndex:t,size:r})=>{const[d,l]=f.useState(0),[i,u]=f.useState(0);return f.useEffect(()=>{let m=0;g.Children.forEach(e,o=>{if(g.isValidElement(o)&&o.type.tabsRole==="Tab"){const c=n.current[m];if(c&&(o.props.selected||t===m)){const T=getComputedStyle(c),y=c.clientWidth-parseFloat(T.paddingLeft)-parseFloat(T.paddingRight);u(y),l((c==null?void 0:c.offsetLeft)??0)}m++}})},[t]),b.jsx(et,{style:{transform:`translateX(${d}px)`,width:`${i}px`},animate:typeof t<"u",size:r})},tt=ge;ge.__docgenInfo={description:"",methods:[],displayName:"ActiveTabIndicator",props:{tabs:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tabRefs:{required:!0,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<(HTMLAnchorElement | null)[]>",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(HTMLAnchorElement | null)[]"}]},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},size:{required:!0,tsType:{name:"Sizing"},description:""}}};const M=({animate:e=!0,testId:n="TabList",size:t="sm",children:r,...d})=>{const l=f.useRef([]),[i,u]=f.useState();let m=0;return b.jsxs(Qe,{"data-testid":n,...d,children:[e&&b.jsx(tt,{tabs:r,tabRefs:l,selectedIndex:i,size:t}),g.Children.map(r,o=>{var T;const c=o;if(g.isValidElement(o)&&((T=o.type)==null?void 0:T.tabsRole)==="Tab"){const y=m++;return c.props.selected&&i!==y&&u(y),g.cloneElement(c,{...c.props,ref:C=>{l.current[y]=C},size:t,animate:e})}return o})]})};M.tabsRole="TabList";M.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{animate:{defaultValue:{value:"true",computed:!1},required:!1},testId:{defaultValue:{value:"'TabList'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const ut={component:J,title:"components / Tabs",argTypes:{size:{control:"radio",options:ke}},args:{size:"sm"}},j=e=>{const[n,t]=f.useState(0);return b.jsxs(J,{onSelect:t,selectedIndex:n,children:[b.jsxs(M,{size:e.size,children:[b.jsx(w,{children:"Reward store"}),b.jsx(w,{children:"Your orders"}),b.jsx(w,{disabled:!0,children:"Points history"}),b.jsx(w,{children:"How it works"})]}),b.jsx(Pe,{pb:"l"}),b.jsx(S,{children:"Reward store content"}),b.jsx(S,{children:"Your orders content"}),b.jsx(S,{children:"Points history content"}),b.jsx(S,{children:"How it works content"})]})},A={render:({size:e})=>b.jsxs(M,{animate:!1,size:e,children:[b.jsx(w,{href:"#TODO",children:"Reward store"}),b.jsx(w,{onClick:()=>console.log("click"),selected:!0,children:"Your orders"}),b.jsx(w,{disabled:!0,children:"Points history"}),b.jsx(w,{href:"#TODO",target:"_blank",children:"How it works"})]})};j.__docgenInfo={description:"",methods:[],displayName:"Default"};var le,ie,ce;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
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
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,fe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const ft=["Default","StaticTabList"];export{j as Default,A as StaticTabList,ft as __namedExportsOrder,ut as default};
