"use strict";(self.webpackChunk_purple_phoenix_components=self.webpackChunk_purple_phoenix_components||[]).push([[2228],{"./src/components/Toggle/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toggle:()=>Toggle_stories_Toggle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.error.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.regexp.test.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.error.cause.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var Color=__webpack_require__("./src/types/Color.tsx"),CheckboxRadio=(__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./src/components/common/CheckboxRadio/index.tsx")),FormControlWarningError=__webpack_require__("./src/components/common/FormControlWarningError/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/tokens/helpers.ts"),colors=__webpack_require__("./src/utils/colors.tsx"),rtl=__webpack_require__("./src/utils/rtl.tsx"),getSliderOffset=function(theme){return((0,helpers.AT)(theme.tokens.toggle.sizing.container.md.height)-(0,helpers.AT)(theme.tokens.toggle.sizing.slider.md))/2},StyledToggle=styled_components_browser_esm.ZP.div`
	font-size: 0;

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: 2px;
		padding-inline-start: ${function(_ref){var theme=_ref.theme;return`${(0,helpers.AT)(theme.tokens.toggle.sizing.container.md.width)+8}px`}};
		min-height: ${function(_ref2){return _ref2.theme.tokens.toggle.sizing.container.md.height}};
		user-select: none;
		color: ${function(_ref3){var theme=_ref3.theme,warning=_ref3.warning,error=_ref3.error;return(0,colors.w)(theme,"text",warning,error)}};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
		display: block;
	}

	// Container
	label::before {
		height: ${function(_ref4){return _ref4.theme.tokens.toggle.sizing.container.md.height}};
		width: ${function(_ref5){return _ref5.theme.tokens.toggle.sizing.container.md.width}};
		border: 1px solid
			${function(_ref6){var _getWarningErrorColor,theme=_ref6.theme,warning=_ref6.warning,error=_ref6.error;return null!==(_getWarningErrorColor=(0,colors.w)(theme,"border",warning,error))&&void 0!==_getWarningErrorColor?_getWarningErrorColor:theme.tokens.toggle.color.border.container.off}};
		background: ${function(_ref7){return _ref7.theme.tokens.toggle.color.background.container.off}};
		top: 0;
		${(0,rtl.t)(0)}
		transition: ${function(_ref8){var theme=_ref8.theme;return`box-shadow ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}, border ${theme.tokens.duration.transition.base}`}};
		box-shadow: 0 0 0 0
			${function(_ref9){return _ref9.theme.tokens.color.border.focus}};
		box-sizing: border-box;
		border-radius: ${function(_ref10){return _ref10.theme.tokens.ref.borderRadius.pill}};
	}

	label:hover::before {
		background-color: ${function(props){return props.theme.tokens.toggle.color.background.container.offInteraction}};
		border-color: ${function(props){return props.theme.tokens.toggle.color.border.container.offInteraction}};
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${function(_ref11){return _ref11.theme.tokens.color.border.focus}};
	}

	// Slider
	label::after {
		width: ${function(_ref12){return _ref12.theme.tokens.toggle.sizing.slider.md}};
		height: ${function(_ref13){return _ref13.theme.tokens.toggle.sizing.slider.md}};
		top: ${function(_ref14){var theme=_ref14.theme;return getSliderOffset(theme)}}px;
		left: ${function(_ref15){var theme=_ref15.theme;return getSliderOffset(theme)}}px;
		border-radius: ${function(_ref16){return _ref16.theme.tokens.ref.borderRadius.circle}};
		background-color: ${function(_ref17){return _ref17.theme.tokens.toggle.color.background.slider.off}};
		transition: ${function(_ref18){var theme=_ref18.theme;return`left ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}`}};
	}

	// ON state
	input:checked {
		// Container
		+ label::before {
			border-color: ${function(_ref19){var theme=_ref19.theme,colorTheme=_ref19.colorTheme;return theme.tokens.color.background[colorTheme].primary}};
			background-color: ${function(_ref20){var theme=_ref20.theme,colorTheme=_ref20.colorTheme;return theme.tokens.color.background[colorTheme].primary}};
		}
		+ label:hover::before {
			border-color: ${function(_ref21){var theme=_ref21.theme,colorTheme=_ref21.colorTheme;return theme.tokens.color.background[colorTheme].primaryInteraction}};
			background-color: ${function(_ref22){var theme=_ref22.theme,colorTheme=_ref22.colorTheme;return theme.tokens.color.background[colorTheme].primaryInteraction}};
		}

		// Slider
		+ label::after {
			background-color: ${function(_ref23){return _ref23.theme.tokens.ref.color.gray[0]}};
			left: ${function(_ref24){var theme=_ref24.theme;return(0,helpers.AT)(theme.tokens.toggle.sizing.container.md.width)-(0,helpers.AT)(theme.tokens.toggle.sizing.slider.md)-getSliderOffset(theme)}}px;
		}
	}

	// DISABLED (and OFF) state
	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${function(_ref25){return _ref25.theme.tokens.color.text.quaternary}};
		}
		// Container
		+ label::before {
			background-color: ${function(_ref26){return _ref26.theme.tokens.toggle.color.background.container.offDisabled}};
			border-color: ${function(_ref27){return _ref27.theme.tokens.toggle.color.border.container.offDisabled}};
		}
	}

	// DISABLED and ON state
	input:disabled:checked {
		// Container
		+ label::before {
			border-color: ${function(_ref28){var theme=_ref28.theme,colorTheme=_ref28.colorTheme;return theme.tokens.color.background[colorTheme].primaryDisabled}};
			background-color: ${function(_ref29){var theme=_ref29.theme,colorTheme=_ref29.colorTheme;return theme.tokens.color.background[colorTheme].primaryDisabled}};
		}
	}
`,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["colorTheme","className","warning","error","testId"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _Toggle$parameters,_Toggle$parameters2,Toggle=function(_ref){var _ref$colorTheme=_ref.colorTheme,colorTheme=void 0===_ref$colorTheme?"brand":_ref$colorTheme,className=_ref.className,warning=_ref.warning,error=_ref.error,_ref$testId=_ref.testId,testId=void 0===_ref$testId?"Toggle":_ref$testId,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledToggle,{className,colorTheme,"data-testid":testId,warning:!!warning,error:!!error,children:(0,jsx_runtime.jsx)(CheckboxRadio.Z,Object.assign({type:"checkbox"},props))}),(0,jsx_runtime.jsx)(FormControlWarningError.Z,{warning,error})]})};try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{colorTheme:{defaultValue:{value:"brand"},description:"",name:"colorTheme",required:!1,type:{name:"enum",value:[{value:'"brand"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},warning:{defaultValue:null,description:"Show yellow warning text and icon under the input",name:"warning",required:!1,type:{name:"FormControlWarningType"}},error:{defaultValue:null,description:"Show red error text and icon under the input",name:"error",required:!1,type:{name:"FormControlErrorType"}},testId:{defaultValue:{value:"Toggle"},description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const Toggle_stories={component:Toggle,argTypes:{error:{control:"text"},warning:{control:"text"},label:{control:"text"},colorTheme:{options:[void 0].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(Color.UP)),control:"select"}},args:{colorTheme:"brand",label:"Click me",disabled:!1}};var Toggle_stories_Toggle={render:function(args){return(0,jsx_runtime.jsx)(Toggle,Object.assign({},args,{children:args.children}))}};Toggle_stories_Toggle.parameters=Object.assign({},Toggle_stories_Toggle.parameters,{docs:Object.assign({},null===(_Toggle$parameters=Toggle_stories_Toggle.parameters)||void 0===_Toggle$parameters?void 0:_Toggle$parameters.docs,{source:Object.assign({originalSource:"{\n  render: args => <ToggleComponent {...args}>{args.children}</ToggleComponent>\n}"},null===(_Toggle$parameters2=Toggle_stories_Toggle.parameters)||void 0===_Toggle$parameters2||null===(_Toggle$parameters2=_Toggle$parameters2.docs)||void 0===_Toggle$parameters2?void 0:_Toggle$parameters2.source)})});var __namedExportsOrder=["Toggle"]},"./src/components/common/CheckboxRadio/CheckboxRadioStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label,j:()=>CommonStyledCheckboxRadio});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tokens/helpers.ts"),_utils_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/colors.tsx"),_utils_rtl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/rtl.tsx"),CommonStyledCheckboxRadio=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
	font-size: 0;

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	label {
		position: relative;
		display: inline-block;
		padding-top: ${function(_ref){var size=_ref.size,theme=_ref.theme;return((0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.AT)(theme.tokens.checkboxRadio.sizing[size])-16)/2+"px"}};
		padding-inline-start: ${function(_ref2){var theme=_ref2.theme,size=_ref2.size;return`${(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.AT)(theme.tokens.checkboxRadio.sizing[size])+8}px`}};
		min-height: ${function(_ref3){var theme=_ref3.theme,size=_ref3.size;return theme.tokens.checkboxRadio.sizing[size]}};
		user-select: none;
		color: ${function(_ref4){var theme=_ref4.theme,warning=_ref4.warning,error=_ref4.error;return(0,_utils_colors__WEBPACK_IMPORTED_MODULE_2__.w)(theme,"text",warning,error)}};
	}

	label::before,
	label::after {
		position: absolute;
		content: '';
	}

	// Outer box of the fake checkbox/radio
	label::before {
		height: ${function(_ref5){var theme=_ref5.theme,size=_ref5.size;return theme.tokens.checkboxRadio.sizing[size]}};
		width: ${function(_ref6){var theme=_ref6.theme,size=_ref6.size;return theme.tokens.checkboxRadio.sizing[size]}};
		border: 1px solid
			${function(_ref7){var _getWarningErrorColor,theme=_ref7.theme,warning=_ref7.warning,error=_ref7.error;return null!==(_getWarningErrorColor=(0,_utils_colors__WEBPACK_IMPORTED_MODULE_2__.w)(theme,"border",warning,error))&&void 0!==_getWarningErrorColor?_getWarningErrorColor:theme.tokens.color.border.primary}};
		background: ${function(_ref8){return _ref8.theme.tokens.color.background.primary}};
		top: 0;
		${(0,_utils_rtl__WEBPACK_IMPORTED_MODULE_3__.t)(0)}
		transition: ${function(_ref9){var theme=_ref9.theme;return`box-shadow ${theme.tokens.duration.transition.base}, background-color ${theme.tokens.duration.transition.base}, border ${theme.tokens.duration.transition.base}`}};
		box-shadow: 0 0 0 0
			${function(_ref10){return _ref10.theme.tokens.color.border.focus}};
		box-sizing: border-box;
	}

	label::after {
		display: none;
	}

	label:hover::before {
		border: 1px solid
			${function(props){return props.theme.tokens.color.border.primaryInteraction}};
	}

	input:checked {
		+ label::after {
			display: block;
		}
		+ label:hover::before {
			border-color: ${function(_ref11){var theme=_ref11.theme,colorTheme=_ref11.colorTheme;return theme.tokens.color.background[colorTheme].primary}};
		}
	}

	// Adding focus styles on the outer-box of the fake checkbox
	input:focus + label::before {
		outline: none;
		box-shadow: 0 0 0 2px
			${function(_ref12){return _ref12.theme.tokens.color.border.focus}};
	}

	input:disabled {
		+ label {
			cursor: not-allowed;
			color: ${function(_ref13){return _ref13.theme.tokens.color.text.quaternary}};
		}
		+ label::before {
			background-color: ${function(_ref14){return _ref14.theme.tokens.color.background.secondary}};
			border-color: ${function(_ref15){return _ref15.theme.tokens.color.border.secondary}};
		}
		&:checked + label::before {
			border-color: ${function(_ref16){var theme=_ref16.theme,colorTheme=_ref16.colorTheme;return theme.tokens.color.background[colorTheme].primaryDisabled}};
		}
	}
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label`
	font-size: ${function(_ref17){return _ref17.theme.tokens.fontSize.base}};
`},"./src/components/common/CheckboxRadio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>common_CheckboxRadio});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js");__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var CheckboxRadioStyles=__webpack_require__("./src/components/common/CheckboxRadio/CheckboxRadioStyles.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CheckboxRadio=function(_ref){var _props$id,label=_ref.label,props=_objectWithoutProperties(_ref,_excluded),id=null!==(_props$id=props.id)&&void 0!==_props$id?_props$id:((size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+((byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_")),""))();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",Object.assign({},props,{id})),(0,jsx_runtime.jsx)(CheckboxRadioStyles._,{htmlFor:id,children:label})]})};const common_CheckboxRadio=CheckboxRadio;try{CheckboxRadio.displayName="CheckboxRadio",CheckboxRadio.__docgenInfo={description:"",displayName:"CheckboxRadio",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/CheckboxRadio/index.tsx#CheckboxRadio"]={docgenInfo:CheckboxRadio.__docgenInfo,name:"CheckboxRadio",path:"src/components/common/CheckboxRadio/index.tsx#CheckboxRadio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/FormControlWarningError/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>common_FormControlWarningError});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),rtl=__webpack_require__("./src/utils/rtl.tsx"),Icon=__webpack_require__("./src/components/Icon/index.tsx"),WarningErrorText=styled_components_browser_esm.ZP.div`
	position: relative;
	padding-inline-start: 28px;
	padding-inline-end: 0;
	padding-top: 7px;
	padding-bottom: 1px;
	color: ${function(_ref){var theme=_ref.theme,colorTheme=_ref.colorTheme;return theme.tokens.color.text[colorTheme].primary}};
	font-size: 12px;
	line-height: 1.2;
`,StyledIcon=(0,styled_components_browser_esm.ZP)(Icon.J)`
	position: absolute;
	top: 6px;
	${(0,rtl.t)("5px")}
`,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),FormControlWarningError=function(_ref){var warning=_ref.warning,error=_ref.error;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!warning&&(0,jsx_runtime.jsxs)(WarningErrorText,{colorTheme:"warning",children:[(0,jsx_runtime.jsx)(StyledIcon,{icon:"exclamation-warning",size:"s"}),warning]}),!["boolean","undefined"].includes(typeof error)&&""!==error&&(0,jsx_runtime.jsxs)(WarningErrorText,{colorTheme:"error",children:[(0,jsx_runtime.jsx)(StyledIcon,{icon:"exclamation-error",size:"s"}),error]})]})};const common_FormControlWarningError=FormControlWarningError;try{FormControlWarningError.displayName="FormControlWarningError",FormControlWarningError.__docgenInfo={description:"",displayName:"FormControlWarningError",props:{warning:{defaultValue:null,description:"Show yellow warning text and icon under the input",name:"warning",required:!1,type:{name:"FormControlWarningType"}},error:{defaultValue:null,description:"Show red error text and icon under the input",name:"error",required:!1,type:{name:"FormControlErrorType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/FormControlWarningError/index.tsx#FormControlWarningError"]={docgenInfo:FormControlWarningError.__docgenInfo,name:"FormControlWarningError",path:"src/components/common/FormControlWarningError/index.tsx#FormControlWarningError"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/colors.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>getColorBasedOnColorThemeAndLightness,w:()=>getWarningErrorColor});var getColorBasedOnColorThemeAndLightness=function(theme,colorTheme,secondary){return colorTheme?theme.tokens.color.background[colorTheme][secondary?"secondary":"primary"]:secondary?theme.tokens.color.text.inverse:theme.tokens.color.text.primary},getWarningErrorColor=function(theme,type,warning,error){return error?theme.tokens.color[type].error.primary:warning?theme.tokens.color[type].warning.primary:void 0}},"./src/utils/rtl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>right,t:()=>left});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),leftOrRight=function(mainDirection,offset){return styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
	${function(_ref){var theme=_ref.theme,rtlDirection="left"===mainDirection?"right":"left";return theme.dir&&["ltr","rtl"].includes(theme.dir)?"rtl"===theme.dir?styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
					${rtlDirection}: ${offset};
				`:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
				${mainDirection}: ${offset};
			`:styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
			${mainDirection}: ${offset};
			[dir='rtl'] & {
				${mainDirection}: initial;
				${rtlDirection}: ${offset};
			}
		`}}
`},left=function(offset){return leftOrRight("left",offset)},right=function(offset){return leftOrRight("right",offset)};try{left.displayName="left",left.__docgenInfo={description:"",displayName:"left",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/rtl.tsx#left"]={docgenInfo:left.__docgenInfo,name:"left",path:"src/utils/rtl.tsx#left"})}catch(__react_docgen_typescript_loader_error){}try{right.displayName="right",right.__docgenInfo={description:"",displayName:"right",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/rtl.tsx#right"]={docgenInfo:right.__docgenInfo,name:"right",path:"src/utils/rtl.tsx#right"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.concat.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/export.js"),fails=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/fails.js"),isArray=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/is-array.js"),isObject=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/is-object.js"),toObject=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/to-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/length-of-array-like.js"),doesNotExceedSafeInteger=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/does-not-exceed-safe-integer.js"),createProperty=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/create-property.js"),arraySpeciesCreate=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/array-species-create.js"),arrayMethodHasSpeciesSupport=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/array-method-has-species-support.js"),wellKnownSymbol=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/well-known-symbol.js"),V8_VERSION=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/engine-v8-version.js"),IS_CONCAT_SPREADABLE=wellKnownSymbol("isConcatSpreadable"),IS_CONCAT_SPREADABLE_SUPPORT=V8_VERSION>=51||!fails((function(){var array=[];return array[IS_CONCAT_SPREADABLE]=!1,array.concat()[0]!==array})),SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("concat"),isConcatSpreadable=function(O){if(!isObject(O))return!1;var spreadable=O[IS_CONCAT_SPREADABLE];return void 0!==spreadable?!!spreadable:isArray(O)};$({target:"Array",proto:!0,arity:1,forced:!IS_CONCAT_SPREADABLE_SUPPORT||!SPECIES_SUPPORT},{concat:function concat(arg){var i,k,length,len,E,O=toObject(this),A=arraySpeciesCreate(O,0),n=0;for(i=-1,length=arguments.length;i<length;i++)if(isConcatSpreadable(E=-1===i?O:arguments[i]))for(len=lengthOfArrayLike(E),doesNotExceedSafeInteger(n+len),k=0;k<len;k++,n++)k in E&&createProperty(A,n,E[k]);else doesNotExceedSafeInteger(n+1),createProperty(A,n++,E);return A.length=n,A}})}}]);
//# sourceMappingURL=components-Toggle-Toggle-stories.dc1ffd5b.iframe.bundle.js.map