"use strict";(self.webpackChunk_purple_phoenix_components=self.webpackChunk_purple_phoenix_components||[]).push([[1325],{"./src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip_stories_Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var Icon=__webpack_require__("./src/components/Icon/index.tsx"),tippy_react_esm=(__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.css"),__webpack_require__("./node_modules/.pnpm/@tippyjs+react@4.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tippyjs/react/dist/tippy-react.esm.js")),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react@18.2.0__react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/tokens/helpers.ts"),StyledTippy=(0,styled_components_browser_esm.ZP)(tippy_react_esm.ZP)`
	font-size: 12px;
	background: ${function(_ref){return _ref.theme.tokens.tooltip.color.background}};
	box-shadow: ${function(_ref2){var theme=_ref2.theme;return(0,helpers.Ke)(theme.tokens.tooltip.boxShadow)}};

	.tippy-content {
		padding: 8px 12px;
	}

	.tippy-arrow {
		color: ${function(_ref3){return _ref3.theme.tokens.tooltip.color.background}};
	}
`,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["testId","onCreate"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _Tooltip$parameters,_Tooltip$parameters2,Tooltip=function(_ref){var _ref$testId=_ref.testId,testId=void 0===_ref$testId?"Tooltip":_ref$testId,onCreate=_ref.onCreate,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(StyledTippy,Object.assign({onCreate:function(instance){instance.popper.dataset.testid=testId,onCreate&&onCreate(instance)},maxWidth:300},props))};Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"Props that can be used are described here https://github.com/atomiks/tippyjs-react#-props.",displayName:"Tooltip",props:{testId:{defaultValue:{value:"Tooltip"},description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/index.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}const Tooltip_stories={component:Tooltip,parameters:{componentSubtitle:"Simple wrapper over @tippyjs/react"},args:{content:(0,jsx_runtime.jsx)("span",{children:"Lorem ipsum dolor sit amet. Dogs are good. Another demo text. Hope this is okay."})}};var Tooltip_stories_Tooltip={render:function(args){return(0,jsx_runtime.jsx)(Tooltip,Object.assign({},args,{children:(0,jsx_runtime.jsx)(Icon.J,{icon:"question-circle"})}))}};Tooltip_stories_Tooltip.parameters=Object.assign({},Tooltip_stories_Tooltip.parameters,{docs:Object.assign({},null===(_Tooltip$parameters=Tooltip_stories_Tooltip.parameters)||void 0===_Tooltip$parameters?void 0:_Tooltip$parameters.docs,{source:Object.assign({originalSource:'{\n  render: args => {\n    return <TooltipComponent {...args}>\n                <Icon icon="question-circle" />\n            </TooltipComponent>;\n  }\n}'},null===(_Tooltip$parameters2=Tooltip_stories_Tooltip.parameters)||void 0===_Tooltip$parameters2||null===(_Tooltip$parameters2=_Tooltip$parameters2.docs)||void 0===_Tooltip$parameters2?void 0:_Tooltip$parameters2.source)})});var __namedExportsOrder=["Tooltip"]}}]);
//# sourceMappingURL=components-Tooltip-Tooltip-stories.d2619e92.iframe.bundle.js.map