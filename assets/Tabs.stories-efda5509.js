import{r as d,e as i,s as L,C as X}from"./iframe-d0511029.js";import{a as _e}from"./Sizing-35dbcd46.js";import{B as Le}from"./index-1ceb11b8.js";import{a as Te}from"./helpers-4992d6b4.js";import"./index.esm-f50a7405.js";import"./SpacingStyles-66d9a443.js";import"./TextStyles-a2f425cd.js";import"./Color-0aa54fb0.js";function re(t){return function(e){return!!e.type&&e.type.tabsRole===t}}var D=re("Tab"),ne=re("TabList"),se=re("TabPanel");function G(){return G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},G.apply(this,arguments)}function $e(t){return D(t)||ne(t)||se(t)}function J(t,e){return d.Children.map(t,function(a){return a===null?null:$e(a)?e(a):a.props&&a.props.children&&typeof a.props.children=="object"?d.cloneElement(a,G({},a.props,{children:J(a.props.children,e)})):a})}function Re(t,e){return d.Children.forEach(t,function(a){a!==null&&(D(a)||se(a)?e(a):a.props&&a.props.children&&typeof a.props.children=="object"&&(ne(a)&&e(a),Re(a.props.children,e)))})}function Pe(t){var e,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=Pe(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function z(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=Pe(t))&&(r&&(r+=" "),r+=e);return r}var Ae=0;function pe(){return"react-tabs-"+Ae++}function xe(t){var e=0;return Re(t,function(a){D(a)&&e++}),e}var je=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function Q(){return Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},Q.apply(this,arguments)}function qe(t,e){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(e.indexOf(s)>=0)&&(a[s]=t[s]);return a}function Oe(t){return t&&"getAttribute"in t}function ve(t){return Oe(t)&&t.getAttribute("data-rttab")}function x(t){return Oe(t)&&t.getAttribute("aria-disabled")==="true"}var q;function De(t){var e=t||(typeof window<"u"?window:void 0);try{q=!!(typeof e<"u"&&e.document&&e.document.activeElement)}catch{q=!1}}var ze={className:"react-tabs",focus:!1},le=function(e){var a=d.useRef([]),r=d.useRef([]),s=d.useRef([]),o=d.useRef();function f(n,l){if(!(n<0||n>=c())){var v=e.onSelect,u=e.selectedIndex;v(n,u,l)}}function T(n){for(var l=c(),v=n+1;v<l;v++)if(!x(m(v)))return v;for(var u=0;u<n;u++)if(!x(m(u)))return u;return n}function p(n){for(var l=n;l--;)if(!x(m(l)))return l;for(l=c();l-- >n;)if(!x(m(l)))return l;return n}function b(){for(var n=c(),l=0;l<n;l++)if(!x(m(l)))return l;return null}function y(){for(var n=c();n--;)if(!x(m(n)))return n;return null}function c(){var n=e.children;return xe(n)}function m(n){return a.current["tabs-"+n]}function h(){var n=0,l=e.children,v=e.disabledTabClassName,u=e.focus,C=e.forceRenderTabPanel,w=e.selectedIndex,ie=e.selectedTabClassName,ce=e.selectedTabPanelClassName,de=e.environment;r.current=r.current||[],s.current=s.current||[];for(var ke=r.current.length-c();ke++<0;)r.current.push(pe()),s.current.push(pe());return J(l,function(P){var W=P;if(ne(P)){var S=0,ue=!1;q==null&&De(de);var fe=de||(typeof window<"u"?window:void 0);q&&fe&&(ue=i.Children.toArray(P.props.children).filter(D).some(function(be,V){return fe.document.activeElement===m(V)})),W=d.cloneElement(P,{children:J(P.props.children,function(be){var V="tabs-"+S,me=w===S,Y={tabRef:function(Se){a.current[V]=Se},id:r.current[S],panelId:s.current[S],selected:me,focus:me&&(u||ue)};return ie&&(Y.selectedClassName=ie),v&&(Y.disabledClassName=v),S++,d.cloneElement(be,Y)})})}else if(se(P)){var H={id:s.current[n],tabId:r.current[n],selected:w===n};C&&(H.forceRender=C),ce&&(H.selectedClassName=ce),n++,W=d.cloneElement(P,H)}return W})}function E(n){var l=e.direction,v=e.disableUpDownKeys;if(I(n.target)){var u=e.selectedIndex,C=!1,w=!1;(n.code==="Space"||n.keyCode===32||n.code==="Enter"||n.keyCode===13)&&(C=!0,w=!1,R(n)),n.code==="ArrowLeft"||n.keyCode===37||!v&&(n.keyCode===38||n.code==="ArrowUp")?(l==="rtl"?u=T(u):u=p(u),C=!0,w=!0):n.code==="ArrowRight"||n.keyCode===39||!v&&(n.keyCode===40||n.code==="ArrowDown")?(l==="rtl"?u=p(u):u=T(u),C=!0,w=!0):n.keyCode===35||n.code==="End"?(u=y(),C=!0,w=!0):(n.keyCode===36||n.code==="Home")&&(u=b(),C=!0,w=!0),C&&n.preventDefault(),w&&f(u,n)}}function R(n){var l=n.target;do if(I(l)){if(x(l))return;var v=[].slice.call(l.parentNode.children).filter(ve).indexOf(l);f(v,n);return}while((l=l.parentNode)!=null)}function I(n){if(!ve(n))return!1;var l=n.parentElement;do{if(l===o.current)return!0;if(l.getAttribute("data-rttabs"))break;l=l.parentElement}while(l);return!1}e.children;var g=e.className;e.disabledTabClassName;var k=e.domRef;e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys;var $=qe(e,je);return i.createElement("div",Q({},$,{className:z(g),onClick:R,onKeyDown:E,ref:function(l){o.current=l,k&&k(l)},"data-rttabs":!0}),h())};le.defaultProps=ze;le.propTypes={};function Z(){return Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},Z.apply(this,arguments)}var Ue=0,j=1,Fe={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},Ke=function(e){return e.selectedIndex===null?j:Ue},U=function(e){var a=e.children,r=e.defaultFocus,s=e.defaultIndex,o=e.focusTabOnClick,f=e.onSelect,T=d.useState(r),p=T[0],b=T[1],y=d.useState(Ke(e)),c=y[0],m=d.useState(c===j?s||0:null),h=m[0],E=m[1];if(d.useEffect(function(){b(!1)},[]),c===j){var R=xe(a);d.useEffect(function(){if(h!=null){var k=Math.max(0,R-1);E(Math.min(h,k))}},[R])}var I=function($,n,l){typeof f=="function"&&f($,n,l)===!1||(o&&b(!0),c===j&&E($))},g=Z({},e);return g.focus=p,g.onSelect=I,h!=null&&(g.selectedIndex=h),delete g.defaultFocus,delete g.defaultIndex,delete g.focusTabOnClick,i.createElement(le,g,a)};U.propTypes={};U.defaultProps=Fe;U.tabsRole="Tabs";var Me=["children","className"];function ee(){return ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},ee.apply(this,arguments)}function We(t,e){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(e.indexOf(s)>=0)&&(a[s]=t[s]);return a}var He={className:"react-tabs__tab-list"},F=function(e){var a=e.children,r=e.className,s=We(e,Me);return i.createElement("ul",ee({},s,{className:z(r),role:"tablist"}),a)};F.tabsRole="TabList";F.propTypes={};F.defaultProps=He;var Ve=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function te(){return te=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},te.apply(this,arguments)}function Ye(t,e){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(e.indexOf(s)>=0)&&(a[s]=t[s]);return a}var B="react-tabs__tab",Be={className:B,disabledClassName:B+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:B+"--selected"},K=function(e){var a,r=d.useRef(),s=e.children,o=e.className,f=e.disabled,T=e.disabledClassName,p=e.focus,b=e.id,y=e.panelId,c=e.selected,m=e.selectedClassName,h=e.tabIndex,E=e.tabRef,R=Ye(e,Ve);return d.useEffect(function(){c&&p&&r.current.focus()},[c,p]),i.createElement("li",te({},R,{className:z(o,(a={},a[m]=c,a[T]=f,a)),ref:function(g){r.current=g,E&&E(g)},role:"tab",id:b,"aria-selected":c?"true":"false","aria-disabled":f?"true":"false","aria-controls":y,tabIndex:h||(c?"0":null),"data-rttab":!0}),s)};K.propTypes={};K.tabsRole="Tab";K.defaultProps=Be;var Xe=["children","className","forceRender","id","selected","selectedClassName","tabId"];function ae(){return ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},ae.apply(this,arguments)}function Ge(t,e){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(e.indexOf(s)>=0)&&(a[s]=t[s]);return a}var ye="react-tabs__tab-panel",Je={className:ye,forceRender:!1,selectedClassName:ye+"--selected"},O=function(e){var a,r=e.children,s=e.className,o=e.forceRender,f=e.id,T=e.selected,p=e.selectedClassName,b=e.tabId,y=Ge(e,Xe);return i.createElement("div",ae({},y,{className:z(s,(a={},a[p]=T,a)),role:"tabpanel",id:f,"aria-labelledby":b}),o||T?r:null)};O.tabsRole="TabPanel";O.propTypes={};O.defaultProps=Je;const Qe=L(U)`
	.react-tabs__tab-panel {
		display: none;
	}

	.react-tabs__tab-panel--selected {
		display: block;
	}
`,oe=({testId:t="Tabs",...e})=>i.createElement(Qe,{"data-testid":t,...e});oe.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tabs'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};L.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`;const Ze=L(F)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0 -12px;
	position: relative;
`,et=L.a`
	display: block;
	height: ${({theme:t,size:e})=>Te(t.tokens.ref.fontSize[e??"md"])*2+12}px;
	line-height: ${({theme:t,size:e})=>Te(t.tokens.ref.fontSize[e??"md"])*2+12}px;
	padding: 0 12px;
	text-decoration: none;
	font-weight: ${({selected:t,theme:e})=>t?e.tokens.ref.fontWeight.bold:e.tokens.ref.fontWeight.regular};
	font-size: ${({theme:t,size:e})=>t.tokens.ref.fontSize[e??"md"]};
	cursor: ${({disabled:t})=>t?"default":"pointer"};

	color: ${({theme:t,disabled:e,selected:a})=>e?t.tokens.color.text.quaternary:a?t.tokens.color.text.brand.primary:t.tokens.color.text.primary};
	${({theme:t,disabled:e,selected:a})=>{if(!e&&!a)return X`
				&:hover {
					color: ${t.tokens.color.text.brand.primary};
				}
			`}}

	${({theme:t,selected:e,animate:a})=>{if(!a&&e)return X`
				position: relative;
				&:before {
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: 12px;
					height: ${t.tokens.tabs.borderWidth.tab.bottom};
					width: calc(100% - 24px);
					background: ${t.tokens.color.text.brand.primary};
				}
			`}}
`,N=d.forwardRef(function({disabledClassName:e,selectedClassName:a,tabIndex:r,id:s,testId:o="Tab",...f},T){return i.createElement(K,{disabled:f.disabled,disabledClassName:e,selectedClassName:a,tabIndex:r,selected:f.selected,id:s},i.createElement(et,{ref:T,"data-testid":o,...f}))});N.tabsRole="Tab";N.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tab'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},animate:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"Sizing"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},disabledClassName:{required:!1,tsType:{name:"string"},description:""},selectedClassName:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const tt=L.div`
	height: ${({theme:t})=>t.tokens.tabs.borderWidth.tab.bottom};
	background: ${({theme:t})=>t.tokens.color.text.brand.primary};
	position: absolute;
	bottom: 0;
	left: 12px;
	width: 50px;
	${({theme:t,animate:e})=>e?X`
					transition: transform ${t.tokens.duration.transition.base},
						width ${t.tokens.duration.transition.base};
			  `:void 0}
`,Ie=({tabs:t,tabRefs:e,selectedIndex:a,size:r})=>{const[s,o]=d.useState(0),[f,T]=d.useState(0);return d.useEffect(()=>{let p=0;i.Children.forEach(t,b=>{var y;if(i.isValidElement(b)&&((y=b.type)==null?void 0:y.tabsRole)==="Tab"){const c=e.current[p];if(c&&(b.props.selected||a===p)){const m=getComputedStyle(c),h=c.clientWidth-parseFloat(m.paddingLeft)-parseFloat(m.paddingRight);T(h),o((c==null?void 0:c.offsetLeft)??0)}p++}})},[a]),i.createElement(tt,{style:{transform:`translateX(${s}px)`,width:`${f}px`},animate:typeof a<"u",size:r})},at=Ie;Ie.__docgenInfo={description:"",methods:[],displayName:"ActiveTabIndicator",props:{tabs:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tabRefs:{required:!0,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<(HTMLAnchorElement | null)[]>",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(HTMLAnchorElement | null)[]"}]},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},size:{required:!0,tsType:{name:"Sizing"},description:""}}};const M=({animate:t=!0,testId:e="TabList",size:a="sm",children:r,...s})=>{const o=d.useRef([]),[f,T]=d.useState();let p=0;return i.createElement(Ze,{"data-testid":e,...s},t&&i.createElement(at,{tabs:r,tabRefs:o,selectedIndex:f,size:a}),i.Children.map(r,b=>{var y;if(i.isValidElement(b)&&((y=b.type)==null?void 0:y.tabsRole)==="Tab"){const c=p++;return b.props.selected&&f!==c&&T(c),i.cloneElement(b,{...b.props,ref:m=>{o.current[c]=m},size:a,animate:t})}return b}))};M.tabsRole="TabList";M.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{animate:{defaultValue:{value:"true",computed:!1},required:!1},testId:{defaultValue:{value:"'TabList'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const ft={component:oe,title:"components / Tabs",argTypes:{size:{control:"radio",options:_e}},args:{size:"sm"}},_=t=>{const[e,a]=d.useState(0);return i.createElement(oe,{onSelect:a,selectedIndex:e},i.createElement(M,{size:t.size},i.createElement(N,null,"Reward store"),i.createElement(N,null,"Your orders"),i.createElement(N,{disabled:!0},"Points history"),i.createElement(N,null,"How it works")),i.createElement(Le,{pb:"l"}),i.createElement(O,null,"Reward store content"),i.createElement(O,null,"Your orders content"),i.createElement(O,null,"Points history content"),i.createElement(O,null,"How it works content"))},A={render:({size:t})=>i.createElement(M,{animate:!1,size:t},i.createElement(N,{href:"#TODO"},"Reward store"),i.createElement(N,{onClick:()=>console.log("click"),selected:!0},"Your orders"),i.createElement(N,{disabled:!0},"Points history"),i.createElement(N,{href:"#TODO",target:"_blank"},"How it works"))};_.__docgenInfo={description:"",methods:[],displayName:"Default"};var ge,he,Ne;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
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
}`,...(Ne=(he=_.parameters)==null?void 0:he.docs)==null?void 0:Ne.source}}};var Ce,we,Ee;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};const bt=["Default","StaticTabList"];export{_ as Default,A as StaticTabList,bt as __namedExportsOrder,ft as default};
