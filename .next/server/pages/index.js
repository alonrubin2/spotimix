"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst index = ()=>{\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(\"\\uD83D\\uDE80 ~ file: index.js:6 ~ index ~ categories\", categories);\n    const getAuth = async ()=>{\n        const auth = await fetch(\"/api/auth/getToken\");\n        const { access_token  } = await auth.json();\n        setToken(access_token);\n        getCategories(access_token);\n    };\n    const getCategories = async (token)=>{\n        const body = {\n            token\n        };\n        const categories = await fetch(\"/api/categories/getCategories\", {\n            method: \"POST\",\n            body: JSON.stringify(body),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const parsedCategories = await categories.json();\n        setCategories(parsedCategories.body.categories.items);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAuth();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    await getCategories();\n                },\n                children: \"get dem categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            categories.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"categories\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"Choose A Category\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        categories.map((category)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: category.name,\n                                children: category.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 22\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTVDLE1BQU1FLFFBQVEsSUFBTTtJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0NPLFFBQVFDLEdBQUcsQ0FBQyx3REFBNkNIO0lBRXpELE1BQU1JLFVBQVUsVUFBWTtRQUMxQixNQUFNQyxPQUFPLE1BQU1DLE1BQU07UUFDekIsTUFBTSxFQUFFQyxhQUFZLEVBQUUsR0FBRyxNQUFNRixLQUFLRyxJQUFJO1FBQ3hDVCxTQUFTUTtRQUNURSxjQUFjRjtJQUNoQjtJQUVBLE1BQU1FLGdCQUFnQixPQUFPWCxRQUFVO1FBQ3JDLE1BQU1ZLE9BQU87WUFBRVo7UUFBTTtRQUNyQixNQUFNRSxhQUFhLE1BQU1NLE1BQU0saUNBQWlDO1lBQzlESyxRQUFRO1lBQ1JELE1BQU1FLEtBQUtDLFNBQVMsQ0FBQ0g7WUFDckJJLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNQyxtQkFBbUIsTUFBTWYsV0FBV1EsSUFBSTtRQUM5Q1AsY0FBY2MsaUJBQWlCTCxJQUFJLENBQUNWLFVBQVUsQ0FBQ2dCLEtBQUs7SUFDdEQ7SUFFQXBCLGdEQUFTQSxDQUFDLElBQU07UUFDZFE7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2E7OzBCQUNDLDhEQUFDQztnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQixNQUFNVjtnQkFDUjswQkFBRzs7Ozs7O1lBR0pULFdBQVdvQixNQUFNLEdBQUcsbUJBQ25COzBCQUNFLDRFQUFDQztvQkFBT0MsTUFBSzs7c0NBQ1gsOERBQUNDOzRCQUFPQyxPQUFPO3NDQUFJOzs7Ozs7d0JBQ2xCeEIsV0FBV3lCLEdBQUcsQ0FBQyxDQUFDQyxXQUFhOzRCQUM1QixxQkFBTyw4REFBQ0g7Z0NBQU9DLE9BQU9FLFNBQVNKLElBQUk7MENBQUdJLFNBQVNKLElBQUk7Ozs7Ozt3QkFDckQ7Ozs7Ozs7Ozs7Ozs7O0FBTVo7QUFFQSxpRUFBZXpCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aW1peC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanM6NiB+IGluZGV4IH4gY2F0ZWdvcmllc1wiLCBjYXRlZ29yaWVzKTtcclxuXHJcbiAgY29uc3QgZ2V0QXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGF1dGggPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9nZXRUb2tlblwiKTtcclxuICAgIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBhdXRoLmpzb24oKTtcclxuICAgIHNldFRva2VuKGFjY2Vzc190b2tlbik7XHJcbiAgICBnZXRDYXRlZ29yaWVzKGFjY2Vzc190b2tlbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHsgdG9rZW4gfTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2F0ZWdvcmllcy9nZXRDYXRlZ29yaWVzXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZENhdGVnb3JpZXMgPSBhd2FpdCBjYXRlZ29yaWVzLmpzb24oKTtcclxuICAgIHNldENhdGVnb3JpZXMocGFyc2VkQ2F0ZWdvcmllcy5ib2R5LmNhdGVnb3JpZXMuaXRlbXMpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBdXRoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGdldENhdGVnb3JpZXMoKTtcclxuICAgICAgICB9fT5cclxuICAgICAgICBnZXQgZGVtIGNhdGVnb3JpZXNcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiXCJ9PkNob29zZSBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkubmFtZX0+e2NhdGVnb3J5Lm5hbWV9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbmRleCIsInRva2VuIiwic2V0VG9rZW4iLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdXRoIiwiYXV0aCIsImZldGNoIiwiYWNjZXNzX3Rva2VuIiwianNvbiIsImdldENhdGVnb3JpZXMiLCJib2R5IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJwYXJzZWRDYXRlZ29yaWVzIiwiaXRlbXMiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsInZhbHVlIiwibWFwIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();