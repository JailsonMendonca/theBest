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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menus = [\n    {\n        icon: \"fa fa-home\",\n        dkMenuName: \"Home\",\n        name: \"Home\",\n        id: \"home\"\n    },\n    {\n        icon: \"fa fa-user\",\n        dkMenuName: \"About\",\n        name: \"About me\",\n        id: \"about\"\n    },\n    {\n        icon: \"fa fa-briefcase\",\n        dkMenuName: \"Portfolio\",\n        name: \"my Portfolio\",\n        id: \"work\"\n    },\n    {\n        icon: \"fa fa-envelope-open\",\n        dkMenuName: \"Contact\",\n        name: \"get in touch\",\n        id: \"contact\"\n    },\n    {\n        icon: \"fa fa-comments\",\n        dkMenuName: \"Blog\",\n        name: \"my Blog\",\n        id: \"blog\"\n    }, \n];\nvar Header = function(param) {\n    var light = param.light;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), changeNav = ref1.changeNav, nav = ref1.nav, changeMobileMenu = ref1.changeMobileMenu, mobileMenu = ref1.mobileMenu;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var path = window.location.hash, newpath = path.split(\"#\").pop();\n        return function() {\n            changeNav(newpath ? newpath : \"home\");\n        };\n    }, []);\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().width;\n    // outside click\n    var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        setToggle(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        id: \"nav\",\n                        className: \"navigation\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"logoBest\",\n                                src: \"img/LogoTheBestWhiteText.png\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            menus.map(function(menu, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: nav === menu.id ? \"active\" : \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: function() {\n                                                changeNav(menu.id);\n                                                changeMobileMenu(width < 1025 ? true : false);\n                                            },\n                                            id: \"link-\".concat(menu.id),\n                                            href: \"#\".concat(menu.id),\n                                            className: nav === menu.id ? \"active\" : \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"\".concat(menu.icon)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: menu.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: domNode,\n                className: \"cd-stretchy-nav \".concat(toggle ? \"nav-is-visible\" : \"\", \" \").concat(light ? nav == \"home\" && \"lighter\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cd-nav-trigger\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        },\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"stretchy-nav\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav == menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\".concat(menu.id),\n                                    onClick: function() {\n                                        changeNav(menu.id);\n                                        setToggle(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: menu.dkMenuName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"stretchy-nav-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"tS3kpq+4AqT8QovWGzJlseXhtgg=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07Ozs7O2lDQUFHOzs7Ozs2QkFDekI7a0NBQ0osOERBQUNiLElBQUU7d0JBQUNELFNBQVMsRUFBQyxjQUFjO2tDQUN6QnhCLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUM7aURBQ2pCLDhEQUFDQyxJQUFFO2dDQUFDUixTQUFTLEVBQUVkLEdBQUcsSUFBSW9CLElBQUksQ0FBQzFCLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRTswQ0FDM0MsNEVBQUM2QixHQUFDO29DQUNBRSxJQUFJLEVBQUUsR0FBRSxDQUFVLE9BQVJMLElBQUksQ0FBQzFCLEVBQUUsQ0FBRTtvQ0FDbkI4QixPQUFPLEVBQUUsV0FBTTt3Q0FDYnpCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQzFCLEVBQUUsQ0FBQyxDQUFDO3dDQUNuQkksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FDQUNsQjs4Q0FFRCw0RUFBQzRCLE1BQUk7a0RBQUVOLElBQUksQ0FBQzVCLFVBQVU7Ozs7OzhDQUFROzs7OzswQ0FDNUI7K0JBVDhDNkIsQ0FBQzs7OztzQ0FVaEQ7eUJBQ04sQ0FBQzs7Ozs7NkJBQ0M7a0NBQ0wsOERBQUNLLE1BQUk7d0JBQUNFLGFBQVcsRUFBQyxNQUFNO3dCQUFDZCxTQUFTLEVBQUMsaUJBQWlCOzs7Ozs2QkFBRzs7Ozs7O3FCQUNuRDs7Ozs7O2FBRUMsQ0FDVDtDQUNIO0dBdkZLbkIsTUFBTTs7UUFXUU4sc0RBQWE7UUFHakJELHdEQUFlOzs7QUFkekJPLEtBQUFBLE1BQU07QUF3RlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9IZWFkZXIuanM/OTFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L25hdkNvbnRleHRcIjtcclxuaW1wb3J0IHVzZUNsaWNrT3V0c2lkZSBmcm9tIFwiLi4vdXNlQ2xpY2tPdXRzaWRlXCI7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91c2VXaW5kb3dTaXplXCI7XHJcblxyXG5jb25zdCBtZW51cyA9IFtcclxuICB7IGljb246IFwiZmEgZmEtaG9tZVwiLCBka01lbnVOYW1lOiBcIkhvbWVcIiwgbmFtZTogXCJIb21lXCIsIGlkOiBcImhvbWVcIiB9LFxyXG4gIHsgaWNvbjogXCJmYSBmYS11c2VyXCIsIGRrTWVudU5hbWU6IFwiQWJvdXRcIiwgbmFtZTogXCJBYm91dCBtZVwiLCBpZDogXCJhYm91dFwiIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJmYSBmYS1icmllZmNhc2VcIixcclxuICAgIGRrTWVudU5hbWU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICBuYW1lOiBcIm15IFBvcnRmb2xpb1wiLFxyXG4gICAgaWQ6IFwid29ya1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJmYSBmYS1lbnZlbG9wZS1vcGVuXCIsXHJcbiAgICBka01lbnVOYW1lOiBcIkNvbnRhY3RcIixcclxuICAgIG5hbWU6IFwiZ2V0IGluIHRvdWNoXCIsXHJcbiAgICBpZDogXCJjb250YWN0XCIsXHJcbiAgfSxcclxuICB7IGljb246IFwiZmEgZmEtY29tbWVudHNcIiwgZGtNZW51TmFtZTogXCJCbG9nXCIsIG5hbWU6IFwibXkgQmxvZ1wiLCBpZDogXCJibG9nXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGxpZ2h0IH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgY2hhbmdlTmF2LCBuYXYsIGNoYW5nZU1vYmlsZU1lbnUsIG1vYmlsZU1lbnUgfSA9XHJcbiAgICB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBuZXdwYXRoID0gcGF0aC5zcGxpdChcIiNcIikucG9wKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VOYXYobmV3cGF0aCA/IG5ld3BhdGggOiBcImhvbWVcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIC8vIG91dHNpZGUgY2xpY2tcclxuICBsZXQgZG9tTm9kZSA9IHVzZUNsaWNrT3V0c2lkZSgoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBTdGFydHMgKi99XHJcbiAgICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29CZXN0XCJcclxuICAgICAgICAgICAgc3JjPVwiaW1nL0xvZ29UaGVCZXN0V2hpdGVUZXh0LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7bWVudXMubWFwKChtZW51LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bmF2ID09PSBtZW51LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU5hdihtZW51LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vYmlsZU1lbnUod2lkdGggPCAxMDI1ID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgbGluay0ke21lbnUuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgIyR7bWVudS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bmF2ID09PSBtZW51LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake21lbnUuaWNvbn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZW51Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICB7LyogTW9iaWxlIE5hdmlnYXRpb24gRW5kcyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBTdHJldGNoeSBOYXZpZ2F0aW9uIFN0YXJ0cyAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17ZG9tTm9kZX1cclxuICAgICAgICBjbGFzc05hbWU9e2BjZC1zdHJldGNoeS1uYXYgJHt0b2dnbGUgPyBcIm5hdi1pcy12aXNpYmxlXCIgOiBcIlwifSAke1xyXG4gICAgICAgICAgbGlnaHQgPyBuYXYgPT0gXCJob21lXCIgJiYgXCJsaWdodGVyXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2QtbmF2LXRyaWdnZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdHJldGNoeS1uYXZcIj5cclxuICAgICAgICAgIHttZW51cy5tYXAoKG1lbnUsIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bmF2ID09IG1lbnUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke21lbnUuaWR9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlTmF2KG1lbnUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bWVudS5ka01lbnVOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInN0cmV0Y2h5LW5hdi1iZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogU3RyZXRjaHkgTmF2aWdhdGlvbiBFbmRzICovfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2Q29udGV4dCIsInVzZUNsaWNrT3V0c2lkZSIsInVzZVdpbmRvd1NpemUiLCJtZW51cyIsImljb24iLCJka01lbnVOYW1lIiwibmFtZSIsImlkIiwiSGVhZGVyIiwibGlnaHQiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJjaGFuZ2VOYXYiLCJuYXYiLCJjaGFuZ2VNb2JpbGVNZW51IiwibW9iaWxlTWVudSIsInBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJuZXdwYXRoIiwic3BsaXQiLCJwb3AiLCJ3aWR0aCIsImRvbU5vZGUiLCJoZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImltZyIsInNyYyIsImFsdCIsIm1hcCIsIm1lbnUiLCJpIiwibGkiLCJhIiwib25DbGljayIsImhyZWYiLCJzcGFuIiwicmVmIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});