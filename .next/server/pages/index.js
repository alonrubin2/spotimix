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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst index = ()=>{\n    const getAuth = async ()=>{\n        const auth = await fetch(\"/api/auth/getToken\");\n        const parsedAuth = await auth.json();\n        console.log(\"\\uD83D\\uDE80 ~ file: index.js:7 ~ getAuth ~ parsedAuth\", parsedAuth);\n    };\n    const getCategories = async ()=>{\n        const categories = await fetch(\"/api/categories/getCategories\");\n        console.log(\"\\uD83D\\uDE80 ~ file: index.js:7 ~ getCategories ~ categories\", categories);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    getAuth();\n                },\n                children: \"get dem Token\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    getCategories();\n                },\n                children: \"get dem categories\"\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\spotimix\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTVDLE1BQU1FLFFBQVEsSUFBTTtJQUNsQixNQUFNQyxVQUFVLFVBQVk7UUFDMUIsTUFBTUMsT0FBTyxNQUFNQyxNQUFNO1FBQ3pCLE1BQU1DLGFBQWEsTUFBTUYsS0FBS0csSUFBSTtRQUNsQ0MsUUFBUUMsR0FBRyxDQUFDLDBEQUErQ0g7SUFDN0Q7SUFFQSxNQUFNSSxnQkFBZ0IsVUFBWTtRQUNoQyxNQUFNQyxhQUFhLE1BQU1OLE1BQU07UUFDL0JHLFFBQVFDLEdBQUcsQ0FDVCxnRUFDQUU7SUFFSjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxTQUFTLElBQU07b0JBQ2JYO2dCQUNGOzBCQUFHOzs7Ozs7MEJBSUwsOERBQUNVO2dCQUNDQyxTQUFTLElBQU07b0JBQ2JKO2dCQUNGOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLWDtBQUVBLGlFQUFlUixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGltaXgvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldEF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvZ2V0VG9rZW5cIik7XHJcbiAgICBjb25zdCBwYXJzZWRBdXRoID0gYXdhaXQgYXV0aC5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qczo3IH4gZ2V0QXV0aCB+IHBhcnNlZEF1dGhcIiwgcGFyc2VkQXV0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2F0ZWdvcmllcy9nZXRDYXRlZ29yaWVzXCIpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzOjcgfiBnZXRDYXRlZ29yaWVzIH4gY2F0ZWdvcmllc1wiLFxyXG4gICAgICBjYXRlZ29yaWVzXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZ2V0QXV0aCgpO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIGdldCBkZW0gVG9rZW5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIGdldCBkZW0gY2F0ZWdvcmllc1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5kZXgiLCJnZXRBdXRoIiwiYXV0aCIsImZldGNoIiwicGFyc2VkQXV0aCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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