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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menus = [\n    {\n        icon: \"fa fa-home\",\n        dkMenuName: \"Home\",\n        name: \"Home\",\n        id: \"home\"\n    },\n    {\n        icon: \"fa fa-user\",\n        dkMenuName: \"About\",\n        name: \"About me\",\n        id: \"about\"\n    },\n    {\n        icon: \"fa fa-briefcase\",\n        dkMenuName: \"Portfolio\",\n        name: \"my Portfolio\",\n        id: \"work\"\n    },\n    {\n        icon: \"fa fa-envelope-open\",\n        dkMenuName: \"Contact\",\n        name: \"get in touch\",\n        id: \"contact\"\n    },\n    {\n        icon: \"fa fa-comments\",\n        dkMenuName: \"Blog\",\n        name: \"my Blog\",\n        id: \"blog\"\n    }, \n];\nvar Header = function(param) {\n    var light = param.light;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), changeNav = ref1.changeNav, nav = ref1.nav, changeMobileMenu = ref1.changeMobileMenu, mobileMenu = ref1.mobileMenu;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var path = window.location.hash, newpath = path.split(\"#\").pop();\n        return function() {\n            changeNav(newpath ? newpath : \"home\");\n        };\n    }, []);\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().width;\n    // outside click\n    var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        setToggle(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navigation\",\n                        id: \"nav\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"leftlogopicture\",\n                            src: \"img/LogoTheBestWhiteText.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            id: \"nav\",\n                            className: \"navigation\",\n                            children: menus.map(function(menu, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: nav === menu.id ? \"active\" : \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: function() {\n                                                changeNav(menu.id);\n                                                changeMobileMenu(width < 1025 ? true : false);\n                                            },\n                                            id: \"link-\".concat(menu.id),\n                                            href: \"#\".concat(menu.id),\n                                            className: nav === menu.id ? \"active\" : \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"\".concat(menu.icon)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: menu.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: domNode,\n                className: \"cd-stretchy-nav \".concat(toggle ? \"nav-is-visible\" : \"\", \" \").concat(light ? nav == \"home\" && \"lighter\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cd-nav-trigger\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        },\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"stretchy-nav\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav == menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\".concat(menu.id),\n                                    onClick: function() {\n                                        changeNav(menu.id);\n                                        setToggle(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: menu.dkMenuName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"stretchy-nav-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"tS3kpq+4AqT8QovWGzJlseXhtgg=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0QsTUFBTSxDQUFDO3lCQUFBO3dCQUNqQzRCLElBQUksRUFBQyxHQUFHO2tDQUVSLDRFQUFDQyxNQUFJOzRCQUFDRSxhQUFXLEVBQUMsTUFBTTs7Ozs7aUNBQUc7Ozs7OzZCQUN6QjtrQ0FDSiw4REFBQ1YsSUFBRTt3QkFBQ0osU0FBUyxFQUFDLGNBQWM7a0NBQ3pCeEIsS0FBSyxDQUFDNkIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQztpREFDakIsOERBQUNDLElBQUU7Z0NBQUNSLFNBQVMsRUFBRWQsR0FBRyxJQUFJb0IsSUFBSSxDQUFDMUIsRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFOzBDQUMzQyw0RUFBQzZCLEdBQUM7b0NBQ0FFLElBQUksRUFBRSxHQUFFLENBQVUsT0FBUkwsSUFBSSxDQUFDMUIsRUFBRSxDQUFFO29DQUNuQjhCLE9BQU8sRUFBRSxXQUFNO3dDQUNiekIsU0FBUyxDQUFDcUIsSUFBSSxDQUFDMUIsRUFBRSxDQUFDLENBQUM7d0NBQ25CSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCOzhDQUVELDRFQUFDNEIsTUFBSTtrREFBRU4sSUFBSSxDQUFDNUIsVUFBVTs7Ozs7OENBQVE7Ozs7OzBDQUM1QjsrQkFUOEM2QixDQUFDOzs7O3NDQVVoRDt5QkFDTixDQUFDOzs7Ozs2QkFDQztrQ0FDTCw4REFBQ0ssTUFBSTt3QkFBQ0UsYUFBVyxFQUFDLE1BQU07d0JBQUNkLFNBQVMsRUFBQyxpQkFBaUI7Ozs7OzZCQUFHOzs7Ozs7cUJBQ25EOzs7Ozs7YUFFQyxDQUNUO0NBQ0g7R0F2RktuQixNQUFNOztRQVdRTixzREFBYTtRQUdqQkQsd0RBQWU7OztBQWR6Qk8sS0FBQUEsTUFBTTtBQXdGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0hlYWRlci5qcz85MWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmF2Q29udGV4dFwiO1xyXG5pbXBvcnQgdXNlQ2xpY2tPdXRzaWRlIGZyb20gXCIuLi91c2VDbGlja091dHNpZGVcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmNvbnN0IG1lbnVzID0gW1xyXG4gIHsgaWNvbjogXCJmYSBmYS1ob21lXCIsIGRrTWVudU5hbWU6IFwiSG9tZVwiLCBuYW1lOiBcIkhvbWVcIiwgaWQ6IFwiaG9tZVwiIH0sXHJcbiAgeyBpY29uOiBcImZhIGZhLXVzZXJcIiwgZGtNZW51TmFtZTogXCJBYm91dFwiLCBuYW1lOiBcIkFib3V0IG1lXCIsIGlkOiBcImFib3V0XCIgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImZhIGZhLWJyaWVmY2FzZVwiLFxyXG4gICAgZGtNZW51TmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgIG5hbWU6IFwibXkgUG9ydGZvbGlvXCIsXHJcbiAgICBpZDogXCJ3b3JrXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImZhIGZhLWVudmVsb3BlLW9wZW5cIixcclxuICAgIGRrTWVudU5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgbmFtZTogXCJnZXQgaW4gdG91Y2hcIixcclxuICAgIGlkOiBcImNvbnRhY3RcIixcclxuICB9LFxyXG4gIHsgaWNvbjogXCJmYSBmYS1jb21tZW50c1wiLCBka01lbnVOYW1lOiBcIkJsb2dcIiwgbmFtZTogXCJteSBCbG9nXCIsIGlkOiBcImJsb2dcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgbGlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBjaGFuZ2VOYXYsIG5hdiwgY2hhbmdlTW9iaWxlTWVudSwgbW9iaWxlTWVudSB9ID1cclxuICAgIHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIG5ld3BhdGggPSBwYXRoLnNwbGl0KFwiI1wiKS5wb3AoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZU5hdihuZXdwYXRoID8gbmV3cGF0aCA6IFwiaG9tZVwiKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgLy8gb3V0c2lkZSBjbGlja1xyXG4gIGxldCBkb21Ob2RlID0gdXNlQ2xpY2tPdXRzaWRlKCgpID0+IHtcclxuICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiIGlkPVwibmF2XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnRsb2dvcGljdHVyZVwiXHJcbiAgICAgICAgICAgIHNyYz1cImltZy9Mb2dvVGhlQmVzdFdoaXRlVGV4dC5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uIFN0YXJ0cyAqL31cclxuICAgICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e25hdiA9PT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VOYXYobWVudS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2JpbGVNZW51KHdpZHRoIDwgMTAyNSA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17YGxpbmstJHttZW51LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke21lbnUuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e25hdiA9PT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHttZW51Lmljb259YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWVudS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uIEVuZHMgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogU3RyZXRjaHkgTmF2aWdhdGlvbiBTdGFydHMgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2RvbU5vZGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Qtc3RyZXRjaHktbmF2ICR7dG9nZ2xlID8gXCJuYXYtaXMtdmlzaWJsZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgIGxpZ2h0ID8gbmF2ID09IFwiaG9tZVwiICYmIFwibGlnaHRlclwiIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNkLW5hdi10cmlnZ2VyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX1cclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RyZXRjaHktbmF2XCI+XHJcbiAgICAgICAgICB7bWVudXMubWFwKChtZW51LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e25hdiA9PSBtZW51LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHttZW51LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZU5hdihtZW51LmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21lbnUuZGtNZW51TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJzdHJldGNoeS1uYXYtYmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFN0cmV0Y2h5IE5hdmlnYXRpb24gRW5kcyAqL31cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkNvbnRleHQiLCJ1c2VDbGlja091dHNpZGUiLCJ1c2VXaW5kb3dTaXplIiwibWVudXMiLCJpY29uIiwiZGtNZW51TmFtZSIsIm5hbWUiLCJpZCIsIkhlYWRlciIsImxpZ2h0IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY2hhbmdlTmF2IiwibmF2IiwiY2hhbmdlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnUiLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwibmV3cGF0aCIsInNwbGl0IiwicG9wIiwid2lkdGgiLCJkb21Ob2RlIiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJtYXAiLCJtZW51IiwiaSIsImxpIiwiYSIsIm9uQ2xpY2siLCJocmVmIiwic3BhbiIsInJlZiIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});