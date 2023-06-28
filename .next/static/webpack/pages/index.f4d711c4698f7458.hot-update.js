"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menus = [\n    {\n        icon: \"fa fa-home\",\n        dkMenuName: \"Home\",\n        name: \"Home\",\n        id: \"home\"\n    },\n    {\n        icon: \"fa fa-user\",\n        dkMenuName: \"About\",\n        name: \"About me\",\n        id: \"about\"\n    },\n    {\n        icon: \"fa fa-briefcase\",\n        dkMenuName: \"Portfolio\",\n        name: \"my Portfolio\",\n        id: \"work\"\n    },\n    {\n        icon: \"fa fa-envelope-open\",\n        dkMenuName: \"Contact\",\n        name: \"get in touch\",\n        id: \"contact\"\n    },\n    {\n        icon: \"fa fa-comments\",\n        dkMenuName: \"Blog\",\n        name: \"my Blog\",\n        id: \"blog\"\n    }, \n];\nvar Header = function(param) {\n    var light = param.light;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), changeNav = ref1.changeNav, nav = ref1.nav, changeMobileMenu = ref1.changeMobileMenu, mobileMenu = ref1.mobileMenu;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var path = window.location.hash, newpath = path.split(\"#\").pop();\n        return function() {\n            changeNav(newpath ? newpath : \"home\");\n        };\n    }, []);\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().width;\n    // outside click\n    var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        setToggle(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navigation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"logoBest\",\n                            src: \"img/LogoTheBestWhiteText.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            id: \"nav\",\n                            className: \"navigation\",\n                            children: menus.map(function(menu, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: nav === menu.id ? \"active\" : \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: function() {\n                                                changeNav(menu.id);\n                                                changeMobileMenu(width < 1025 ? true : false);\n                                            },\n                                            id: \"link-\".concat(menu.id),\n                                            href: \"#\".concat(menu.id),\n                                            className: nav === menu.id ? \"active\" : \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"\".concat(menu.icon)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: menu.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: domNode,\n                className: \"cd-stretchy-nav \".concat(toggle ? \"nav-is-visible\" : \"\", \" \").concat(light ? nav == \"home\" && \"lighter\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cd-nav-trigger\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        },\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"stretchy-nav\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav == menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\".concat(menu.id),\n                                    onClick: function() {\n                                        changeNav(menu.id);\n                                        setToggle(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: menu.dkMenuName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"stretchy-nav-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"tS3kpq+4AqT8QovWGzJlseXhtgg=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsSUFBSSxFQUFDLEdBQUc7a0NBRVIsNEVBQUNDLE1BQUk7NEJBQUNFLGFBQVcsRUFBQyxNQUFNOzs7OztpQ0FBRzs7Ozs7NkJBQ3pCO2tDQUVKLDhEQUFDVixJQUFFO3dCQUFDSixTQUFTLEVBQUMsY0FBYztrQ0FFekJ4QixLQUFLLENBQUM2QixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDO2lEQUNqQiw4REFBQ0MsSUFBRTtnQ0FBQ1IsU0FBUyxFQUFFZCxHQUFHLElBQUlvQixJQUFJLENBQUMxQixFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUU7MENBQzNDLDRFQUFDNkIsR0FBQztvQ0FDQUUsSUFBSSxFQUFFLEdBQUUsQ0FBVSxPQUFSTCxJQUFJLENBQUMxQixFQUFFLENBQUU7b0NBQ25COEIsT0FBTyxFQUFFLFdBQU07d0NBQ2J6QixTQUFTLENBQUNxQixJQUFJLENBQUMxQixFQUFFLENBQUMsQ0FBQzt3Q0FDbkJJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQ0FDbEI7OENBRUQsNEVBQUM0QixNQUFJO2tEQUFFTixJQUFJLENBQUM1QixVQUFVOzs7Ozs4Q0FBUTs7Ozs7MENBQzVCOytCQVQ4QzZCLENBQUM7Ozs7c0NBVWhEO3lCQUNOLENBQUM7Ozs7OzZCQUNDO2tDQUNMLDhEQUFDSyxNQUFJO3dCQUFDRSxhQUFXLEVBQUMsTUFBTTt3QkFBQ2QsU0FBUyxFQUFDLGlCQUFpQjs7Ozs7NkJBQUc7Ozs7OztxQkFDbkQ7Ozs7OzthQUVDLENBQ1Q7Q0FDSDtHQTNGS25CLE1BQU07O1FBV1FOLHNEQUFhO1FBR2pCRCx3REFBZTs7O0FBZHpCTyxLQUFBQSxNQUFNO0FBNEZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSGVhZGVyLmpzPzkxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uYXZDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VDbGlja091dHNpZGUgZnJvbSBcIi4uL3VzZUNsaWNrT3V0c2lkZVwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXNlV2luZG93U2l6ZVwiO1xyXG5cclxuY29uc3QgbWVudXMgPSBbXHJcbiAgeyBpY29uOiBcImZhIGZhLWhvbWVcIiwgZGtNZW51TmFtZTogXCJIb21lXCIsIG5hbWU6IFwiSG9tZVwiLCBpZDogXCJob21lXCIgfSxcclxuICB7IGljb246IFwiZmEgZmEtdXNlclwiLCBka01lbnVOYW1lOiBcIkFib3V0XCIsIG5hbWU6IFwiQWJvdXQgbWVcIiwgaWQ6IFwiYWJvdXRcIiB9LFxyXG4gIHtcclxuICAgIGljb246IFwiZmEgZmEtYnJpZWZjYXNlXCIsXHJcbiAgICBka01lbnVOYW1lOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgbmFtZTogXCJteSBQb3J0Zm9saW9cIixcclxuICAgIGlkOiBcIndvcmtcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiZmEgZmEtZW52ZWxvcGUtb3BlblwiLFxyXG4gICAgZGtNZW51TmFtZTogXCJDb250YWN0XCIsXHJcbiAgICBuYW1lOiBcImdldCBpbiB0b3VjaFwiLFxyXG4gICAgaWQ6IFwiY29udGFjdFwiLFxyXG4gIH0sXHJcbiAgeyBpY29uOiBcImZhIGZhLWNvbW1lbnRzXCIsIGRrTWVudU5hbWU6IFwiQmxvZ1wiLCBuYW1lOiBcIm15IEJsb2dcIiwgaWQ6IFwiYmxvZ1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBsaWdodCB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGNoYW5nZU5hdiwgbmF2LCBjaGFuZ2VNb2JpbGVNZW51LCBtb2JpbGVNZW51IH0gPVxyXG4gICAgdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaCxcclxuICAgICAgbmV3cGF0aCA9IHBhdGguc3BsaXQoXCIjXCIpLnBvcCgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2hhbmdlTmF2KG5ld3BhdGggPyBuZXdwYXRoIDogXCJob21lXCIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICAvLyBvdXRzaWRlIGNsaWNrXHJcbiAgbGV0IGRvbU5vZGUgPSB1c2VDbGlja091dHNpZGUoKCkgPT4ge1xyXG4gICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29CZXN0XCJcclxuICAgICAgICAgICAgc3JjPVwiaW1nL0xvZ29UaGVCZXN0V2hpdGVUZXh0LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBTdGFydHMgKi99XHJcbiAgICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIHttZW51cy5tYXAoKG1lbnUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuYXYgPT09IG1lbnUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU5hdihtZW51LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vYmlsZU1lbnUod2lkdGggPCAxMDI1ID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgbGluay0ke21lbnUuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7bWVudS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2ID09PSBtZW51LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake21lbnUuaWNvbn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZW51Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICB7LyogTW9iaWxlIE5hdmlnYXRpb24gRW5kcyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBTdHJldGNoeSBOYXZpZ2F0aW9uIFN0YXJ0cyAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17ZG9tTm9kZX1cclxuICAgICAgICBjbGFzc05hbWU9e2BjZC1zdHJldGNoeS1uYXYgJHt0b2dnbGUgPyBcIm5hdi1pcy12aXNpYmxlXCIgOiBcIlwifSAke1xyXG4gICAgICAgICAgbGlnaHQgPyBuYXYgPT0gXCJob21lXCIgJiYgXCJsaWdodGVyXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2QtbmF2LXRyaWdnZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdHJldGNoeS1uYXZcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuYXYgPT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7bWVudS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VOYXYobWVudS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttZW51LmRrTWVudU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3RyZXRjaHktbmF2LWJnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBTdHJldGNoeSBOYXZpZ2F0aW9uIEVuZHMgKi99XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZDb250ZXh0IiwidXNlQ2xpY2tPdXRzaWRlIiwidXNlV2luZG93U2l6ZSIsIm1lbnVzIiwiaWNvbiIsImRrTWVudU5hbWUiLCJuYW1lIiwiaWQiLCJIZWFkZXIiLCJsaWdodCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNoYW5nZU5hdiIsIm5hdiIsImNoYW5nZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51IiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIm5ld3BhdGgiLCJzcGxpdCIsInBvcCIsIndpZHRoIiwiZG9tTm9kZSIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInVsIiwibWFwIiwibWVudSIsImkiLCJsaSIsImEiLCJvbkNsaWNrIiwiaHJlZiIsInNwYW4iLCJyZWYiLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});