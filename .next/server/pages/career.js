(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 6103:
/***/ ((module) => {

// Exports
module.exports = {
	"trFlex2": "Application_trFlex2__tsmiO",
	"item3container": "Application_item3container__9OCb2",
	"messageUs": "Application_messageUs__lV_mf",
	"h2": "Application_h2__RRSq0",
	"item1container": "Application_item1container__NBERZ",
	"item4container": "Application_item4container__hRrMk",
	"item5container": "Application_item5container__aMumb",
	"w100": "Application_w100__jogg_",
	"item1": "Application_item1__42Ow_",
	"item2": "Application_item2__YUfRy",
	"input": "Application_input__oPEvv",
	"textarea": "Application_textarea__pDbTc",
	"button": "Application_button__xzk7_",
	"button1": "Application_button1__XXK9n"
};


/***/ }),

/***/ 683:
/***/ ((module) => {

// Exports
module.exports = {
	"JobCard": "JobCard_JobCard__m0Wlu",
	"JobCardActive": "JobCard_JobCardActive__AVPLf",
	"jcRole": "JobCard_jcRole__qND2M",
	"jcExpereince": "JobCard_jcExpereince__0BaB_",
	"jcWrap": "JobCard_jcWrap__Rh___",
	"jcContent": "JobCard_jcContent__Buz4A",
	"jcContentWrap": "JobCard_jcContentWrap__GntOj",
	"jcHead": "JobCard_jcHead__Jpvi7",
	"jcOpening": "JobCard_jcOpening__EGVRq",
	"applyBtn": "JobCard_applyBtn__GZgwG"
};


/***/ }),

/***/ 7987:
/***/ ((module) => {

// Exports
module.exports = {
	"jdWrap": "JobDesc_jdWrap__O1sdE",
	"jobHeading": "JobDesc_jobHeading__tYceh",
	"jobDesc": "JobDesc_jobDesc__soe20",
	"applyNow": "JobDesc_applyNow__9yC9p",
	"jobShare": "JobDesc_jobShare__NUyW1"
};


/***/ }),

/***/ 1572:
/***/ ((module) => {

// Exports
module.exports = {
	"joWrap": "JobOpening_joWrap__rF2sn",
	"currentOpenings": "JobOpening_currentOpenings__7_ejP"
};


/***/ }),

/***/ 5449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Career),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/footer/index.js
var footer = __webpack_require__(3333);
// EXTERNAL MODULE: ./components/header/header.js
var header = __webpack_require__(5314);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./components/Cards/JobCard/JobCard.module.css
var JobCard_module = __webpack_require__(683);
var JobCard_module_default = /*#__PURE__*/__webpack_require__.n(JobCard_module);
;// CONCATENATED MODULE: ./components/Cards/JobCard/JobCard.js





function JobCard({ ServIcon , active , item  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: active ? (JobCard_module_default()).JobCardActive : (JobCard_module_default()).JobCard,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (JobCard_module_default()).jcWrap,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (JobCard_module_default()).jcHead,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (JobCard_module_default()).jcIcon,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "jobcard",
                                src: "/Assets/video.png",
                                width: 60,
                                height: 60
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (JobCard_module_default()).jcOpening,
                            children: item.openings
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (JobCard_module_default()).jcContent,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (JobCard_module_default()).jcContentWrap,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (JobCard_module_default()).jcRole,
                                    children: item.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: (JobCard_module_default()).jcExpereince,
                                    children: [
                                        item.experience,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        item.jobType,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " Gurgaon"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#job_desc",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: (JobCard_module_default()).applyBtn,
                                children: [
                                    "Apply Now ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {})
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/JobOpening/JobOpening.module.css
var JobOpening_module = __webpack_require__(1572);
var JobOpening_module_default = /*#__PURE__*/__webpack_require__.n(JobOpening_module);
// EXTERNAL MODULE: ./components/JobDesc/JobDesc.module.css
var JobDesc_module = __webpack_require__(7987);
var JobDesc_module_default = /*#__PURE__*/__webpack_require__.n(JobDesc_module);
;// CONCATENATED MODULE: ./components/JobDesc/JobDesc.js



function JobDesc({ item  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (JobDesc_module_default()).jdWrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (JobDesc_module_default()).Description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sectionHeader textLeft",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sectionName",
                                id: "job_desc",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Job Description"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "sectionTitle ",
                                children: item.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (JobDesc_module_default()).jobDesc,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "About this Role"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: item.aboutRole
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "Key Resposibilties"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: item.keyRespo
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "Skills"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: item.skills
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "Educational qualification"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: item.eduQual
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "Experience"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: item.reqExperience
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "Who we are?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "We're a digital marketing company that prides itself on being different. We don't rely on a one-size-fits-all approach to marketing \u2013 instead, we create bespoke campaigns that are tailored to our clients' individual needs."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (JobDesc_module_default()).jobHeading,
                                children: "What makes Pixel Pay Media a great place to work?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Our team is our biggest asset. We have a group of highly talented and experienced professionals who are passionate about what they do. We're also a close-knit team, so there's a great sense of camaraderie among everyone who works here. We all work together to create the best possible campaigns for our clients, and we have a lot of fun doing it."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (JobDesc_module_default()).applyNow,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (JobDesc_module_default()).jobDesc,
                        children: "If you think you've got what it takes, then we'd love to hear from you. Send us your CV and a cover letter explaining why you want to work with us, and we'll take it from there."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "btn-purple",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Apply Now"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowRight, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/JobOpening/JobOpening.js




function JobOpening({ data , state , setState  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (JobOpening_module_default()).joWrap,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sectionHeader",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sectionName textCenter",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Current Job Openings"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "sectionTitle textCenter",
                                    children: "Explore Our Open Positions and Find the Perfect Fit for You"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (JobOpening_module_default()).currentOpenings,
                            children: data.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>setState(i),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                                        active: state === i,
                                        item: item
                                    })
                                }, i))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: data.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: state === i ? /*#__PURE__*/ jsx_runtime_.jsx(JobDesc, {
                            item: item
                        }) : null
                    }, i))
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/HeroBanner/HeroBanner.js
var HeroBanner = __webpack_require__(883);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./components/Application/Application.module.css
var Application_module = __webpack_require__(6103);
var Application_module_default = /*#__PURE__*/__webpack_require__.n(Application_module);
// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__(5623);
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);
;// CONCATENATED MODULE: ./components/Application/index.js






function Application() {
    const { 0: selectedFile , 1: setSelectedFile  } = (0,external_react_.useState)(null);
    const { 0: url , 1: setUrl  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const scriptURL = "https://script.google.com/macros/s/AKfycbzd8j-CM3-msoMJyrS6J7ucjd34gvmooSID2A99AxbQHPGiA2QZwG6Y4S7ykD1JNhM/exec";
        const form = document.forms["google-shit"];
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            fetch(scriptURL, {
                method: "POST",
                body: new FormData(form)
            }).then((response)=>alert("Thanks for Contacting us..! We Will Contact You Soon...")).catch((error)=>console.error("Error!", error.message));
        });
    }, []);
    const uploadDoc = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        let resp = await external_axios_default().post("https://mcusc4mgvi.execute-api.ap-south-1.amazonaws.com/production/v1/Services/SaveImage", formData);
        setUrl(resp.data.s3Url);
    };
    const recaptchaRef = /*#__PURE__*/ external_react_default().createRef();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Application_module_default()).messageUs,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sectionHeader",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Application_module_default()).h2,
                    children: "Apply Here"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (Application_module_default()).trFlex2,
                    method: "post",
                    autoComplete: "off",
                    name: "google-shit",
                    onSubmit: ()=>{
                        recaptchaRef.current.execute();
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                            ref: recaptchaRef,
                            size: "invisible",
                            sitekey: "Your client site key"
                        }),
                        ",",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Application_module_default()).item1container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Application_module_default()).item1,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "Name",
                                        placeholder: "Name",
                                        className: (Application_module_default()).input,
                                        type: "text",
                                        required: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Application_module_default()).item2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "Designation",
                                        placeholder: "Designation",
                                        className: (Application_module_default()).input,
                                        type: "text",
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Application_module_default()).item1container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Application_module_default()).item1,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "Mobile",
                                        placeholder: "Mobile",
                                        className: (Application_module_default()).input,
                                        type: "text",
                                        required: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Application_module_default()).item2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "Email",
                                        placeholder: "Email",
                                        className: (Application_module_default()).input,
                                        type: "text",
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Application_module_default()).item3container,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                name: "Message",
                                placeholder: "Your Cover Letter/Message",
                                className: (Application_module_default()).textarea,
                                rows: 5,
                                type: "text",
                                required: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "hidden",
                            value: url,
                            name: "Url"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Application_module_default()).item4container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    onChange: (event)=>setSelectedFile(event.target.files[0]),
                                    placeholder: "Name",
                                    className: (Application_module_default()).input,
                                    type: "file"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (Application_module_default()).button1,
                                    onClick: uploadDoc,
                                    children: "Upload File"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Application_module_default()).item5container,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: (Application_module_default()).button,
                                children: "Submit Application"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/career.js







function Career({ data  }) {
    const { 0: state , 1: setState  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeroBanner/* default */.Z, {
                HeroImage: "/Assets/get-started.png",
                HeroHeading: "Career",
                HeroText: " Be a Part of a Team That\u2019s Constantly Innovating and Pushing Boundaries."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(JobOpening, {
                data: data.jobs,
                state: state,
                setState: setState
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Application, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps() {
    const res = await fetch("https://mcusc4mgvi.execute-api.ap-south-1.amazonaws.com/production/v1/jobdescriptions");
    const data = await res.json();
    return {
        props: {
            data
        },
        revalidate: 600
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5623:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 924:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/im");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,385,883], () => (__webpack_exec__(5449)));
module.exports = __webpack_exports__;

})();