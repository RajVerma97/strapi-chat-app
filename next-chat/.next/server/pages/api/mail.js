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
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        secure: \"true\",\n        auth: {\n            user: \"example@gmail.com\",\n            pass: \"password\"\n        }\n    });\n    const mailData = {\n        from: \"Chat API\",\n        to: req.body.email,\n        subject: `Verify your email`,\n        text: req.body.message\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) {\n            console.log(err);\n            return res.status(500).json({\n                message: `an error occurred ${err}`\n            });\n        }\n        res.status(200).json({\n            message: info\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLE1BQU1DLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBRXhDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDN0NDLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRTtZQUNKQyxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCQyxJQUFJLEVBQUUsVUFBVTtTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNQyxRQUFRLEdBQUc7UUFDZkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLEVBQUUsRUFBRWQsR0FBRyxDQUFDZSxJQUFJLENBQUNDLEtBQUs7UUFDbEJDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzVCQyxJQUFJLEVBQUVsQixHQUFHLENBQUNlLElBQUksQ0FBQ0ksT0FBTztLQUN2QjtJQUNEZixXQUFXLENBQUNnQixRQUFRLENBQUNSLFFBQVEsRUFBRSxTQUFVUyxHQUFHLEVBQUVDLElBQUksRUFBRTtRQUNsRCxJQUFJRCxHQUFHLEVBQUU7WUFDUEUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU9wQixHQUFHLENBQUN3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVAsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUVFLEdBQUcsQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0RwQixHQUFHLENBQUN3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFUCxPQUFPLEVBQUVHLElBQUk7U0FBRSxDQUFDLENBQUM7S0FDekMsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNoYXQvLi9wYWdlcy9hcGkvbWFpbC5qcz83ZDE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCBub2RlbWFpbGVyID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7XG5cbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgcG9ydDogNDY1LFxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IFwiZXhhbXBsZUBnbWFpbC5jb21cIixcbiAgICAgIHBhc3M6IFwicGFzc3dvcmRcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBtYWlsRGF0YSA9IHtcbiAgICBmcm9tOiBcIkNoYXQgQVBJXCIsXG4gICAgdG86IHJlcS5ib2R5LmVtYWlsLFxuICAgIHN1YmplY3Q6IGBWZXJpZnkgeW91ciBlbWFpbGAsXG4gICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSxcbiAgfTtcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogYGFuIGVycm9yIG9jY3VycmVkICR7ZXJyfWAgfSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogaW5mbyB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibm9kZW1haWxlciIsInJlcXVpcmUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwibWFpbERhdGEiLCJmcm9tIiwidG8iLCJib2R5IiwiZW1haWwiLCJzdWJqZWN0IiwidGV4dCIsIm1lc3NhZ2UiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();