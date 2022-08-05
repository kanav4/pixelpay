exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 1819:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": "faceCard_cardContainer__Z_54x",
	"cardImg": "faceCard_cardImg__0yWGv",
	"cardImgGrad": "faceCard_cardImgGrad__Y5DqX",
	"names": "faceCard_names__UengN"
};


/***/ }),

/***/ 7545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FaceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _faceCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1819);
/* harmony import */ var _faceCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_faceCard_module_css__WEBPACK_IMPORTED_MODULE_3__);




function FaceCard({ name , des , person  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_faceCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_faceCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardImgGrad),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_faceCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardImg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: "our person image",
                        src: person,
                        width: 210,
                        height: 210
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_faceCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().names),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: des
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;