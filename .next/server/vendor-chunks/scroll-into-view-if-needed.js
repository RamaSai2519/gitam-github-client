"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ e)\n/* harmony export */ });\n/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\");\nconst o=t=>!1===t?{block:\"end\",inline:\"nearest\"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:\"start\",inline:\"nearest\"};function e(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>\"object\"==typeof t&&\"function\"==typeof t.behavior)(r))return r.behavior((0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(e,r));const l=\"boolean\"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:s}of (0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(e,o(r))){const t=i-n.top+n.bottom,o=s-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}}//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRCxtQkFBbUIsNkJBQTZCLHFEQUFxRCxnQ0FBZ0MsZ0JBQWdCLHlCQUF5QixRQUFRLEtBQUssZ0JBQWdCLEVBQUUsb0NBQW9DLG9FQUFvRSxTQUFTLFlBQVksYUFBYSxtQ0FBbUMsT0FBTyxpS0FBaUssS0FBSywrRUFBK0UsaUVBQUMsT0FBTyx1REFBdUQsVUFBVSxrQkFBa0IsR0FBRyxpRUFBQyxVQUFVLDRDQUE0QyxVQUFVLHdCQUF3QixHQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGFtX2dpdGh1Yl9jbGllbnQvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5qcz81MWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtjb21wdXRlIGFzIHR9ZnJvbVwiY29tcHV0ZS1zY3JvbGwtaW50by12aWV3XCI7Y29uc3Qgbz10PT4hMT09PXQ/e2Jsb2NrOlwiZW5kXCIsaW5saW5lOlwibmVhcmVzdFwifToodD0+dD09PU9iamVjdCh0KSYmMCE9PU9iamVjdC5rZXlzKHQpLmxlbmd0aCkodCk/dDp7YmxvY2s6XCJzdGFydFwiLGlubGluZTpcIm5lYXJlc3RcIn07ZnVuY3Rpb24gZShlLHIpe2lmKCFlLmlzQ29ubmVjdGVkfHwhKHQ9PntsZXQgbz10O2Zvcig7byYmby5wYXJlbnROb2RlOyl7aWYoby5wYXJlbnROb2RlPT09ZG9jdW1lbnQpcmV0dXJuITA7bz1vLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P28ucGFyZW50Tm9kZS5ob3N0Om8ucGFyZW50Tm9kZX1yZXR1cm4hMX0pKGUpKXJldHVybjtjb25zdCBuPSh0PT57Y29uc3Qgbz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtyZXR1cm57dG9wOnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5Ub3ApfHwwLHJpZ2h0OnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5SaWdodCl8fDAsYm90dG9tOnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5Cb3R0b20pfHwwLGxlZnQ6cGFyc2VGbG9hdChvLnNjcm9sbE1hcmdpbkxlZnQpfHwwfX0pKGUpO2lmKCh0PT5cIm9iamVjdFwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5iZWhhdmlvcikocikpcmV0dXJuIHIuYmVoYXZpb3IodChlLHIpKTtjb25zdCBsPVwiYm9vbGVhblwiPT10eXBlb2Ygcnx8bnVsbD09cj92b2lkIDA6ci5iZWhhdmlvcjtmb3IoY29uc3R7ZWw6YSx0b3A6aSxsZWZ0OnN9b2YgdChlLG8ocikpKXtjb25zdCB0PWktbi50b3Arbi5ib3R0b20sbz1zLW4ubGVmdCtuLnJpZ2h0O2Euc2Nyb2xsKHt0b3A6dCxsZWZ0Om8sYmVoYXZpb3I6bH0pfX1leHBvcnR7ZSBhcyBkZWZhdWx0fTsvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js\n");

/***/ })

};
;