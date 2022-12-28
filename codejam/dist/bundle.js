/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  scroll-behavior: smooth;\\n}\\n\\na,\\nabbr,\\nacronym,\\naddress,\\napplet,\\narticle,\\naside,\\naudio,\\nb,\\nbig,\\nblockquote,\\nbody,\\ncanvas,\\ncaption,\\ncenter,\\ncite,\\ncode,\\ndd,\\ndel,\\ndetails,\\ndfn,\\ndiv,\\ndl,\\ndt,\\nem,\\nembed,\\nfieldset,\\nfigcaption,\\nfigure,\\nfooter,\\nform,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nheader,\\nhgroup,\\nhtml,\\ni,\\niframe,\\nimg,\\nins,\\nkbd,\\nlabel,\\nlegend,\\nli,\\nmain,\\nmark,\\nmenu,\\nnav,\\nobject,\\nol,\\noutput,\\np,\\npre,\\nq,\\nruby,\\ns,\\nsamp,\\nsection,\\nsmall,\\nspan,\\nstrike,\\nstrong,\\nsub,\\nsummary,\\nsup,\\ntable,\\ntbody,\\ntd,\\ntfoot,\\nth,\\nthead,\\ntime,\\ntr,\\ntt,\\nu,\\nul,\\nvar,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\nhtml {\\n  font-size: 100%;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 400;\\n  color: #202020;\\n}\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nmenu,\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n.app {\\n  background-color: #202020;\\n  min-height: 100vh;\\n}\\n\\n.app__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  max-width: 500px;\\n  margin: 0 auto;\\n}\\n\\n.app__buttons {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  padding: 10px;\\n  gap: 10px;\\n  padding-top: 15px;\\n  margin-bottom: 20px;\\n}\\n.app__buttons .app__button {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 30px;\\n  background: #ffffff;\\n  padding: 5px;\\n  margin: 0;\\n  border: none;\\n  border-radius: 20px;\\n  cursor: pointer;\\n  color: inherit;\\n  font-weight: 500;\\n  font-family: inherit;\\n  font-size: 14px;\\n  transition: all 0.3s ease-in-out;\\n}\\n.app__buttons .app__button:hover {\\n  background: rgba(255, 255, 255, 0.8);\\n}\\n.app__buttons .app__button:disabled {\\n  background: rgba(255, 255, 255, 0.3);\\n  cursor: default;\\n}\\n\\n.app__timers {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  gap: 10px;\\n  font-size: 24px;\\n  font-weight: 600;\\n  color: #ffffff;\\n  margin-bottom: 20px;\\n}\\n\\n.app__puzzles {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 320px;\\n  max-width: 100%;\\n  min-width: 320px;\\n  height: 600px;\\n  max-height: calc(100% - 50px);\\n  min-height: 320px;\\n  margin-bottom: 20px;\\n  border-radius: 10px;\\n  background-color: #000000;\\n}\\n.app__puzzles .app__puzzles-item {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px solid #202020;\\n  border-radius: 10px;\\n  background-color: #ffffff;\\n  cursor: pointer;\\n  font-weight: 900;\\n  font-size: 18px;\\n  transition: all 0.2s;\\n}\\n\\n.app__fields {\\n  display: flex;\\n  flex-direction: row;\\n  font-size: 14px;\\n  font-weight: 400;\\n  color: #ffffff;\\n  margin-bottom: 20px;\\n}\\n.app__fields .app__frame {\\n  margin-right: 10px;\\n}\\n\\n.app__sizes {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n.app__sizes .app__size {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background: #ffffff;\\n  padding: 5px;\\n  margin: 5px;\\n  border: none;\\n  border-radius: 20px;\\n  cursor: pointer;\\n  color: inherit;\\n  font-weight: 500;\\n  font-family: inherit;\\n  font-size: 14px;\\n  transition: all 0.3s ease-in-out;\\n}\\n.app__sizes .app__size:hover {\\n  background: rgba(255, 255, 255, 0.8);\\n}\\n\\n.app__overlay {\\n  display: block;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  z-index: 99;\\n}\\n\\n.app__modal {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 2;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.app__modal-content {\\n  background-color: white;\\n  border-radius: 5%;\\n  padding: 19px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 25px;\\n}\\n.app__modal-descr {\\n  text-align: center;\\n  margin: 15px 0;\\n}\\n\\n.app__form-buttons {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  padding: 10px;\\n  gap: 10px;\\n  padding-top: 50px;\\n}\\n.app__form-button {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 30px;\\n  background: #202020;\\n  padding: 10px;\\n  margin: 0;\\n  border: none;\\n  border-radius: 20px;\\n  cursor: pointer;\\n  color: #ffffff;\\n  font-weight: 500;\\n  font-family: inherit;\\n  font-size: 14px;\\n  transition: all 0.3s ease-in-out;\\n}\\n.app__form-button:hover {\\n  background: rgba(20, 20, 20, 0.8);\\n}\\n@media screen and (max-width: 375px) {\\n  .app__form-input {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n\\n.form__label {\\n  color: #202020;\\n  font-weight: 400;\\n  font-size: 24px;\\n}\\n@media screen and (max-width: 375px) {\\n  .form__label {\\n    margin-bottom: 20px;\\n  }\\n}\\n.form__input {\\n  height: 30px;\\n  background: transparent;\\n  padding: 10px;\\n  margin: 0;\\n  border: none;\\n  border-radius: 20px;\\n  border: 1px solid #202020;\\n  color: #202020;\\n  font-weight: 500;\\n  font-family: inherit;\\n  font-size: 14px;\\n}\\n\\n@media screen and (max-width: 405px) {\\n  .table .app__form-buttons {\\n    padding: 0;\\n    padding-top: 20px;\\n  }\\n}\\n\\n.app__modal-content.table {\\n  padding: 10px;\\n}\\n\\n.app__table {\\n  display: block;\\n  width: 100%;\\n  overflow: auto;\\n  border-collapse: collapse;\\n  margin-top: 20px;\\n}\\n.app__table-tbody {\\n  display: block;\\n  max-width: max-content;\\n  margin: 0 auto;\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\n  border-radius: 5px;\\n  overflow: hidden;\\n}\\n.app__table-tr:first-child .app__table-td {\\n  font-weight: 600;\\n  color: #202020;\\n  font-size: 18px;\\n}\\n@media screen and (max-width: 420px) {\\n  .app__table-tr:first-child .app__table-td {\\n    font-size: 16px;\\n  }\\n}\\n.app__table-tr:last-child .app__table-td {\\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\\n}\\n.app__table-td {\\n  border-right: 1px solid rgba(0, 0, 0, 0.5);\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\\n  font-size: 18px;\\n  text-align: center;\\n  padding: 10px;\\n  color: rgba(0, 0, 0, 0.4);\\n}\\n.app__table-td:first-child {\\n  border-left: 1px solid rgba(0, 0, 0, 0);\\n}\\n.app__table-td:last-child {\\n  border-right: 1px solid rgba(0, 0, 0, 0);\\n}\\n@media screen and (max-width: 420px) {\\n  .app__table-td {\\n    font-size: 14px;\\n    padding: 5px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://codejam/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://codejam/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://codejam/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://codejam/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://codejam/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _assets_audio_sound_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/audio/sound.mp3 */ \"./src/assets/audio/sound.mp3\");\n\r\n\r\nclass Game {\r\n  constructor(size) {\r\n    this.node = null;\r\n    this.timer__value = null;\r\n    this.time = 0;\r\n    this.interval = null;\r\n\r\n    this.playSound = true;\r\n\r\n    this.count = 0;\r\n\r\n    this.changeSizes(size);\r\n    this.puzzles = null;\r\n\r\n    this.matrix = null;\r\n    this.drag = null;\r\n\r\n    this.res = this.getLocalStorage('results') || {};\r\n\r\n    window.addEventListener('DOMContentLoaded', this.windowResize, { once: true });\r\n    window.addEventListener('resize', this.windowResize);\r\n  }\r\n\r\n  windowResize(e) {\r\n    const app__puzzles = document.querySelector('.app__puzzles');\r\n    app__puzzles.style.height = '600px';\r\n    app__puzzles.style.width = '600px';\r\n\r\n    app__puzzles.style.height = window.getComputedStyle(app__puzzles).width;\r\n    app__puzzles.style.width = window.getComputedStyle(app__puzzles).height;\r\n  }\r\n\r\n  initGame() {\r\n    this.changeSizes(this.getLocalStorage('sizes'));\r\n    const storagePuzzle = this.getLocalStorage('puzzles');\r\n    const storageTime = this.getLocalStorage('time');\r\n    const storageCount = this.getLocalStorage('steps');\r\n\r\n    if (storagePuzzle && storageTime && storageCount) {\r\n      this.count = storageCount;\r\n      let timing = storageTime;\r\n\r\n      let min = Math.floor(Number(timing) / 60);\r\n      let sec = Math.floor(Number(timing) % 60);\r\n      if (min < 10) {\r\n        min = `0${min}`;\r\n      } else {\r\n        min = `${min}`;\r\n      }\r\n      if (sec < 10) {\r\n        sec = `0${sec}`;\r\n      } else {\r\n        sec = `${sec}`;\r\n      }\r\n      this.timer__value = `${min}:${sec}`;\r\n      this.time = Number(timing);\r\n\r\n      this.page();\r\n      this.createItemPuzzle();\r\n      this.basicGame();\r\n    } else {\r\n      this.count = 0;\r\n      let timing = 0;\r\n\r\n      let min = Math.floor(Number(timing) / 60);\r\n      let sec = Math.floor(Number(timing) % 60);\r\n      if (min < 10) {\r\n        min = `0${min}`;\r\n      } else {\r\n        min = `${min}`;\r\n      }\r\n      if (sec < 10) {\r\n        sec = `0${sec}`;\r\n      } else {\r\n        sec = `${sec}`;\r\n      }\r\n      this.timer__value = `${min}:${sec}`;\r\n      this.time = Number(timing);\r\n\r\n      this.page();\r\n      this.createItemPuzzle();\r\n\r\n      const button1 = document.querySelectorAll('.app__button')[0];\r\n      const button2 = document.querySelectorAll('.app__button')[1];\r\n      button1.disabled = true;\r\n      button2.disabled = false;\r\n\r\n      this.startTimer();\r\n      this.startGame();\r\n    }\r\n\r\n    if (storagePuzzle) {\r\n      this.matrix = storagePuzzle;\r\n      this.setPositionArray(this.matrix);\r\n    }\r\n  }\r\n\r\n  startGame() {\r\n    let matrix = this.basicGame();\r\n    this.createGame(matrix);\r\n\r\n    this.clickPuzzles(true);\r\n    this.dragAndDrop(true);\r\n  }\r\n\r\n  basicGame() {\r\n    this.node = Array.from(this.puzzles.querySelectorAll('.app__puzzles-item'));\r\n    let matrix = this.getArray(this.node.map((item) => Number(item.dataset.id)));\r\n    this.setPositionArray(matrix);\r\n    this.node[Math.pow(this.size, 2) - 1].style.opacity = '0';\r\n    this.node[Math.pow(this.size, 2) - 1].style.cursor = 'auto';\r\n    return matrix;\r\n  }\r\n\r\n  changeGame() {\r\n    this.setLocalStorage('sizes', this.size);\r\n    this.clearGame();\r\n    this.puzzles.innerHTML = '';\r\n    this.createItemPuzzle();\r\n    this.basicGame();\r\n    this.clickPuzzles(false);\r\n    this.dragAndDrop(false);\r\n  }\r\n\r\n  clearGame() {\r\n    this.deleteLocalStorage('puzzles');\r\n    this.deleteLocalStorage('steps');\r\n    this.deleteLocalStorage('time');\r\n    this.moves__value.textContent = '0';\r\n    this.count = 0;\r\n    this.timer__value.textContent = '00:00';\r\n    this.time = 0;\r\n    clearInterval(this.interval);\r\n    this.matrix = null;\r\n  }\r\n\r\n  createGame(matrix) {\r\n    const shuffledArray = this.shuffleArray(matrix.flat());\r\n    this.matrix = this.getArray(shuffledArray);\r\n    this.setPositionArray(this.matrix);\r\n  }\r\n\r\n  // GET AN ARRAY LINE BY LINE\r\n  getArray(arr) {\r\n    let matrix;\r\n    if (this.size === 3) {\r\n      matrix = [[], [], []];\r\n    } else if (this.size === 5) {\r\n      matrix = [[], [], [], [], []];\r\n    } else if (this.size === 6) {\r\n      matrix = [[], [], [], [], [], []];\r\n    } else if (this.size === 7) {\r\n      matrix = [[], [], [], [], [], [], []];\r\n    } else if (this.size === 8) {\r\n      matrix = [[], [], [], [], [], [], [], []];\r\n    } else {\r\n      matrix = [[], [], [], []];\r\n    }\r\n\r\n    let x = 0;\r\n    let y = 0;\r\n\r\n    for (let i = 0; i < arr.length; i++) {\r\n      if (this.size <= x) {\r\n        x = 0;\r\n        y++;\r\n      }\r\n      matrix[y][x] = arr[i];\r\n      x++;\r\n    }\r\n    return matrix;\r\n  }\r\n\r\n  // SET POSITION PUZZLES ANIMATION\r\n  setPositionArray(arr) {\r\n    for (let y = 0; y < arr.length; y++) {\r\n      for (let x = 0; x < arr[y].length; x++) {\r\n        this.node[arr[y][x] - 1].style.transform = `translate3D(${x * 100}%,${y * 100}%,0)`;\r\n      }\r\n    }\r\n  }\r\n\r\n  // RANDOM PUZZLES\r\n  shuffleArray(arr) {\r\n    if (this.size === 3 || this.size === 5 || this.size === 7) {\r\n      const massiv = arr.map((x) => x).sort(() => Math.random() - 0.5);\r\n\r\n      let newMassiv = [...massiv];\r\n      let index = newMassiv.indexOf(Math.pow(this.size, 2));\r\n      if (index >= 0) {\r\n        newMassiv.splice(index, 1);\r\n      }\r\n\r\n      let invers = 0;\r\n      for (let i = 0; i < newMassiv.length; i++) {\r\n        for (let j = i - 1; j >= 0; j--) {\r\n          if (newMassiv[j] > newMassiv[i]) {\r\n            invers++;\r\n          }\r\n        }\r\n      }\r\n\r\n      if (invers % 2 === 0) {\r\n        return massiv;\r\n      }\r\n\r\n      return this.shuffleArray(massiv);\r\n    } else {\r\n      let massiv = [];\r\n      for (let i = 0; i < this.size; i++) {\r\n        massiv[i] = arr.splice(0, this.size);\r\n      }\r\n\r\n      for (let i = 0; i < massiv.length; i++) {\r\n        for (let j = 0; j < massiv[i].length; j++) {\r\n          let randOne = Math.floor(Math.random() * massiv.length);\r\n          let randTwo = Math.floor(Math.random() * massiv.length);\r\n\r\n          let temp = massiv[i][j];\r\n          massiv[i][j] = massiv[randOne][randTwo];\r\n          massiv[randOne][randTwo] = temp;\r\n        }\r\n      }\r\n\r\n      let indexNull;\r\n      let newMassiv = [...massiv];\r\n\r\n      for (let i = 0; i < newMassiv.length; i++) {\r\n        let index = newMassiv[i].indexOf(Math.pow(this.size, 2));\r\n        if (index >= 0) {\r\n          indexNull = i;\r\n        }\r\n      }\r\n\r\n      newMassiv = newMassiv.flat();\r\n\r\n      let index = newMassiv.indexOf(Math.pow(this.size, 2));\r\n      if (index >= 0) {\r\n        newMassiv.splice(index, 1);\r\n      }\r\n\r\n      let invers = 0;\r\n      for (let i = 0; i < newMassiv.length; i++) {\r\n        for (let j = i - 1; j >= 0; j--) {\r\n          if (newMassiv[j] > newMassiv[i]) {\r\n            invers++;\r\n          }\r\n        }\r\n      }\r\n\r\n      invers += indexNull;\r\n      massiv = massiv.flat();\r\n\r\n      if (invers % 2 !== 0) {\r\n        return massiv;\r\n      }\r\n      return this.shuffleArray(massiv);\r\n    }\r\n  }\r\n\r\n  // DRAG AND DROP PUZZLES\r\n  dragAndDrop(isDrag) {\r\n    if (isDrag) {\r\n      this.puzzles.ondragstart = (event) => {\r\n        if (event.target.dataset.id !== `${Math.pow(this.size, 2)}`) {\r\n          this.drag = event;\r\n        } else {\r\n          this.drag = null;\r\n        }\r\n      };\r\n\r\n      this.puzzles.ondragover = (event) => {\r\n        event.preventDefault();\r\n      };\r\n\r\n      this.puzzles.ondrop = (event) => {\r\n        if (event.target.dataset.id === `${Math.pow(this.size, 2)}` && this.drag !== null) {\r\n          this.swapPuzzle(this.drag);\r\n          this.swapCheck();\r\n        }\r\n      };\r\n    } else {\r\n      this.puzzles.ondragover = (event) => {\r\n        event.preventDefault();\r\n      };\r\n\r\n      this.puzzles.ondrop = (event) => {\r\n        return;\r\n      };\r\n    }\r\n  }\r\n\r\n  // CLICK\r\n  clickPuzzles(isClick) {\r\n    if (isClick) {\r\n      this.puzzles.onclick = (event) => {\r\n        if (!event.target.classList.contains('app__puzzles-item')) {\r\n          return;\r\n        }\r\n        if (event.target.dataset.id !== `${Math.pow(this.size, 2)}`) {\r\n          this.swapPuzzle(event);\r\n          this.swapCheck();\r\n        }\r\n      };\r\n    } else {\r\n      this.puzzles.onclick = (event) => {\r\n        if (!event.target.classList.contains('app__puzzles-item')) {\r\n          return;\r\n        }\r\n      };\r\n    }\r\n  }\r\n\r\n  // CHANGE SIZES PUZZLES\r\n  changeSizes(size) {\r\n    this.size = size;\r\n  }\r\n\r\n  // CREATE ITEM\r\n  createItem(nameClass, dom) {\r\n    const div = document.createElement('div');\r\n    div.classList.add(nameClass);\r\n    dom.appendChild(div);\r\n    return div;\r\n  }\r\n\r\n  // CREATE ITEM PUZZLE\r\n  createItemPuzzle() {\r\n    for (let i = 1; i < Math.pow(this.size, 2) + 1; i++) {\r\n      const div = document.createElement('div');\r\n      div.classList.add('app__puzzles-item');\r\n      div.setAttribute('style', `width: calc(100%/${this.size}); height:calc(100%/${this.size});`);\r\n      div.setAttribute('draggable', `true`);\r\n      div.dataset.id = `${i}`;\r\n      div.textContent = `${i}`;\r\n      this.puzzles.append(div);\r\n    }\r\n  }\r\n\r\n  // CREATE ITEM WITH TEXT\r\n  createItemText(nameClass, dom, text) {\r\n    const div = document.createElement('div');\r\n    div.classList.add(nameClass);\r\n    div.textContent = text;\r\n    dom.append(div);\r\n    return div;\r\n  }\r\n\r\n  // CREATE BUTTON\r\n  createButton(nameClass, dom, text) {\r\n    const button = document.createElement('button');\r\n    button.classList.add(nameClass);\r\n    button.textContent = text;\r\n    dom.append(button);\r\n    return button;\r\n  }\r\n\r\n  // EDIT BUTTON AFTER FINISH\r\n  editButton() {\r\n    const button1 = document.querySelectorAll('.app__button')[0];\r\n    const button2 = document.querySelectorAll('.app__button')[1];\r\n    const button4 = document.querySelectorAll('.app__button')[3];\r\n    button1.textContent = 'Shuffle and start';\r\n    button1.disabled = false;\r\n    button2.disabled = true;\r\n    button4.disabled = false;\r\n  }\r\n\r\n  // CREATE ELEMENTS\r\n  page() {\r\n    const app = this.createItem('app', document.body);\r\n\r\n    const app__container = this.createItem('app__container', app);\r\n\r\n    const app__buttons = this.createItem('app__buttons', app__container);\r\n    const btn__start = this.createButton('app__button', app__buttons, 'Shuffle and start');\r\n    const btn__stop = this.createButton('app__button', app__buttons, 'Stop');\r\n    const btn__save = this.createButton('app__button', app__buttons, 'Save');\r\n    const btn__result = this.createButton('app__button', app__buttons, 'Results');\r\n    const btn__sound = this.createButton('app__button', app__buttons, 'Sound off');\r\n\r\n    const setDisable = (btn, isDisabled) => {\r\n      btn.forEach((el) => {\r\n        el.disabled = isDisabled;\r\n      });\r\n    };\r\n    setDisable([btn__result, btn__stop, btn__save], true);\r\n\r\n    btn__start.addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n      if (btn__start.textContent === 'Shuffle and start' || btn__stop.textContent === 'Continue') {\r\n        this.clearGame();\r\n      }\r\n\r\n      if (this.time !== 0 && this.getLocalStorage('puzzles')) {\r\n        clearInterval(this.interval);\r\n        this.interval = null;\r\n        this.startTimer();\r\n        this.clickPuzzles(true);\r\n        this.dragAndDrop(true);\r\n      } else {\r\n        this.timer__value.textContent = '00:00';\r\n        this.time = 0;\r\n        this.startTimer();\r\n        this.startGame();\r\n      }\r\n\r\n      btn__stop.textContent = 'Stop';\r\n      setDisable([btn__stop], false);\r\n      setDisable([btn__start, btn__save, btn__result], true);\r\n    });\r\n\r\n    btn__stop.addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n      if (this.interval !== null) {\r\n        clearInterval(this.interval);\r\n        this.interval = null;\r\n        btn__start.textContent = 'Shuffle and start';\r\n        btn__stop.textContent = 'Continue';\r\n        setDisable([btn__start, btn__save, btn__result], false);\r\n        this.clickPuzzles(false);\r\n        this.dragAndDrop(false);\r\n      } else {\r\n        this.startTimer();\r\n        btn__stop.textContent = 'Stop';\r\n        setDisable([btn__start, btn__save, btn__result], true);\r\n        this.clickPuzzles(true);\r\n        this.dragAndDrop(true);\r\n      }\r\n    });\r\n\r\n    btn__save.addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n      this.modal(false);\r\n    });\r\n\r\n    btn__result.addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n      this.results();\r\n    });\r\n\r\n    btn__sound.addEventListener('click', (e) => {\r\n      e.stopPropagation();\r\n      if (this.playSound === false) {\r\n        btn__sound.textContent = 'Sound off';\r\n        this.playSound = true;\r\n      } else {\r\n        btn__sound.textContent = 'Sound';\r\n        this.playSound = false;\r\n      }\r\n    });\r\n\r\n    if (this.timer__value !== '00:00') {\r\n      btn__start.textContent = 'Start';\r\n    }\r\n\r\n    const app__timers = this.createItem('app__timers', app__container);\r\n    this.move = this.createItemText('app__move', app__timers, 'Moves:');\r\n    this.moves__value = this.createItemText('app__move-value', app__timers, `${this.count}`);\r\n    this.timer = this.createItemText('app__timer', app__timers, 'Time:');\r\n    this.timer__value = this.createItemText(\r\n      'app__timer-value',\r\n      app__timers,\r\n      `${this.timer__value}`,\r\n    );\r\n\r\n    this.puzzles = this.createItem('app__puzzles', app__container);\r\n\r\n    const app__fields = this.createItem('app__fields', app__container);\r\n    this.frame = this.createItemText('app__frame', app__fields, 'Frame size: ');\r\n    const frame__value = this.createItemText(\r\n      'app__frame-value',\r\n      app__fields,\r\n      `${this.size}X${this.size}`,\r\n    );\r\n\r\n    const app__sizes = this.createItem('app__sizes', app__container);\r\n    for (let i = 3; i < 9; i++) {\r\n      let button__sizes = this.createButton('app__size', app__sizes, `${i}X${i}`);\r\n\r\n      button__sizes.addEventListener('click', (event) => {\r\n        event.stopPropagation();\r\n        this.changeSizes(i);\r\n        btn__start.textContent = 'Shuffle and start';\r\n        setDisable([btn__result, btn__stop, btn__save], true);\r\n        setDisable([btn__start], false);\r\n        this.changeGame();\r\n        frame__value.textContent = `${this.size}x${this.size}`;\r\n      });\r\n    }\r\n  }\r\n\r\n  // RUN TIMER\r\n  startTimer() {\r\n    this.interval = setInterval(() => {\r\n      this.time++;\r\n      this.timer__value.textContent = `${this.getTime()}`;\r\n      this.setLocalStorage('time', `${this.time}`);\r\n    }, 1000);\r\n  }\r\n\r\n  // GET TIMER NOW\r\n  getTime() {\r\n    let time__now = this.time;\r\n\r\n    let minutes = Math.floor(time__now / 60);\r\n    if (minutes < 10) {\r\n      minutes = `0${minutes}`;\r\n    } else {\r\n      minutes = `${minutes}`;\r\n    }\r\n\r\n    let seconds = Math.floor(time__now % 60);\r\n    if (seconds < 10) {\r\n      seconds = `0${seconds}`;\r\n    } else {\r\n      seconds = `${seconds}`;\r\n    }\r\n\r\n    return `${minutes}:${seconds}`;\r\n  }\r\n\r\n  setLocalStorage(key, value) {\r\n    try {\r\n      localStorage.setItem(key, JSON.stringify(value));\r\n    } catch (error) {\r\n      console.error(error.message);\r\n    }\r\n  }\r\n\r\n  getLocalStorage(key) {\r\n    if (!localStorage.getItem(key)) {\r\n      return;\r\n    }\r\n\r\n    try {\r\n      return JSON.parse(localStorage.getItem(key));\r\n    } catch (error) {\r\n      console.error(error.message);\r\n    }\r\n  }\r\n\r\n  deleteLocalStorage(key) {\r\n    try {\r\n      localStorage.removeItem(key);\r\n    } catch (error) {\r\n      console.error(error.message);\r\n    }\r\n  }\r\n\r\n  // SWAP PUZZLES\r\n  swapPuzzle(event) {\r\n    const target = event.target;\r\n    const puzzleId = Number(target.dataset.id);\r\n    let puzzleCoordinate, nullCoordinate;\r\n\r\n    for (let y = 0; y < this.matrix.length; y++) {\r\n      for (let x = 0; x < this.matrix[y].length; x++) {\r\n        if (this.matrix[y][x] === puzzleId) {\r\n          puzzleCoordinate = { x, y };\r\n        } else if (this.matrix[y][x] === Math.pow(this.size, 2)) {\r\n          nullCoordinate = { x, y };\r\n        }\r\n      }\r\n    }\r\n    const coordX = Math.abs(puzzleCoordinate.x - nullCoordinate.x);\r\n    const coordY = Math.abs(puzzleCoordinate.y - nullCoordinate.y);\r\n    let isSwap = false;\r\n    if (\r\n      (coordX === 1 || coordY === 1) &&\r\n      (puzzleCoordinate.x === nullCoordinate.x || puzzleCoordinate.y === nullCoordinate.y)\r\n    ) {\r\n      isSwap = true;\r\n    }\r\n\r\n    if (isSwap) {\r\n      const oldNull = this.matrix[nullCoordinate.y][nullCoordinate.x];\r\n      this.matrix[nullCoordinate.y][nullCoordinate.x] =\r\n        this.matrix[puzzleCoordinate.y][puzzleCoordinate.x];\r\n      this.matrix[puzzleCoordinate.y][puzzleCoordinate.x] = oldNull;\r\n      this.stepCounter();\r\n      this.playAudio();\r\n      this.setPositionArray(this.matrix);\r\n    }\r\n\r\n    this.setLocalStorage('puzzles', this.matrix);\r\n  }\r\n\r\n  // SOUND AFTER CLICK PUZZLE\r\n  playAudio() {\r\n    if (this.playSound === true) {\r\n      let music = new Audio();\r\n      music.pause();\r\n      music = new Audio(_assets_audio_sound_mp3__WEBPACK_IMPORTED_MODULE_0__);\r\n      music.volume = 0.02;\r\n      music.play();\r\n    }\r\n  }\r\n\r\n  // ADD COUNT MOVES\r\n  stepCounter() {\r\n    const move__value = document.querySelector('.app__move-value');\r\n    this.count += 1;\r\n    this.setLocalStorage('steps', this.count);\r\n    move__value.textContent = this.count;\r\n  }\r\n\r\n  // CHECK WIN\r\n  swapCheck() {\r\n    const winArray = new Array(Math.pow(this.size, 2)).fill(0).map((__, i) => i + 1);\r\n\r\n    const arr = this.matrix.flat();\r\n    let isWin = true;\r\n    for (let i = 0; i < winArray.length; i++) {\r\n      if (winArray[i] !== arr[i]) {\r\n        isWin = false;\r\n      }\r\n    }\r\n\r\n    if (isWin) {\r\n      this.puzzles.onclick = (event) => {\r\n        if (!event.target.classList.contains('app__puzzles-item')) {\r\n          return;\r\n        }\r\n      };\r\n      this.finishGame();\r\n      this.editButton();\r\n      clearInterval(this.interval);\r\n    }\r\n  }\r\n\r\n  // MODAL SAVE GAME\r\n  modal(win) {\r\n    document.body.style.overflow = 'hidden';\r\n    const overlay = document.createElement('div');\r\n    overlay.classList.add('app__overlay');\r\n    document.body.append(overlay);\r\n\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('app__modal');\r\n    overlay.append(modal);\r\n\r\n    const modal__text = document.createElement('div');\r\n    modal__text.classList.add('app__modal-content');\r\n    modal.append(modal__text);\r\n\r\n    const title = document.createElement('h2');\r\n    title.textContent = 'Save the result?';\r\n    modal__text.append(title);\r\n\r\n    const descr__move = document.createElement('p');\r\n    descr__move.classList.add('app__modal-descr');\r\n    descr__move.innerHTML = `Moves: <b>${this.count}</b>`;\r\n    modal__text.append(descr__move);\r\n\r\n    const descr__time = document.createElement('p');\r\n    descr__time.classList.add('app__modal-descr');\r\n    descr__time.innerHTML = `Time: <b>${this.timer__value.textContent}</b>`;\r\n    modal__text.append(descr__time);\r\n\r\n    const app__form = document.createElement('form');\r\n    const app__form_input = document.createElement('div');\r\n    app__form_input.classList.add('app__form-input');\r\n\r\n    const app__form_label = document.createElement('label');\r\n    app__form_label.classList.add('form__label');\r\n    app__form_label.for = 'name';\r\n    app__form_label.textContent = 'NickName: ';\r\n    app__form_input.append(app__form_label);\r\n\r\n    const app__form_input_name = document.createElement('input');\r\n    app__form_input_name.classList.add('form__input');\r\n    app__form_input_name.id = 'name';\r\n    app__form_input_name.type = 'text';\r\n    app__form_input_name.name = 'nickname';\r\n    app__form_input_name.required = true;\r\n    app__form_input.append(app__form_input_name);\r\n\r\n    app__form.append(app__form_input);\r\n\r\n    const app__form_buttons = document.createElement('div');\r\n    app__form_buttons.classList.add('app__form-buttons');\r\n\r\n    const app__save_button = document.createElement('button');\r\n    app__save_button.classList.add('app__form-button');\r\n    app__save_button.type = 'Submit';\r\n    app__save_button.textContent = 'Save';\r\n    app__form_buttons.append(app__save_button);\r\n\r\n    const app__close_button = document.createElement('button');\r\n    app__close_button.classList.add('app__form-button');\r\n    app__close_button.textContent = 'Close';\r\n    app__form_buttons.append(app__close_button);\r\n\r\n    app__form.append(app__form_buttons);\r\n\r\n    app__form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      document.body.style.overflow = '';\r\n      this.addResult(app__form_input_name.value, win);\r\n      modal.remove();\r\n      overlay.remove();\r\n    });\r\n\r\n    app__close_button.addEventListener('click', () => {\r\n      document.body.style.overflow = '';\r\n      modal.remove();\r\n      overlay.remove();\r\n    });\r\n\r\n    modal__text.append(app__form);\r\n  }\r\n\r\n  // FUNCTION ADD RESULT\r\n  addResult(nickname, win) {\r\n    const res = { nickname, win, moves: this.count, time: this.timer__value.textContent };\r\n    if (this.res[`${this.size}X${this.size}`]) {\r\n      this.res[`${this.size}X${this.size}`].push(res);\r\n      this.res[`${this.size}X${this.size}`].sort((res1, res2) => res1.time - res2.time);\r\n    } else {\r\n      this.res[`${this.size}X${this.size}`] = [res];\r\n    }\r\n    this.setLocalStorage('results', this.res);\r\n    if (win === true) {\r\n      this.deleteLocalStorage('steps');\r\n      this.deleteLocalStorage('time');\r\n    }\r\n  }\r\n\r\n  // MODAL RESULTS\r\n  results() {\r\n    document.body.style.overflow = 'hidden';\r\n\r\n    const overlay = document.createElement('div');\r\n    overlay.classList.add('app__overlay');\r\n    document.body.append(overlay);\r\n\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('app__modal');\r\n    overlay.append(modal);\r\n\r\n    const modal__text = document.createElement('div');\r\n    modal__text.classList.add('app__modal-content');\r\n    modal__text.classList.add('table');\r\n    modal.append(modal__text);\r\n\r\n    const title = document.createElement('h2');\r\n    title.textContent = 'Results';\r\n    title.style.marginBottom = '20px';\r\n    modal__text.append(title);\r\n\r\n    const subTitle = document.createElement('h3');\r\n    subTitle.textContent = '3X3';\r\n    subTitle.style.marginBottom = '20px';\r\n    if (this.getLocalStorage('results')) {\r\n      modal__text.append(subTitle);\r\n    }\r\n\r\n    const table = document.createElement('div');\r\n\r\n    const tableCreate = (size) => {\r\n      table.innerHTML = '';\r\n      if (this.getLocalStorage('results')) {\r\n        if (this.res[`${size}X${size}`]) {\r\n          const array = this.res[`${size}X${size}`].slice(0, 10);\r\n\r\n          const tb = document.createElement('table');\r\n          tb.classList.add('app__table');\r\n\r\n          const tbody = document.createElement('tbody');\r\n          tbody.classList.add('app__table-tbody');\r\n          tb.append(tbody);\r\n\r\n          const tr = document.createElement('tr');\r\n          tr.classList.add('app__table-tr');\r\n          tbody.append(tr);\r\n\r\n          ['Name', 'Moves', 'Time', 'isWin'].forEach((element) => {\r\n            const td = document.createElement('td');\r\n            td.classList.add('app__table-td');\r\n            td.textContent = `${element}`;\r\n            tr.append(td);\r\n          });\r\n\r\n          array.forEach((item) => {\r\n            const trResults = document.createElement('tr');\r\n            trResults.classList.add('app__table-tr');\r\n\r\n            const name = document.createElement('td');\r\n            name.classList.add('app__table-td');\r\n            name.textContent = item.nickname;\r\n            trResults.append(name);\r\n\r\n            const moves = document.createElement('td');\r\n            moves.classList.add('app__table-td');\r\n            moves.textContent = item.moves;\r\n            trResults.append(moves);\r\n\r\n            const time = document.createElement('td');\r\n            time.classList.add('app__table-td');\r\n            time.textContent = item.time;\r\n            trResults.append(time);\r\n\r\n            const win = document.createElement('td');\r\n            win.classList.add('app__table-td');\r\n            win.textContent = item.win ? 'Yes' : 'No';\r\n\r\n            trResults.append(win);\r\n\r\n            tbody.append(trResults);\r\n          });\r\n          table.append(tb);\r\n        } else {\r\n          table.innerHTML = 'No results';\r\n        }\r\n      } else {\r\n        table.innerHTML = 'No results';\r\n      }\r\n    };\r\n\r\n    tableCreate(3);\r\n    modal__text.append(table);\r\n\r\n    if (this.getLocalStorage('results')) {\r\n      const sizes = document.createElement('div');\r\n      sizes.classList.add('app__form-buttons');\r\n      for (let i = 3; i < 9; i++) {\r\n        const button = document.createElement('button');\r\n        button.classList.add('app__form-button');\r\n        button.addEventListener('click', (event) => {\r\n          event.stopPropagation();\r\n          subTitle.textContent = `${i}X${i}`;\r\n          tableCreate(i);\r\n        });\r\n        button.textContent = `${i}X${i}`;\r\n        sizes.append(button);\r\n      }\r\n      modal__text.append(sizes);\r\n    }\r\n\r\n    const app__button = document.createElement('div');\r\n    app__button.classList.add('app__form-buttons');\r\n    modal__text.append(app__button);\r\n\r\n    const app__close_button = document.createElement('button');\r\n    app__close_button.classList.add('app__form-button');\r\n    app__close_button.textContent = 'Close';\r\n    app__close_button.addEventListener('click', () => {\r\n      document.body.style.overflow = '';\r\n      modal.remove();\r\n      overlay.remove();\r\n    });\r\n    app__button.append(app__close_button);\r\n  }\r\n\r\n  // MODAL FINISH GAME\r\n  finishGame() {\r\n    this.clickPuzzles(false);\r\n    this.dragAndDrop(false);\r\n    document.body.style.overflow = 'hidden';\r\n    const overlay = document.createElement('div');\r\n    overlay.classList.add('app__overlay');\r\n    document.body.append(overlay);\r\n\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('app__modal');\r\n    overlay.append(modal);\r\n\r\n    const modal__text = document.createElement('div');\r\n    modal__text.classList.add('app__modal-content');\r\n    modal.append(modal__text);\r\n\r\n    const title = document.createElement('h2');\r\n    title.textContent = 'End game';\r\n    modal__text.append(title);\r\n\r\n    const descr__one = document.createElement('p');\r\n    descr__one.classList.add('app__modal-descr');\r\n    descr__one.innerHTML = `Hooray! You solved the puzzle in <b>${this.timer__value.textContent}</b> and <b>${this.count}</b> moves!`;\r\n    modal__text.append(descr__one);\r\n\r\n    const descr__two = document.createElement('p');\r\n    descr__two.classList.add('app__modal-descr');\r\n    descr__two.innerHTML = 'Do you want to save your result?';\r\n    modal__text.append(descr__two);\r\n\r\n    const app__buttons = document.createElement('div');\r\n    app__buttons.classList.add('app__form-buttons');\r\n\r\n    const app__save_button = document.createElement('button');\r\n    app__save_button.classList.add('app__form-button');\r\n    app__save_button.type = 'Submit';\r\n    app__save_button.textContent = 'Yes';\r\n    app__buttons.append(app__save_button);\r\n\r\n    const app__close_button = document.createElement('button');\r\n    app__close_button.classList.add('app__form-button');\r\n    app__close_button.textContent = 'No';\r\n    app__buttons.append(app__close_button);\r\n\r\n    modal__text.append(app__buttons);\r\n\r\n    app__save_button.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      document.body.style.overflow = '';\r\n      this.modal(true);\r\n      modal.remove();\r\n      overlay.remove();\r\n    });\r\n\r\n    app__close_button.addEventListener('click', () => {\r\n      document.body.style.overflow = '';\r\n      modal.remove();\r\n      overlay.remove();\r\n    });\r\n    this.deleteLocalStorage('puzzles');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://codejam/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizes */ \"./src/sizes.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\n\r\nconst sizes = new _sizes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](sizes.size);\r\ngame.initGame();\r\n\n\n//# sourceURL=webpack://codejam/./src/index.js?");

/***/ }),

/***/ "./src/sizes.js":
/*!**********************!*\
  !*** ./src/sizes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sizes)\n/* harmony export */ });\nclass Sizes {\r\n  constructor() {\r\n    this.getSize();\r\n    this.size;\r\n  }\r\n\r\n  getSize() {\r\n    if (localStorage.getItem('sizes') === null) {\r\n      localStorage.setItem('sizes', JSON.stringify(4));\r\n    }\r\n\r\n    this.size = localStorage.getItem('sizes');\r\n    return this.size;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://codejam/./src/sizes.js?");

/***/ }),

/***/ "./src/assets/audio/sound.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/sound.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"audio/sound.mp3\";\n\n//# sourceURL=webpack://codejam/./src/assets/audio/sound.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("23d1f63517d76c840b0b")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "codejam:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecodejam"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;