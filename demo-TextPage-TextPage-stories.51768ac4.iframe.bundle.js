(self.webpackChunk_purple_phoenix_components=self.webpackChunk_purple_phoenix_components||[]).push([[1127],{"./src/demo/TextPage/TextPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextPage:()=>TextPage_stories_TextPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextPage_stories});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var Heading=__webpack_require__("./src/components/Heading/index.tsx"),Paragraph=__webpack_require__("./src/components/Paragraph/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),TextPage=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Heading.X,{mb:"m",children:"Headline"}),(0,jsx_runtime.jsx)(Heading.X,{element:"h4",mb:"s",children:"Heading 4"}),(0,jsx_runtime.jsx)(Paragraph.n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna massa, blandit sed accumsan at, blandit et ipsum. In lobortis luctus volutpat. Aliquam dolor elit, elementum scelerisque luctus gravida, interdum non mauris. Praesent eu eros leo. Fusce ex ex, ullamcorper ac nunc ut, porta sodales elit. Mauris at consequat felis. Etiam mollis pharetra semper. Fusce viverra in elit sed pretium. Vivamus finibus non lorem ut rutrum. Sed maximus ultrices massa at sagittis. Aliquam sed nunc mauris. Donec eros urna, rutrum nec efficitur a, scelerisque ut mi. Praesent sit amet lorem ac leo dapibus pulvinar. Nunc quis sodales lectus, et commodo nisl."}),(0,jsx_runtime.jsx)(Heading.X,{element:"h4",mt:"l",mb:"s",children:"Heading 4"}),(0,jsx_runtime.jsx)(Paragraph.n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna massa, blandit sed accumsan at, blandit et ipsum. In lobortis luctus volutpat. Aliquam dolor elit, elementum scelerisque luctus gravida, interdum non mauris. Praesent eu eros leo. Fusce ex ex, ullamcorper ac nunc ut, porta sodales elit. Mauris at consequat felis. Etiam mollis pharetra semper. Fusce viverra in elit sed pretium. Vivamus finibus non lorem ut rutrum. Sed maximus ultrices massa at sagittis. Aliquam sed nunc mauris. Donec eros urna, rutrum nec efficitur a, scelerisque ut mi. Praesent sit amet lorem ac leo dapibus pulvinar. Nunc quis sodales lectus, et commodo nisl."})]})};const demo_TextPage=TextPage;try{TextPage.displayName="TextPage",TextPage.__docgenInfo={description:"",displayName:"TextPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/demo/TextPage/index.tsx#TextPage"]={docgenInfo:TextPage.__docgenInfo,name:"TextPage",path:"src/demo/TextPage/index.tsx#TextPage"})}catch(__react_docgen_typescript_loader_error){}var _TextPage$parameters,_TextPage$parameters2;const TextPage_stories={title:"demo / TextPage",component:demo_TextPage};var TextPage_stories_TextPage=function(args){return(0,jsx_runtime.jsx)(demo_TextPage,Object.assign({},args))};TextPage_stories_TextPage.displayName="TextPage",TextPage_stories_TextPage.storyName="TextPage",TextPage_stories_TextPage.parameters=Object.assign({},TextPage_stories_TextPage.parameters,{docs:Object.assign({},null===(_TextPage$parameters=TextPage_stories_TextPage.parameters)||void 0===_TextPage$parameters?void 0:_TextPage$parameters.docs,{source:Object.assign({originalSource:"args => <TextPageComponent {...args} />"},null===(_TextPage$parameters2=TextPage_stories_TextPage.parameters)||void 0===_TextPage$parameters2||null===(_TextPage$parameters2=_TextPage$parameters2.docs)||void 0===_TextPage$parameters2?void 0:_TextPage$parameters2.source)})});var __namedExportsOrder=["TextPage"]},"./src/components/Heading/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Heading});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.string.bold.js");var styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0__react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/tokens/helpers.ts"),Sizing=__webpack_require__("./src/types/Sizing.tsx"),SpacingStyles=__webpack_require__("./src/components/common/Spacing/SpacingStyles.tsx"),TextStyles=__webpack_require__("./src/components/common/Text/TextStyles.tsx"),HeadingElementToSize={h4:"xs",h3:"sm",h2:"md",h1:"lg"},StyledHeading=styled_components_browser_esm.ZP.h1`
	font-size: ${function(_ref){var size=_ref.size,theme=_ref.theme,as=_ref.as;return size?"number"==typeof size?`${size}px`:(0,Sizing.Tu)(size)?theme.tokens.heading.fontSize[size]:size:theme.tokens.heading.fontSize[HeadingElementToSize[as]]}};
	font-weight: ${function(_ref2){var as=_ref2.as,bold=_ref2.bold,theme=_ref2.theme;return!1===bold||void 0===bold&&"h1"===as?theme.tokens.ref.fontWeight.regular:theme.tokens.ref.fontWeight.bold}};
	line-height: ${function(_ref3){var theme=_ref3.theme;return(0,helpers.yh)(theme.tokens.heading.lineHeight)}};
	color: ${(0,helpers.uu)()};

	${TextStyles.u}

	// Padding
	${SpacingStyles.t}

	// Margin
	${SpacingStyles.M}
`,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["element","color","testId","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Heading=function(_ref){var _ref$element=_ref.element,element=void 0===_ref$element?"h1":_ref$element,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,_ref$testId=_ref.testId,testId=void 0===_ref$testId?"Heading":_ref$testId,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(StyledHeading,Object.assign({as:element,$color:color,"data-testid":testId},props,{children}))};Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{element:{defaultValue:{value:"h1"},description:"Size of the heading - h1, h2, h3 or h4",name:"element",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"Color"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},semibold:{defaultValue:null,description:"",name:"semibold",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Text size - xs, sm, md, lg; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.)",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | CSSValue'}},testId:{defaultValue:{value:"Heading"},description:"",name:"testId",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},pl:{defaultValue:null,description:"Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px.",name:"pl",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pr:{defaultValue:null,description:"Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px.",name:"pr",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pt:{defaultValue:null,description:"Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py.",name:"pt",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pb:{defaultValue:null,description:"Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py.",name:"pb",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},px:{defaultValue:null,description:"Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"px",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},py:{defaultValue:null,description:"Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"py",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},p:{defaultValue:null,description:"Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop.",name:"p",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},ml:{defaultValue:null,description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"ml",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mr:{defaultValue:null,description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"mr",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mt:{defaultValue:null,description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mt",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mb:{defaultValue:null,description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mb",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mx:{defaultValue:null,description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"mx",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},my:{defaultValue:null,description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"my",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},m:{defaultValue:null,description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop.",name:"m",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Heading/index.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Heading/index.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Paragraph/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>Paragraph});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0__react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/tokens/helpers.ts"),Sizing=__webpack_require__("./src/types/Sizing.tsx"),TextStyles=__webpack_require__("./src/components/common/Text/TextStyles.tsx"),StyledParagraph=styled_components_browser_esm.ZP.p`
	${TextStyles.L}

	line-height: ${function(_ref){var theme=_ref.theme,$lineHeight=_ref.$lineHeight;return(0,Sizing.Tu)($lineHeight)?(0,helpers.yh)(theme.tokens.ref.lineHeight[$lineHeight]):$lineHeight}};
`,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["testId","lineHeight","size","color"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Paragraph=function(_ref){var _ref$testId=_ref.testId,testId=void 0===_ref$testId?"Paragraph":_ref$testId,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"md":_ref$lineHeight,_ref$size=_ref.size,size=void 0===_ref$size?"sm":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(StyledParagraph,Object.assign({$color:color,$size:size,$lineHeight:lineHeight,"data-testid":testId},props))};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"This component is for text paragraphs only. For generic text, you should use `Text` component instead.",displayName:"Paragraph",props:{lineHeight:{defaultValue:{value:"md"},description:"Line height - xs, sm, md, lg; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.)",name:"lineHeight",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | CSSValue'}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"Color"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},semibold:{defaultValue:null,description:"",name:"semibold",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"sm"},description:"Text size - xs, sm, md, lg; or overriding these basic styles with any CSS value with valid unit (px, rem, % etc.)",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | CSSValue'}},testId:{defaultValue:{value:"Paragraph"},description:"",name:"testId",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},pl:{defaultValue:null,description:"Left padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px.",name:"pl",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pr:{defaultValue:null,description:"Right padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than px.",name:"pr",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pt:{defaultValue:null,description:"Top padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py.",name:"pt",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},pb:{defaultValue:null,description:"Bottom padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than py.",name:"pb",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},px:{defaultValue:null,description:"Horizontal padding (shortcut for pl and pr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"px",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},py:{defaultValue:null,description:"Vertical padding (shortcut for pt and pb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"py",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},p:{defaultValue:null,description:"Padding either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific padding prop.",name:"p",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},ml:{defaultValue:null,description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"ml",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mr:{defaultValue:null,description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"mr",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mt:{defaultValue:null,description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mt",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mb:{defaultValue:null,description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mb",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mx:{defaultValue:null,description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"mx",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},my:{defaultValue:null,description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"my",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},m:{defaultValue:null,description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop.",name:"m",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Paragraph/index.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/Paragraph/index.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Spacing/SpacingStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>marginCss,t:()=>paddingCss});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0__react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),_types_Spacing__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/types/Spacing.tsx"),getSpacing=function(theme,spacingSingleDirection,spacingXY,spacing){return void 0!==spacingSingleDirection?(0,_types_Spacing__WEBPACK_IMPORTED_MODULE_0__.jl)(theme,spacingSingleDirection):void 0!==spacingXY?(0,_types_Spacing__WEBPACK_IMPORTED_MODULE_0__.jl)(theme,spacingXY):void 0!==spacing?(0,_types_Spacing__WEBPACK_IMPORTED_MODULE_0__.jl)(theme,spacing):"0"},paddingCss=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
	${function(_ref){var theme=_ref.theme,pt=_ref.pt,pb=_ref.pb,pl=_ref.pl,pr=_ref.pr,px=_ref.px,py=_ref.py,p=_ref.p,top=getSpacing(theme,pt,py,p),right=getSpacing(theme,pr,px,p),bottom=getSpacing(theme,pb,py,p),left=getSpacing(theme,pl,px,p);return styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
			padding-top: ${top};
			padding-bottom: ${bottom};
			padding-inline-start: ${left};
			padding-inline-end: ${right};
		`}}
`,marginCss=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
	${function(_ref2){var theme=_ref2.theme,mt=_ref2.mt,mb=_ref2.mb,ml=_ref2.ml,mr=_ref2.mr,mx=_ref2.mx,my=_ref2.my,m=_ref2.m,top=getSpacing(theme,mt,my,m),right=getSpacing(theme,mr,mx,m),bottom=getSpacing(theme,mb,my,m),left=getSpacing(theme,ml,mx,m);return styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
			margin-top: ${top};
			margin-bottom: ${bottom};
			margin-inline-start: ${left};
			margin-inline-end: ${right};
		`}}
`},"./src/components/common/Text/TextStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>commonTextStyles,u:()=>textAlignCss});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.string.bold.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0__react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),_tokens_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/helpers.ts"),_types_Sizing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/types/Sizing.tsx"),_Spacing_SpacingStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Spacing/SpacingStyles.tsx"),TextAlignLogicalAttributes={left:"start",center:"center",right:"end",justify:"justify"},textAlignCss=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
	${function(_ref){var textAlign=_ref.textAlign;if(textAlign)return styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
			text-align: ${TextAlignLogicalAttributes[textAlign]};
		`}}
`,commonTextStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
	font-size: ${function(_ref2){var theme=_ref2.theme,$size=_ref2.$size;return(0,_types_Sizing__WEBPACK_IMPORTED_MODULE_2__.Tu)($size)?theme.tokens.textParagraph.fontSize[$size]:"number"==typeof $size?`${$size}px`:$size}};
	font-weight: ${function(_ref3){var bold=_ref3.bold,semibold=_ref3.semibold,theme=_ref3.theme;return bold?theme.tokens.ref.fontWeight.bold:semibold?theme.tokens.ref.fontWeight.semibold:theme.tokens.ref.fontWeight.regular}};
	color: ${(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_3__.uu)()};

	${textAlignCss}

	// Padding
	${_Spacing_SpacingStyles__WEBPACK_IMPORTED_MODULE_4__.t}

	// Margin
	${_Spacing_SpacingStyles__WEBPACK_IMPORTED_MODULE_4__.M}
`},"./src/tokens/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AT:()=>getUnitlessNumber,Ke:()=>getBoxShadow,uu:()=>getTextColor,yh:()=>getLineHeightUnitless});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.number.is-integer.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.map.js");var _types_Color__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/types/Color.tsx"),getTextColor=function(brandDefault){return function(_ref){var $color=_ref.$color,theme=_ref.theme;return $color?(0,_types_Color__WEBPACK_IMPORTED_MODULE_7__.no)($color)?theme.tokens.color.text[$color].primary:(0,_types_Color__WEBPACK_IMPORTED_MODULE_7__.N0)($color)?theme.tokens.color.text[$color]:$color:brandDefault?theme.tokens.color.text.brand.primary:theme.tokens.color.text.primary}},getUnitlessNumber=function(number){return Number.isInteger(number)?parseInt(number,10):parseFloat(number)},getLineHeightUnitless=function(lineHeightPercentage){return getUnitlessNumber(lineHeightPercentage)/100},getBoxShadow=function(shadow){return(Array.isArray(shadow)?shadow:[shadow]).map((function(shadow){return`${"innerShadow"===shadow.type?"inset":""} ${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color}`})).join(", ")}},"./src/types/Color.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N0:()=>isTextColor,UP:()=>ColorTheme,d9:()=>TextColor,no:()=>isColorTheme});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js");var ColorTheme=["brand","success","warning","error","info","neutral"],isColorTheme=function(color){return ColorTheme.includes(color)},TextColor=["primary","secondary","tertiary","quaternary"],isTextColor=function(color){return TextColor.includes(color)};try{isColorTheme.displayName="isColorTheme",isColorTheme.__docgenInfo={description:"",displayName:"isColorTheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/types/Color.tsx#isColorTheme"]={docgenInfo:isColorTheme.__docgenInfo,name:"isColorTheme",path:"src/types/Color.tsx#isColorTheme"})}catch(__react_docgen_typescript_loader_error){}try{isTextColor.displayName="isTextColor",isTextColor.__docgenInfo={description:"",displayName:"isTextColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/types/Color.tsx#isTextColor"]={docgenInfo:isTextColor.__docgenInfo,name:"isTextColor",path:"src/types/Color.tsx#isTextColor"})}catch(__react_docgen_typescript_loader_error){}},"./src/types/Sizing.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Mn:()=>Sizing,ON:()=>SizingMdLg,Tu:()=>isSizing,_f:()=>SizingSmMd,af:()=>SizingSmMdLg});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js");var Sizing=["xs","sm","md","lg"],isSizing=function(size){return Sizing.includes(size)},SizingSmMd=["sm","md"],SizingMdLg=["md","lg"],SizingSmMdLg=["sm","md","lg"];try{isSizing.displayName="isSizing",isSizing.__docgenInfo={description:"",displayName:"isSizing",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/types/Sizing.tsx#isSizing"]={docgenInfo:isSizing.__docgenInfo,name:"isSizing",path:"src/types/Sizing.tsx#isSizing"})}catch(__react_docgen_typescript_loader_error){}},"./src/types/Spacing.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ki:()=>Spacing,jl:()=>getSpacingCssValue});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.test.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.dot-all.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.sticky.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.parse-int.js");var Spacing=["3xs","2xs","xs","sm","md","lg","xl","2xl","3xl"],isSpacing=function(size){return Spacing.includes(size)},DeprecatedSpacing=["xxxs","xxs","xs","s","m","l","xl","xxl","xxxl"],DeprecatedSpacingToSpacing={xxxs:"3xs",xxs:"2xs",xs:"xs",s:"sm",m:"md",l:"lg",xl:"xl",xxl:"2xl",xxxl:"3xl"},getSpacingCssValue=function(theme,value){var size,defaultValue=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return isSpacing(value)?theme.tokens.ref.spacing[value]:(size=value,DeprecatedSpacing.includes(size)?theme.tokens.ref.spacing[DeprecatedSpacingToSpacing[value]]:"number"==typeof value?`${value}px`:value&&new RegExp(/^\d+$/).test(value)?`${parseInt(value,10)}px`:value||defaultValue)};try{isSpacing.displayName="isSpacing",isSpacing.__docgenInfo={description:"",displayName:"isSpacing",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/types/Spacing.tsx#isSpacing"]={docgenInfo:isSpacing.__docgenInfo,name:"isSpacing",path:"src/types/Spacing.tsx#isSpacing"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.string.bold.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/string-html-forced.js")("bold")},{bold:function bold(){return createHTML(this,"b","","")}})}}]);
//# sourceMappingURL=demo-TextPage-TextPage-stories.51768ac4.iframe.bundle.js.map