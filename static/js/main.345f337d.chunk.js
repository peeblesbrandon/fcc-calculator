(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_Display_Display__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),nums=[7,8,9,4,5,6,1,2,3,0],ops=["/","*","-","+"],ids={7:"seven",8:"eight",9:"nine",4:"four",5:"five",6:"six",1:"one",2:"two",3:"three",0:"zero","/":"divide","*":"multiply","-":"subtract","+":"add"},App=function(_React$Component){Object(_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var _;return Object(_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this,e)).state={lastPressed:void 0,calc:"0",operation:void 0},_.handleButton=_.handleButton.bind(Object(_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(_Users_peeblesbrandon_Documents_GitHub_freeCodeCamp_fcc_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleButton",value:function handleButton(e){var _this$state=this.state,calc=_this$state.calc,lastPressed=_this$state.lastPressed,innerText=e.target.innerText;switch(innerText){case"AC":this.setState({calc:"0"});break;case"=":var evaluated=eval(calc);this.setState({calc:evaluated});break;case".":var splitted=calc.split(/[\+\-\*\/]/),last=splitted.slice(-1)[0];last.includes(".")||this.setState({calc:calc+"."});break;default:var _e=void 0;if(ops.includes(innerText))if(ops.includes(lastPressed)&&"-"!==innerText){var lastNumberIdx=calc.split("").reverse().findIndex((function(e){return" "!==e&&nums.includes(+e)}));_e=calc.slice(0,calc.length-lastNumberIdx)+" ".concat(innerText," ")}else _e="".concat(calc," ").concat(innerText," ");else _e="0"===calc?innerText:calc+innerText;this.setState({calc:_e})}this.setState({lastPressed:innerText})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"calculator",className:"d-flex flex-column justify-content-center align-items-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display_Display__WEBPACK_IMPORTED_MODULE_7__.a,{displayMsg:this.state.calc}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{handleButton:this.handleButton}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(1),r=t(2),n=t(4),l=t(3),c=t(0),s=t.n(c),o=(t(18),function(e){Object(n.a)(t,e);var _=Object(l.a)(t);function t(e){return Object(a.a)(this,t),_.call(this,e)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",{id:"display",colSpan:"4"},String(this.props.displayMsg).replace(/[\n\r]+/g,"")))))}}]),t}(s.a.Component));_.a=o},function(e,_,t){"use strict";var a=t(1),r=t(2),n=t(4),l=t(3),c=t(0),s=t.n(c),o=(t(19),function(e){Object(n.a)(t,e);var _=Object(l.a)(t);function t(e){return Object(a.a)(this,t),_.call(this,e)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("table",null,s.a.createElement("tbody",{onClick:this.props.handleButton},s.a.createElement("tr",null,s.a.createElement("td",{id:"clear",colSpan:"2",className:"clearBtns"},"AC"),s.a.createElement("td",null),s.a.createElement("td",{id:"divide",className:"operator"},"/")),s.a.createElement("tr",null,s.a.createElement("td",{id:"seven",className:"number"},"7"),s.a.createElement("td",{id:"eight",className:"number"},"8"),s.a.createElement("td",{id:"nine",className:"number"},"9"),s.a.createElement("td",{id:"multiply",className:"operator"},"*")),s.a.createElement("tr",null,s.a.createElement("td",{id:"four",className:"number"},"4"),s.a.createElement("td",{id:"five",className:"number"},"5"),s.a.createElement("td",{id:"six",className:"number"},"6"),s.a.createElement("td",{id:"subtract",className:"operator"},"-")),s.a.createElement("tr",null,s.a.createElement("td",{id:"one",className:"number"},"1"),s.a.createElement("td",{id:"two",className:"number"},"2"),s.a.createElement("td",{id:"three",className:"number"},"3"),s.a.createElement("td",{id:"add",className:"operator"},"+")),s.a.createElement("tr",null,s.a.createElement("td",{id:"zero",colSpan:"2",className:"number"},"0"),s.a.createElement("td",{id:"decimal",className:"number"},"."),s.a.createElement("td",{id:"equals",className:"operator"},"="))))}}]),t}(s.a.Component));_.a=o},function(e,_,t){e.exports=t(20)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(7),l=t.n(n),c=(t(16),t(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.345f337d.chunk.js.map