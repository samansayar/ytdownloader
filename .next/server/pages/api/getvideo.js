"use strict";
(() => {
var exports = {};
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 6792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetVideo": () => (/* binding */ GetVideo),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function GetVideo() {
    const response = await fetch(`https://rasmlink.ir/api-v1/hls_files`, {
        headers: {
            "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
        }
    });
    const result = await response.json();
    return result;
}
async function handler(req, res) {
    const jsonData = await GetVideo();
    res.status(200).json(jsonData);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6792));
module.exports = __webpack_exports__;

})();