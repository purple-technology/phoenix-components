import{r as b,e as l,s as L,C as Y}from"./iframe-22864007.js";import{p as fe,c as z}from"./clsx-71a93803.js";import{a as Ie}from"./Sizing-35dbcd46.js";import{B as Ce}from"./index-71c111d9.js";import{a as se}from"./helpers-4992d6b4.js";import"./index.esm-ed4e9270.js";import"./SpacingStyles-a9a54458.js";import"./TextStyles-7697a8a1.js";import"./Color-0aa54fb0.js";function X(e){return n=>!!n.type&&n.type.tabsRole===e}const _=X("Tab"),q=X("TabList"),U=X("TabPanel");function ke(e){return _(e)||q(e)||U(e)}function B(e,n){return b.Children.map(e,t=>t===null?null:ke(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"?b.cloneElement(t,Object.assign({},t.props,{children:B(t.props.children,n)})):t)}function j(e,n){return b.Children.forEach(e,t=>{t!==null&&(_(t)||U(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(q(t)&&n(t),j(t.props.children,n)))})}function be(e,n,t){let r,u=0,i=0,c=!1;const f=[],m=e[n];return j(m,o=>{q(o)&&(o.props&&o.props.children&&typeof o.props.children=="object"&&j(o.props.children,d=>f.push(d)),c&&(r=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),_(o)?((!c||f.indexOf(o)===-1)&&(r=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),u++):U(o)&&i++}),!r&&u!==i&&(r=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${u} 'Tab' and ${i} 'TabPanel'.`)),r}function Pe(e,n,t,r,u){const i=e[n],c=u||n;let f=null;return i&&typeof i!="function"?f=new Error(`Invalid ${r} \`${c}\` of type \`${typeof i}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&i==null&&(f=new Error(`The ${r} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),f}function Re(e,n,t,r,u){const i=e[n],c=u||n;let f=null;if(i!=null&&typeof i!="number")f=new Error(`Invalid ${r} \`${c}\` of type \`${typeof i}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&i!=null)return new Error(`The ${r} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return f}function pe(e){let n=0;return j(e,t=>{_(t)&&n++}),n}const ve=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function Ne(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function me(e){return e&&"getAttribute"in e}function re(e){return me(e)&&e.getAttribute("data-rttab")}function P(e){return me(e)&&e.getAttribute("aria-disabled")==="true"}let F;function Se(e){const n=e||(typeof window<"u"?window:void 0);try{F=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{F=!1}}const Le={className:"react-tabs",focus:!1},_e={children:be},Oe=e=>{fe.checkPropTypes(_e,e,"prop","UncontrolledTabs");let n=b.useRef([]),t=b.useRef([]);const r=b.useRef();function u(s,a){if(s<0||s>=o())return;const{onSelect:p,selectedIndex:R}=e;p(s,R,a)}function i(s){const a=o();for(let p=s+1;p<a;p++)if(!P(d(p)))return p;for(let p=0;p<s;p++)if(!P(d(p)))return p;return s}function c(s){let a=s;for(;a--;)if(!P(d(a)))return a;for(a=o();a-- >s;)if(!P(d(a)))return a;return s}function f(){const s=o();for(let a=0;a<s;a++)if(!P(d(a)))return a;return null}function m(){let s=o();for(;s--;)if(!P(d(s)))return s;return null}function o(){const{children:s}=e;return pe(s)}function d(s){return n.current[`tabs-${s}`]}function T(){let s=0;const{children:a,disabledTabClassName:p,focus:R,forceRenderTabPanel:y,selectedIndex:w,selectedTabClassName:$,selectedTabPanelClassName:J,environment:Q}=e;t.current=t.current||[];let we=t.current.length-o();const $e=b.useId();for(;we++<0;)t.current.push(`${$e}${t.current.length}`);return B(a,k=>{let M=k;if(q(k)){let C=0,Z=!1;F==null&&Se(Q);const ee=Q||(typeof window<"u"?window:void 0);F&&ee&&(Z=l.Children.toArray(k.props.children).filter(_).some((te,H)=>ee.document.activeElement===d(H))),M=b.cloneElement(k,{children:B(k.props.children,te=>{const H=`tabs-${C}`,ne=w===C,K={tabRef:Ee=>{n.current[H]=Ee},id:t.current[C],selected:ne,focus:ne&&(R||Z)};return $&&(K.selectedClassName=$),p&&(K.disabledClassName=p),C++,b.cloneElement(te,K)})})}else if(U(k)){const C={id:t.current[s],selected:w===s};y&&(C.forceRender=y),J&&(C.selectedClassName=J),s++,M=b.cloneElement(k,C)}return M})}function h(s){const{direction:a,disableUpDownKeys:p,disableLeftRightKeys:R}=e;if(x(s.target)){let{selectedIndex:y}=e,w=!1,$=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(w=!0,$=!1,E(s)),!R&&(s.keyCode===37||s.code==="ArrowLeft")||!p&&(s.keyCode===38||s.code==="ArrowUp")?(a==="rtl"?y=i(y):y=c(y),w=!0,$=!0):!R&&(s.keyCode===39||s.code==="ArrowRight")||!p&&(s.keyCode===40||s.code==="ArrowDown")?(a==="rtl"?y=c(y):y=i(y),w=!0,$=!0):s.keyCode===35||s.code==="End"?(y=m(),w=!0,$=!0):(s.keyCode===36||s.code==="Home")&&(y=f(),w=!0,$=!0),w&&s.preventDefault(),$&&u(y,s)}}function E(s){let a=s.target;do if(x(a)){if(P(a))return;const p=[].slice.call(a.parentNode.children).filter(re).indexOf(a);u(p,s);return}while((a=a.parentNode)!=null)}function x(s){if(!re(s))return!1;let a=s.parentElement;do{if(a===r.current)return!0;if(a.getAttribute("data-rttabs"))break;a=a.parentElement}while(a);return!1}const I=Object.assign({},Le,e),{className:v,domRef:O}=I,ge=Ne(I,ve);return l.createElement("div",Object.assign({},ge,{className:z(v),onClick:E,onKeyDown:h,ref:s=>{r.current=s,O&&O(s)},"data-rttabs":!0}),T())},Ae=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function De(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const je=0,D=1,Fe={children:be,onSelect:Pe,selectedIndex:Re},ze={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},qe=e=>e.selectedIndex===null?D:je,Te=e=>{fe.checkPropTypes(Fe,e,"prop","Tabs");const n=Object.assign({},ze,e),{children:t,defaultFocus:r,defaultIndex:u,focusTabOnClick:i,onSelect:c}=n,f=De(n,Ae),[m,o]=b.useState(r),[d]=b.useState(qe(f)),[T,h]=b.useState(d===D?u||0:null);if(b.useEffect(()=>{o(!1)},[]),d===D){const I=pe(t);b.useEffect(()=>{if(T!=null){const v=Math.max(0,I-1);h(Math.min(T,v))}},[I])}const E=(I,v,O)=>{typeof c=="function"&&c(I,v,O)===!1||(i&&o(!0),d===D&&h(I))};let x=Object.assign({},e,f);return x.focus=m,x.onSelect=E,T!=null&&(x.selectedIndex=T),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,l.createElement(Oe,x,t)};Te.tabsRole="Tabs";const Ue=["children","className"];function We(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const Me={className:"react-tabs__tab-list"},ye=e=>{const n=Object.assign({},Me,e),{children:t,className:r}=n,u=We(n,Ue);return l.createElement("ul",Object.assign({},u,{className:z(r),role:"tablist"}),t)};ye.tabsRole="TabList";const He=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function Ke(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const V="react-tabs__tab",Ve={className:V,disabledClassName:`${V}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${V}--selected`},he=e=>{let n=b.useRef();const t=Object.assign({},Ve,e),{children:r,className:u,disabled:i,disabledClassName:c,focus:f,id:m,selected:o,selectedClassName:d,tabIndex:T,tabRef:h}=t,E=Ke(t,He);return b.useEffect(()=>{o&&f&&n.current.focus()},[o,f]),l.createElement("li",Object.assign({},E,{className:z(u,{[d]:o,[c]:i}),ref:x=>{n.current=x,h&&h(x)},role:"tab",id:`tab${m}`,"aria-selected":o?"true":"false","aria-disabled":i?"true":"false","aria-controls":`panel${m}`,tabIndex:T||(o?"0":null),"data-rttab":!0}),r)};he.tabsRole="Tab";const Ye=["children","className","forceRender","id","selected","selectedClassName"];function Be(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}const ae="react-tabs__tab-panel",Xe={className:ae,forceRender:!1,selectedClassName:`${ae}--selected`},N=e=>{const n=Object.assign({},Xe,e),{children:t,className:r,forceRender:u,id:i,selected:c,selectedClassName:f}=n,m=Be(n,Ye);return l.createElement("div",Object.assign({},m,{className:z(r,{[f]:c}),role:"tabpanel",id:`panel${i}`,"aria-labelledby":`tab${i}`}),u||c?t:null)};N.tabsRole="TabPanel";const Ge=L(Te)`
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
`,g=({disabledClassName:e,selectedClassName:n,tabIndex:t,id:r,testId:u="Tab",ref:i,...c})=>l.createElement(he,{disabled:c.disabled,disabledClassName:e,selectedClassName:n,tabIndex:t,selected:c.selected,id:r},l.createElement(Qe,{ref:i,"data-testid":u,...c}));g.tabsRole="Tab";g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{testId:{defaultValue:{value:"'Tab'",computed:!1},required:!1}}};const Ze=L.div`
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
`,xe=({tabs:e,tabRefs:n,selectedIndex:t,size:r})=>{const[u,i]=b.useState(0),[c,f]=b.useState(0);return b.useEffect(()=>{let m=0;l.Children.forEach(e,o=>{if(l.isValidElement(o)&&o.type.tabsRole==="Tab"){const d=n.current[m];if(d&&(o.props.selected||t===m)){const T=getComputedStyle(d),h=d.clientWidth-parseFloat(T.paddingLeft)-parseFloat(T.paddingRight);f(h),i((d==null?void 0:d.offsetLeft)??0)}m++}})},[t]),l.createElement(Ze,{style:{transform:`translateX(${u}px)`,width:`${c}px`},animate:typeof t<"u",size:r})},et=xe;xe.__docgenInfo={description:"",methods:[],displayName:"ActiveTabIndicator",props:{tabs:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tabRefs:{required:!0,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<(HTMLAnchorElement | null)[]>",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(HTMLAnchorElement | null)[]"}]},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},size:{required:!0,tsType:{name:"Sizing"},description:""}}};const W=({animate:e=!0,testId:n="TabList",size:t="sm",children:r,...u})=>{const i=b.useRef([]),[c,f]=b.useState();let m=0;return l.createElement(Je,{"data-testid":n,...u},e&&l.createElement(et,{tabs:r,tabRefs:i,selectedIndex:c,size:t}),l.Children.map(r,o=>{var T;const d=o;if(l.isValidElement(o)&&((T=o.type)==null?void 0:T.tabsRole)==="Tab"){const h=m++;return d.props.selected&&c!==h&&f(h),l.cloneElement(d,{...d.props,ref:E=>{i.current[h]=E},size:t,animate:e})}return o}))};W.tabsRole="TabList";W.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{animate:{defaultValue:{value:"true",computed:!1},required:!1},testId:{defaultValue:{value:"'TabList'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const dt={component:G,title:"components / Tabs",argTypes:{size:{control:"radio",options:Ie}},args:{size:"sm"}},S=e=>{const[n,t]=b.useState(0);return l.createElement(G,{onSelect:t,selectedIndex:n},l.createElement(W,{size:e.size},l.createElement(g,null,"Reward store"),l.createElement(g,null,"Your orders"),l.createElement(g,{disabled:!0},"Points history"),l.createElement(g,null,"How it works")),l.createElement(Ce,{pb:"l"}),l.createElement(N,null,"Reward store content"),l.createElement(N,null,"Your orders content"),l.createElement(N,null,"Points history content"),l.createElement(N,null,"How it works content"))},A={render:({size:e})=>l.createElement(W,{animate:!1,size:e},l.createElement(g,{href:"#TODO"},"Reward store"),l.createElement(g,{onClick:()=>console.log("click"),selected:!0},"Your orders"),l.createElement(g,{disabled:!0},"Points history"),l.createElement(g,{href:"#TODO",target:"_blank"},"How it works"))};S.__docgenInfo={description:"",methods:[],displayName:"Default"};var oe,le,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
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
