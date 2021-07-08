/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateproject02"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так... ',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся';\n  var form = document.getElementById('form1');\n  var footerForm = document.getElementById('form2');\n  var popupForm = document.getElementById('form3');\n  var formEmail = document.getElementById('form1-email');\n  var footerEmail = document.getElementById('form2-email');\n  var popupEmail = document.getElementById('form3-email');\n  var message = document.getElementById('form2-message');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  document.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    if (event.target.matches('form')) {\n      if (event.target.matches('#form1')) {\n        if (!formEmail.value) {\n          formEmail.style.border = 'solid red';\n          return;\n        } else {\n          formEmail.style.border = 'none';\n          form.appendChild(statusMessage);\n          statusMessage.textContent = loadMessage;\n        }\n      } else if (event.target.matches('#form2')) {\n        if (!footerEmail.value) {\n          footerEmail.style.border = 'solid red';\n          return;\n        } else if (!message.value) {\n          message.style.border = 'solid red';\n          return;\n        } else {\n          message.style.border = 'none';\n          footerEmail.style.border = 'none';\n          footerForm.appendChild(statusMessage);\n          statusMessage.textContent = loadMessage;\n        }\n      } else if (event.target.matches('#form3')) {\n        if (!popupEmail.value) {\n          popupEmail.style.border = 'solid red';\n          return;\n        } else {\n          popupForm.appendChild(statusMessage);\n          statusMessage.textContent = loadMessage;\n          popupEmail.style.border = 'none';\n          statusMessage.style.color = 'white';\n        }\n      }\n\n      statusMessage.textContent = loadMessage;\n\n      if (event.target.matches('form')) {\n        var formData = new FormData(event.target);\n        var body = {};\n        formData.forEach(function (value, key) {\n          body[key] = value;\n        });\n        postData(body).then(function () {\n          statusMessage.textContent = successMessage;\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          console.log(error);\n        });\n      }\n    }\n  });\n\n  var postData = function postData(body) {\n    return new Promise(function (resolve, reject) {\n      var request = new XMLHttpRequest();\n      request.addEventListener('readystatechange', function () {\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          resolve();\n          form.reset();\n          footerForm.reset();\n          popupForm.reset();\n        } else {\n          reject(request.status);\n          form.reset();\n          footerForm.reset();\n          popupForm.reset();\n        }\n      });\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      request.send(JSON.stringify(body));\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://project02/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c729ecdfb2a2289b5602")
/******/ })();
/******/ 
/******/ }
);