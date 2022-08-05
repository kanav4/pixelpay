exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 7458:
/***/ ((module) => {

// Exports
module.exports = {
	"bgFooter": "Contact_bgFooter__tF7PD",
	"trFlex": "Contact_trFlex__he0zb",
	"flexitem1": "Contact_flexitem1__mF1qd",
	"flexitem2": "Contact_flexitem2__rzyzo",
	"h1": "Contact_h1__ZDDX1",
	"p": "Contact_p__QFdf1",
	"input": "Contact_input__OLJbB",
	"textarea": "Contact_textarea__GZy8H",
	"item2": "Contact_item2__d942W",
	"button": "Contact_button__aLkCd"
};


/***/ }),

/***/ 6695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7458);
/* harmony import */ var _Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__);






function Contact() {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const scriptURL = "https://script.google.com/macros/s/AKfycbxK7sIXAMLCMF9Rw5H5oCUpZar0GRnrYrzbFflAiZt0ygyg0o_HDG47RAORir4cikfT/exec";
        const form = document.forms["google-sht"];
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            fetch(scriptURL, {
                method: "POST",
                body: new FormData(form)
            }).then((response)=>alert("Thanks for Contacting us..! We Will Contact You Soon...")).catch((error)=>console.error("Error!", error.message));
        });
    }, []);
    const recaptchaRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contactDown",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().trFlex),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexitem1),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sectionHeader",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sectionName",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Get in Touch"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "sectionTitle",
                                    children: "Want to Scale Your Business? Just Drop Us a Line."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: " We understand that running a business is hard enough, let alone trying to find the time (and budget) to focus on marketing. That\u2019s where we come in."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "At Pixel Pay, we use the latest digital marketing techniques to help businesses like yours grow. Whether you\u2019re looking for more website visitors, more customers or both, we can help."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    method: "post",
                    // onSubmit={(e) => handleClick(e)}
                    autoComplete: "off",
                    name: "google-sht",
                    className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().flexitem2),
                    onSubmit: ()=>{
                        recaptchaRef.current.execute();
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                            ref: recaptchaRef,
                            size: "invisible",
                            sitekey: "Your client site key"
                        }),
                        ",",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "Name",
                                placeholder: "Name",
                                className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                                type: "text",
                                required: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().item2),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "Mobile",
                                    placeholder: "Mobile",
                                    className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                                    type: "text",
                                    pattern: "[789][0-9]{9}",
                                    required: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "Email",
                                    placeholder: "Email",
                                    className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                                    type: "text",
                                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().w100),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                name: "Message",
                                placeholder: "Message",
                                className: (_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().textarea),
                                rows: 6,
                                minLength: 10,
                                required: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "submit",
                            className: "btn-purple",
                            children: [
                                "Contact Us",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsArrowRight, {
                                        color: "white"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;