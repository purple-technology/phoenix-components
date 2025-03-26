"use strict";(self.webpackChunk_purple_phoenix_components=self.webpackChunk_purple_phoenix_components||[]).push([[1747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_WithIcon$parameters,_WithIcon$parameters2,_common_Button_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/Button/stories.tsx"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_3__.z,argTypes:Object.assign({},_common_Button_stories__WEBPACK_IMPORTED_MODULE_4__.P,{disabled:{control:"boolean"}})};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.z,Object.assign({},args))};Template.displayName="Template",Template.args={children:"Click me"},Template.parameters={design:{type:"figma",url:"https://www.figma.com/file/DGocyaQPfb1oOy9eeGPUKQ/Phoenix-Design-System?node-id=895%3A11"}};var Default={args:Object.assign({},Template.args),parameters:Object.assign({},Template.parameters)},WithIcon={args:Object.assign({},Template.args,{icon:"edit"}),parameters:Object.assign({},Template.parameters)};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    ...Template.args\n  },\n  parameters: {\n    ...Template.parameters\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithIcon.parameters=Object.assign({},WithIcon.parameters,{docs:Object.assign({},null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    ...Template.args,\n    icon: 'edit'\n  },\n  parameters: {\n    ...Template.parameters\n  }\n}"},null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters2=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters2?void 0:_WithIcon$parameters2.source)})});var __namedExportsOrder=["Default","WithIcon"]},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_common_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/Button/index.tsx"),_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/Button/ButtonStyles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["colorTheme","size","iconAlignment","type","testId","secondary","light","icon","loading","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)((function Button(_ref,ref){var _ref$colorTheme=_ref.colorTheme,colorTheme=void 0===_ref$colorTheme?"brand":_ref$colorTheme,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,_ref$iconAlignment=_ref.iconAlignment,iconAlignment=void 0===_ref$iconAlignment?"left":_ref$iconAlignment,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$testId=_ref.testId,testId=void 0===_ref$testId?"Button":_ref$testId,secondary=_ref.secondary,light=_ref.light,icon=_ref.icon,loading=_ref.loading,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),secondaryStyle=null!=secondary?secondary:light,wrapperProps=Object.assign({},props,{type,size,colorTheme,secondary:secondaryStyle,icon});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_6__.W4,Object.assign({ref,"data-testid":testId},wrapperProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Button__WEBPACK_IMPORTED_MODULE_7__.Z,{loading,size,colorTheme,secondary:secondaryStyle,icon,iconAlignment,children})}))}));try{Button.displayName="Button",Button.__docgenInfo={description:"`Button` component supports all props from `ButtonHTMLAttributes<HTMLButtonElement>` interface.",displayName:"Button",props:{light:{defaultValue:null,description:'@deprecated Secondary style button. Please use current prop "secondary" instead. This prop will be removed in next major version.',name:"light",required:!1,type:{name:"boolean"}},colorTheme:{defaultValue:{value:"brand"},description:"Theme of the button - background color",name:"colorTheme",required:!1,type:{name:"enum",value:[{value:'"brand"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"md"},description:"Size of the button; affects padding, line-height, and font-size",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},minimal:{defaultValue:null,description:"Minimal styling of the button - no background, border etc.",name:"minimal",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Secondary style button",name:"secondary",required:!1,type:{name:"boolean"}},outline:{defaultValue:null,description:"Outline style button",name:"outline",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},iconAlignment:{defaultValue:{value:"left"},description:"",name:"iconAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},ml:{defaultValue:null,description:"Left margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"ml",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mr:{defaultValue:null,description:"Right margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than mx.",name:"mr",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mt:{defaultValue:null,description:"Top margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mt",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mb:{defaultValue:null,description:"Bottom margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). More specific than my.",name:"mb",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},mx:{defaultValue:null,description:"Horizontal margin (shortcut for ml and mr) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"mx",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},my:{defaultValue:null,description:"Vertical margin (shortcut for mt and mb) either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px).",name:"my",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},m:{defaultValue:null,description:"Margin either in Spacing sizes, any CSS value in valid units (px, rem, % etc.) or plain number (interpreted as px). Least specific margin prop.",name:"m",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | "3xs" | "2xs" | "xl" | "2xl" | "3xl" | CSSValue'}},testId:{defaultValue:{value:"Button"},description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);