"use strict";(self.webpackChunk_purple_phoenix_components=self.webpackChunk_purple_phoenix_components||[]).push([[2313],{"./src/components/ClosableButton/ClosableButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClosableButton:()=>ClosableButton_stories_ClosableButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ClosableButton_stories});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),times=(__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./src/images/times.svg")),ClosableButtonStyles=__webpack_require__("./src/components/ClosableButton/ClosableButtonStyles.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_excluded=["testId","className","onClose"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ClosableButton$param,_ClosableButton$param2,ClosableButton=(0,react.forwardRef)((function ClosableButton(_ref,ref){var _ref$testId=_ref.testId,testId=void 0===_ref$testId?"ClosableButton":_ref$testId,className=_ref.className,onClose=_ref.onClose,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)(ClosableButtonStyles.im,{className,"data-testid":testId,children:[(0,jsx_runtime.jsx)(ClosableButtonStyles.zx,Object.assign({},props,{ref,type:"button"})),(0,jsx_runtime.jsx)(ClosableButtonStyles.x8,{type:"button",onClick:onClose,children:(0,jsx_runtime.jsx)("img",{src:times,alt:""})})]})}));try{ClosableButton.displayName="ClosableButton",ClosableButton.__docgenInfo={description:"",displayName:"ClosableButton",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},testId:{defaultValue:{value:"ClosableButton"},description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ClosableButton/index.tsx#ClosableButton"]={docgenInfo:ClosableButton.__docgenInfo,name:"ClosableButton",path:"src/components/ClosableButton/index.tsx#ClosableButton"})}catch(__react_docgen_typescript_loader_error){}const ClosableButton_stories={component:ClosableButton};var ClosableButton_stories_ClosableButton={render:function(args){return(0,jsx_runtime.jsx)(ClosableButton,Object.assign({},args))},args:{children:"Status is In progress"}};ClosableButton_stories_ClosableButton.parameters=Object.assign({},ClosableButton_stories_ClosableButton.parameters,{docs:Object.assign({},null===(_ClosableButton$param=ClosableButton_stories_ClosableButton.parameters)||void 0===_ClosableButton$param?void 0:_ClosableButton$param.docs,{source:Object.assign({originalSource:"{\n  render: args => <ClosableButtonComponent {...args} />,\n  args: {\n    children: 'Status is In progress'\n  }\n}"},null===(_ClosableButton$param2=ClosableButton_stories_ClosableButton.parameters)||void 0===_ClosableButton$param2||null===(_ClosableButton$param2=_ClosableButton$param2.docs)||void 0===_ClosableButton$param2?void 0:_ClosableButton$param2.source)})});var __namedExportsOrder=["ClosableButton"]},"./src/components/ClosableButton/ClosableButtonStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{im:()=>Wrapper,x8:()=>Close,zx:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_rtl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/rtl.tsx"),_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button/ButtonStyles.tsx"),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
	position: relative;
	display: inline-flex;
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.m2)(props.theme)}}
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.Ep)("sm",props.theme)}}
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.v$)(props.theme,"neutral",!1,!0)}}
	
	padding-inline-end: 36px;
	font-weight: ${function(_ref){return _ref.theme.tokens.ref.fontWeight.regular}};
`,Close=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button`
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.m2)(props.theme)}}
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.Ep)("sm",props.theme)}}
	${function(props){return(0,_common_Button_ButtonStyles__WEBPACK_IMPORTED_MODULE_1__.v$)(props.theme,"neutral",!0)}}
	
	&:hover {
		background: ${function(_ref2){return _ref2.theme.tokens.color.background.error.secondaryInteraction}};
	}

	position: absolute;
	top: 0;
	${(0,_utils_rtl__WEBPACK_IMPORTED_MODULE_2__.F)(0)}
	padding: 0 12px;
	width: 36px;
	background: transparent;
`},"./src/components/common/Button/ButtonStyles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>ButtonContent,Ep:()=>getSizeRelatedStyles,W4:()=>ButtonWrapper,l_:()=>ButtonLoader,m2:()=>getBaseStyles,oD:()=>ButtonText,u5:()=>StyledCustomIcon,v$:()=>getColorThemeStyles,xL:()=>StyledIcon,zI:()=>LinkButtonWrapper});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.parse-int.js");var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-inlinesvg@3.0.1_react@18.2.0/node_modules/react-inlinesvg/esm/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tokens/helpers.ts"),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/index.tsx"),_Spacing_SpacingStyles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/Spacing/SpacingStyles.tsx"),getSizeRelatedStyles=function(size,theme,outline,icon){var buttonHeight=parseInt(theme.tokens.inputButton.sizing.height[size],10),textHeight=Math.max((0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.AT)(theme.tokens.button.fontSize[size])*(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.yh)(theme.tokens.ref.lineHeight.sm),icon?(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.AT)(theme.tokens.button.sizing.icon[size]):0),borderHeight=outline?(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.AT)(theme.tokens.button.borderWidth):0;return`\n\t\tmin-height: ${theme.tokens.inputButton.sizing.height[size]};\n\t\tfont-size: ${theme.tokens.button.fontSize[size]};\n\t\tpadding: ${(buttonHeight-textHeight)/2-borderHeight}px ${theme.tokens.button.spacing.x[size]};\n\t\tborder-radius: ${theme.tokens.inputButton.borderRadius[size]};\n\t`},getColorThemeStyles=function(theme,color,minimal,secondary,outline){var tokens=theme.tokens;return minimal?`\n\t\t\tbackground: transparent;\n\t\t\tcolor: ${tokens.color.text[color].primary};\n\t\t\t&:hover {\n\t\t\t\tbackground: ${tokens.color.background[color].secondary};\n\t\t\t}\n\t\t\tpath {\n\t\t\t\ttransition: fill ${tokens.duration.transition.base};\n\t\t\t\tfill: ${tokens.color.text[color].primary};\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: 0 0 0 ${tokens.borderWidth.focus} ${tokens.color.border.focus};\n\t\t\t}\n\t\t\t&[disabled] {\n\t\t\t\tcolor: ${tokens.color.text[color].disabled};\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\t\t\t&[disabled] path {\n\t\t\t\tfill: ${tokens.color.text[color].disabled};\n\t\t\t}\n\t\t`:outline?`\n\t\t\tbackground: transparent;\n\t\t\tcolor: ${tokens.color.text[color].primary};\n\t\t\tborder: ${tokens.button.borderWidth} solid ${tokens.color.border[color].primary};\n\t\t\t&:hover {\n\t\t\t\tbackground: ${tokens.color.background[color].primary};\n\t\t\t\tcolor: #fff;\n\t\t\t\tpath {\n\t\t\t\t\tfill: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t\tpath {\n\t\t\t\ttransition: fill ${tokens.duration.transition.base};\n\t\t\t\tfill: ${tokens.color.text[color].primary};\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: 0 0 0 ${tokens.borderWidth.focus} ${tokens.color.border.focus};\n\t\t\t}\n\t\t\t&[disabled] {\n\t\t\t\tcolor: ${tokens.color.text[color].disabled};\n\t\t\t\tborder: 1px solid ${tokens.color.background[color].primaryDisabled};\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\t\t\t&[disabled] path {\n\t\t\t\tfill: ${tokens.color.text[color].disabled};\n\t\t\t}\n\t\t`:secondary?`\n\t\t\tbackground: ${tokens.color.background[color].secondary};\n\t\t\tcolor: ${tokens.color.text[color].onSecondary};\n\t\t\t&:hover {\n\t\t\t\tbackground: ${tokens.color.background[color].secondaryInteraction};\n\t\t\t}\n\t\t\tpath {\n\t\t\t\ttransition: fill ${tokens.duration.transition.base};\n\t\t\t\tfill: ${tokens.color.text[color].onSecondary};\n\t\t\t}\n\t\t\t&:focus {\n\t\t\t\tbox-shadow: 0 0 0 ${tokens.borderWidth.focus} ${tokens.color.border.focus};\n\t\t\t}\n\t\t\t&[disabled] {\n\t\t\t\tcolor: ${tokens.color.text[color].disabled};\n\t\t\t\tbackground: ${tokens.color.background[color].secondaryDisabled};\n\t\t\t}\n\t\t\t&[disabled] path {\n\t\t\t\tfill: ${tokens.color.text[color].disabled};\n\t\t\t}\n\t\t`:`\n\t\t\t\tbackground: ${tokens.color.background[color].primary};\n\t\t\t\tbox-shadow: ${(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.Ke)(tokens.button.boxShadow.primary)};\n\t\t\t\tcolor: ${tokens.color.text[color].onPrimary};\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: ${tokens.color.background[color].primaryInteraction};\n\t\t\t\t\tcolor: ${tokens.color.text[color].onPrimary};\n\t\t\t\t}\n\t\t\t\tpath {\n\t\t\t\t\ttransition: fill ${tokens.duration.transition.base};\n\t\t\t\t\tfill: ${tokens.color.text[color].onPrimary};\n\t\t\t\t}\n\t\t\t\t&:focus {\n\t\t\t\t\tbox-shadow: 0 0 0 ${tokens.borderWidth.focus} ${tokens.color.border.focus};\n\t\t\t\t}\n\t\t\t\t&[disabled] {\n\t\t\t\t\tcolor: ${tokens.color.background.primary};\n\t\t\t\t\tbackground: ${tokens.color.background[color].primaryDisabled};\n\t\t\t\t}\n\t\t\t`},getBaseStyles=function(theme){return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
	// When display: flex is used, LinkButton is stretched 100% and close button is wrapped on the next line in a Notice component
	display: inline-flex;
	font-family: ${theme.tokens.ref.fontFamily.base};
	outline: none;
	cursor: pointer;
	font-style: normal;
	font-weight: ${theme.tokens.button.fontWeight};
	line-height: ${(0,_tokens_helpers__WEBPACK_IMPORTED_MODULE_1__.yh)(theme.tokens.ref.lineHeight.sm)};
	border: 0;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	position: relative;
	text-decoration: none;

	&[disabled] {
		cursor: default;
	}
`},ButtonContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
	display: flex;
	align-items: center;
	${function(_ref){return _ref.$loading?"\n\t\tvisibility: hidden;\n\t":""}}
`,commonButtonStyles=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
	${function(props){return getBaseStyles(props.theme)}}
	${function(props){return getSizeRelatedStyles(props.size,props.theme,props.outline,!!props.icon)}}
	${function(props){return getColorThemeStyles(props.theme,props.colorTheme,props.minimal,props.secondary,props.outline)}}

	/** These styles are specific for stand-alone component Button */
	text-align: ${function(_ref2){return _ref2.icon?"start":"center"}};

	${_Spacing_SpacingStyles__WEBPACK_IMPORTED_MODULE_3__.M}
`,ButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
	${commonButtonStyles}
`,LinkButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.a`
	${commonButtonStyles}
`,ButtonText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
	flex: 1;
	display: flex;
	${function(_ref3){var children=_ref3.children,icon=_ref3.icon,iconAlignment=_ref3.iconAlignment;return children&&icon?"left"===iconAlignment?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
						margin-inline-start: 0.6em;
				  `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
						margin-inline-end: 0.6em;
				  `:void 0}}
`,styledIconCss=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
	${function(_ref4){var theme=_ref4.theme,$size=_ref4.$size;return`\n\t\twidth: ${theme.tokens.button.sizing.icon[$size]};\n\t\theight: ${theme.tokens.button.sizing.icon[$size]};\n\t`}}
`,StyledCustomIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__.Z)`
	${styledIconCss}
`,StyledIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Icon__WEBPACK_IMPORTED_MODULE_5__.J)`
	${styledIconCss}
`,ButtonLoader=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;try{getBaseStyles.displayName="getBaseStyles",getBaseStyles.__docgenInfo={description:"",displayName:"getBaseStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/ButtonStyles.tsx#getBaseStyles"]={docgenInfo:getBaseStyles.__docgenInfo,name:"getBaseStyles",path:"src/components/common/Button/ButtonStyles.tsx#getBaseStyles"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/rtl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>right,t:()=>left});__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.includes.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_@babel+core@7.23.6_react-dom@18.2.0_react-is@18.2.0_react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),leftOrRight=function(mainDirection,offset){return styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
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
`},left=function(offset){return leftOrRight("left",offset)},right=function(offset){return leftOrRight("right",offset)};try{left.displayName="left",left.__docgenInfo={description:"",displayName:"left",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/rtl.tsx#left"]={docgenInfo:left.__docgenInfo,name:"left",path:"src/utils/rtl.tsx#left"})}catch(__react_docgen_typescript_loader_error){}try{right.displayName="right",right.__docgenInfo={description:"",displayName:"right",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/rtl.tsx#right"]={docgenInfo:right.__docgenInfo,name:"right",path:"src/utils/rtl.tsx#right"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/export.js"),isArray=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/is-array.js"),isConstructor=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/is-constructor.js"),isObject=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/is-object.js"),toAbsoluteIndex=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/to-absolute-index.js"),lengthOfArrayLike=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/length-of-array-like.js"),toIndexedObject=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/to-indexed-object.js"),createProperty=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/create-property.js"),wellKnownSymbol=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/well-known-symbol.js"),arrayMethodHasSpeciesSupport=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/array-method-has-species-support.js"),nativeSlice=__webpack_require__("./node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/internals/array-slice.js"),HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("slice"),SPECIES=wellKnownSymbol("species"),$Array=Array,max=Math.max;$({target:"Array",proto:!0,forced:!HAS_SPECIES_SUPPORT},{slice:function slice(start,end){var Constructor,result,n,O=toIndexedObject(this),length=lengthOfArrayLike(O),k=toAbsoluteIndex(start,length),fin=toAbsoluteIndex(void 0===end?length:end,length);if(isArray(O)&&(Constructor=O.constructor,(isConstructor(Constructor)&&(Constructor===$Array||isArray(Constructor.prototype))||isObject(Constructor)&&null===(Constructor=Constructor[SPECIES]))&&(Constructor=void 0),Constructor===$Array||void 0===Constructor))return nativeSlice(O,k,fin);for(result=new(void 0===Constructor?$Array:Constructor)(max(fin-k,0)),n=0;k<fin;k++,n++)k in O&&createProperty(result,n,O[k]);return result.length=n,result}})},"./src/images/times.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/times.7568b3cd.svg"}}]);
//# sourceMappingURL=components-ClosableButton-ClosableButton-stories.3bced00e.iframe.bundle.js.map