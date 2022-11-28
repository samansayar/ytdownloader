"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 2384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Input({ place , type ="text" , disabled =false , label ="input" , value ="" , onChange =(event)=>console.log("value::", event.target.value)  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex flex-col justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "text-sm text-slate-500",
                htmlFor: label,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "mt-2 py-3 px-5 rounded-lg bg-slate-100 text-sm transition duration-200 focus:bg-white dark:bg-slate-700 text-gray-800 placeholder:text-slate-400 border border-gray-200 focus:outline-none focus:ring-0",
                disabled: disabled,
                type: type,
                id: label,
                placeholder: place,
                value: value,
                onChange: onChange
            })
        ]
    });
}


/***/ }),

/***/ 2759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Switching)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Switching({ enabled , setEnabled , label  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            checked: enabled,
            onChange: setEnabled,
            className: `${enabled ? "bg-red-500" : "bg-gray-500"} relative inline-flex h-[24px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "sr-only",
                    children: label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-hidden": "true",
                    className: `${enabled ? "-translate-x-7" : "translate-x-0"} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layouts/admin/Navbar.js



function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full relative",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: " bg-white w-full border-gray-400 border-t z-30 relative flex justify-between items-center mx-auto pl-8 pr-14 py-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xl cursor-pointer font-medium text-red-600",
                            children: "Panel Admin"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden sm:block flex-shrink flex-grow-0 justify-start px-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "inline-block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "inline-flex items-center max-w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "flex items-center flex-grow-0 flex-shrink pl-2 relative border rounded-xl px-1",
                                type: "button",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full px-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "search",
                                            name: "search",
                                            id: "search",
                                            placeholder: "جستجو کنید....",
                                            className: "w-full rounded-md border-none focus:ring-0 focus:shadow-none bg-white py-2 focus:outline-none px-5 text-base text-gray-700 placeholder:text-gray-400 outline-none"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center justify-center relative mx-2 h-6 w-6 rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-5 text-gray-600 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "1.5",
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layouts/admin/Sidebar.js



function Sidebar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-2/12 h-screen hidden lg:flex flex-col bg-white px-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-6 divide-y-2 flex flex-col divide-gray-100",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/user/dashboard",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-3 px-4 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "capitalize mr-4 text-md",
                                    children: "افزودن لینک جدید"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/user/list",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-3 mt-1 px-4 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "capitalize mr-4 text-md",
                                    children: "لیست لینک ها"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/user/edit/2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-3 px-4 mt-1 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "capitalize mr-4 text-md",
                                    children: "ویرایش لینک"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layouts/admin/Header.js




function Header({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-100 dark:bg-slate-900 text-gray-800 min-h-screen w-full relative overflow-x-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "w-10/12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-4 px-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-xl font-medium",
                                    children: "لینک جدید"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "py-6 px-4 text-gray-800",
                                    children: children
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;