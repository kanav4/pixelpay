exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 6651:
/***/ ((module) => {

// Exports
module.exports = {
	"HeroBanner": "HeroBanner_HeroBanner__qb2H9",
	"bannerWrap": "HeroBanner_bannerWrap__jFFj2",
	"HeroText": "HeroBanner_HeroText__D11kr",
	"HeroImage": "HeroBanner_HeroImage__QYNoQ",
	"image": "HeroBanner_image__F5VXv"
};


/***/ }),

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6651);
/* harmony import */ var _HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3__);




function HeroBanner({ HeroHeading , HeroText , HeroImage  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().HeroBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerWrap),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().HeroText),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: HeroHeading
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: HeroText
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().HeroImage),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: HeroImage,
                        className: (_HeroBanner_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
                        // width={100} height={100} 
                        layout: "fill",
                        alt: "bannerHero Image"
                    })
                })
            ]
        })
    });
};


/***/ })

};
;