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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menus = [\n    {\n        icon: \"fa fa-home\",\n        dkMenuName: \"Home\",\n        name: \"Home\",\n        id: \"home\"\n    },\n    {\n        icon: \"fa fa-user\",\n        dkMenuName: \"About\",\n        name: \"About me\",\n        id: \"about\"\n    },\n    {\n        icon: \"fa fa-briefcase\",\n        dkMenuName: \"Portfolio\",\n        name: \"my Portfolio\",\n        id: \"work\"\n    },\n    {\n        icon: \"fa fa-envelope-open\",\n        dkMenuName: \"Contact\",\n        name: \"get in touch\",\n        id: \"contact\"\n    },\n    {\n        icon: \"fa fa-comments\",\n        dkMenuName: \"Blog\",\n        name: \"my Blog\",\n        id: \"blog\"\n    }, \n];\nvar Header = function(param) {\n    var light = param.light;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), changeNav = ref1.changeNav, nav = ref1.nav, changeMobileMenu = ref1.changeMobileMenu, mobileMenu = ref1.mobileMenu;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var path = window.location.hash, newpath = path.split(\"#\").pop();\n        return function() {\n            changeNav(newpath ? newpath : \"home\");\n        };\n    }, []);\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().width;\n    // outside click\n    var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        setToggle(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"d\", {\n                        className: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            id: \"nav\",\n                            className: \"navigation\",\n                            children: menus.map(function(menu, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: nav === menu.id ? \"active\" : \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            onClick: function() {\n                                                changeNav(menu.id);\n                                                changeMobileMenu(width < 1025 ? true : false);\n                                            },\n                                            id: \"link-\".concat(menu.id),\n                                            href: \"#\".concat(menu.id),\n                                            className: nav === menu.id ? \"active\" : \"\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"\".concat(menu.icon)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: menu.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: domNode,\n                className: \"cd-stretchy-nav \".concat(toggle ? \"nav-is-visible\" : \"\", \" \").concat(light ? nav == \"home\" && \"lighter\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cd-nav-trigger\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        },\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"stretchy-nav\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav == menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\".concat(menu.id),\n                                    onClick: function() {\n                                        changeNav(menu.id);\n                                        setToggle(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: menu.dkMenuName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"stretchy-nav-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\laragon\\\\www\\\\TheBestOff\\\\package\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"tS3kpq+4AqT8QovWGzJlseXhtgg=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGNBQWM7a0NBQ3pCeEIsS0FBSyxDQUFDMkIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQztpREFDakIsOERBQUNDLElBQUU7Z0NBQUNOLFNBQVMsRUFBRWQsR0FBRyxJQUFJa0IsSUFBSSxDQUFDeEIsRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFOzBDQUMzQyw0RUFBQzJCLEdBQUM7b0NBQ0FFLElBQUksRUFBRSxHQUFFLENBQVUsT0FBUkwsSUFBSSxDQUFDeEIsRUFBRSxDQUFFO29DQUNuQjRCLE9BQU8sRUFBRSxXQUFNO3dDQUNidkIsU0FBUyxDQUFDbUIsSUFBSSxDQUFDeEIsRUFBRSxDQUFDLENBQUM7d0NBQ25CSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCOzhDQUVELDRFQUFDMEIsTUFBSTtrREFBRU4sSUFBSSxDQUFDMUIsVUFBVTs7Ozs7OENBQVE7Ozs7OzBDQUM1QjsrQkFUOEMyQixDQUFDOzs7O3NDQVVoRDt5QkFDTixDQUFDOzs7Ozs2QkFDQztrQ0FDTCw4REFBQ0ssTUFBSTt3QkFBQ0UsYUFBVyxFQUFDLE1BQU07d0JBQUNaLFNBQVMsRUFBQyxpQkFBaUI7Ozs7OzZCQUFHOzs7Ozs7cUJBQ25EOzs7Ozs7YUFFQyxDQUNUO0NBQ0g7R0FqRktuQixNQUFNOztRQVdRTixzREFBYTtRQUdqQkQsd0RBQWU7OztBQWR6Qk8sS0FBQUEsTUFBTTtBQWtGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0hlYWRlci5qcz85MWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmF2Q29udGV4dFwiO1xyXG5pbXBvcnQgdXNlQ2xpY2tPdXRzaWRlIGZyb20gXCIuLi91c2VDbGlja091dHNpZGVcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3VzZVdpbmRvd1NpemVcIjtcclxuXHJcbmNvbnN0IG1lbnVzID0gW1xyXG4gIHsgaWNvbjogXCJmYSBmYS1ob21lXCIsIGRrTWVudU5hbWU6IFwiSG9tZVwiLCBuYW1lOiBcIkhvbWVcIiwgaWQ6IFwiaG9tZVwiIH0sXHJcbiAgeyBpY29uOiBcImZhIGZhLXVzZXJcIiwgZGtNZW51TmFtZTogXCJBYm91dFwiLCBuYW1lOiBcIkFib3V0IG1lXCIsIGlkOiBcImFib3V0XCIgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImZhIGZhLWJyaWVmY2FzZVwiLFxyXG4gICAgZGtNZW51TmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgIG5hbWU6IFwibXkgUG9ydGZvbGlvXCIsXHJcbiAgICBpZDogXCJ3b3JrXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImZhIGZhLWVudmVsb3BlLW9wZW5cIixcclxuICAgIGRrTWVudU5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgbmFtZTogXCJnZXQgaW4gdG91Y2hcIixcclxuICAgIGlkOiBcImNvbnRhY3RcIixcclxuICB9LFxyXG4gIHsgaWNvbjogXCJmYSBmYS1jb21tZW50c1wiLCBka01lbnVOYW1lOiBcIkJsb2dcIiwgbmFtZTogXCJteSBCbG9nXCIsIGlkOiBcImJsb2dcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgbGlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBjaGFuZ2VOYXYsIG5hdiwgY2hhbmdlTW9iaWxlTWVudSwgbW9iaWxlTWVudSB9ID1cclxuICAgIHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIG5ld3BhdGggPSBwYXRoLnNwbGl0KFwiI1wiKS5wb3AoKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNoYW5nZU5hdihuZXdwYXRoID8gbmV3cGF0aCA6IFwiaG9tZVwiKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgLy8gb3V0c2lkZSBjbGlja1xyXG4gIGxldCBkb21Ob2RlID0gdXNlQ2xpY2tPdXRzaWRlKCgpID0+IHtcclxuICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkIGNsYXNzTmFtZT48L2Q+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBTdGFydHMgKi99XHJcbiAgICAgICAgICA8dWwgaWQ9XCJuYXZcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIHttZW51cy5tYXAoKG1lbnUsIGkpID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuYXYgPT09IG1lbnUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTmF2KG1lbnUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9iaWxlTWVudSh3aWR0aCA8IDEwMjUgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BsaW5rLSR7bWVudS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHttZW51LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXYgPT09IG1lbnUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7bWVudS5pY29ufWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21lbnUubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiBFbmRzICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFN0cmV0Y2h5IE5hdmlnYXRpb24gU3RhcnRzICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtkb21Ob2RlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGNkLXN0cmV0Y2h5LW5hdiAke3RvZ2dsZSA/IFwibmF2LWlzLXZpc2libGVcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgICBsaWdodCA/IG5hdiA9PSBcImhvbWVcIiAmJiBcImxpZ2h0ZXJcIiA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjZC1uYXYtdHJpZ2dlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN0cmV0Y2h5LW5hdlwiPlxyXG4gICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuYXYgPT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7bWVudS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VOYXYobWVudS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttZW51LmRrTWVudU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3RyZXRjaHktbmF2LWJnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBTdHJldGNoeSBOYXZpZ2F0aW9uIEVuZHMgKi99XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZDb250ZXh0IiwidXNlQ2xpY2tPdXRzaWRlIiwidXNlV2luZG93U2l6ZSIsIm1lbnVzIiwiaWNvbiIsImRrTWVudU5hbWUiLCJuYW1lIiwiaWQiLCJIZWFkZXIiLCJsaWdodCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNoYW5nZU5hdiIsIm5hdiIsImNoYW5nZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51IiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIm5ld3BhdGgiLCJzcGxpdCIsInBvcCIsIndpZHRoIiwiZG9tTm9kZSIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImQiLCJ1bCIsIm1hcCIsIm1lbnUiLCJpIiwibGkiLCJhIiwib25DbGljayIsImhyZWYiLCJzcGFuIiwicmVmIiwiYXJpYS1oaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});