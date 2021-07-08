/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateproject02"]("main",{

/***/ "./src/modules/validInput.js":
/*!***********************************!*\
  !*** ./src/modules/validInput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validInput = function validInput() {\n  var inputsForCalc = document.querySelectorAll('.calc-item');\n\n  function correctForm(str) {\n    return str.replace(/\\s+/g, ' ').replace(/^\\s*/, '').replace(/\\s*$/, '');\n  }\n\n  function capitalize(str) {\n    return str.replace(/(^|\\s)\\S/g, function (a) {\n      return a.toUpperCase();\n    });\n  }\n\n  ;\n  document.addEventListener('input', function () {\n    if (event.target.matches('.form-name') || event.target.matches('#form2-name')) {\n      event.target.value = event.target.value.replace(/[^А-Яа-яЁё\\ '']/g, '').toLowerCase();\n    } else if (event.target.matches('.form-email')) {\n      event.target.value = event.target.value.replace(/([^A-Za-z0-9\\- _ @ . ! ~ * '])/g, '');\n    } else if (event.target.matches('.form-phone')) {\n      // event.target.value = event.target.value.replace (/[^0-9\\+ ]/g, '');\n      event.target.value = /^\\+[38]([-()]*\\d)$/;\n    } else if (event.target.matches('.mess')) {\n      event.target.value = event.target.value.replace(/[^?!,.а-яА-ЯёЁ0-9\\s]+$/g, '');\n    }\n  });\n  document.addEventListener('blur', function () {\n    if (event.target.matches('.form-name') || event.target.matches('#form2-name')) {\n      event.target.value = correctForm(event.target.value);\n      event.target.value = capitalize(event.target.value);\n    } else if (event.target.matches('.form-email') || event.target.matches('.form-phone') || event.target.matches('.mess')) {\n      event.target.value = correctForm(event.target.value);\n    }\n  }, true);\n  inputsForCalc.forEach(function (elem) {\n    if (elem.matches('.calc-day') || elem.matches('.calc-square') || elem.matches('.calc-count')) {\n      elem.addEventListener('input', function () {\n        elem.value = elem.value.replace(/\\D/g, '');\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validInput);\n\n//# sourceURL=webpack://project02/./src/modules/validInput.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1228ced84ab2284a2c4c")
/******/ })();
/******/ 
/******/ }
);