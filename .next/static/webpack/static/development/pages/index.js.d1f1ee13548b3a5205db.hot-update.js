webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
var _jsxFileName = "/Users/joshworley/code/joshua-worley-next/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import menuItems from '../data/menuItems'

var listStyle = {
  margin: '0',
  padding: '0'
};
var listItemStyle = {
  listStyle: 'none',
  padding: '6px 0'
};
var linkStyle = {
  textDecoration: 'none',
  color: 'text'
};
var menuItems = [{
  link: '/',
  name: 'About'
}, {
  link: '/resume',
  name: 'Resume'
}, {
  link: '#',
  name: 'Portfolio',
  children: [{
    link: '/portfolio/websites',
    name: 'Websites'
  }, {
    link: '/portfolio/ui',
    name: 'UI'
  }, {
    link: '/portfolio/photography',
    name: 'Photography'
  }, {
    link: '/Video',
    name: 'video'
  }]
}, {
  link: '/blog',
  name: 'Blog'
}, {
  link: '/contact',
  name: 'Contact'
}];

var getSingleMenuItem = function getSingleMenuItem(menuItem) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: menuItem.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, menuItem.name));
};

var getMenuChildren = function getMenuChildren(menuChildren) {
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, menuChildren.map(function (childItem) {
    return __jsx("li", {
      key: childItem.name,
      style: listItemStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: childItem.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, childItem.name)));
  }));
};

var Header = function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    sx: {
      color: 'text'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Joshua Worley"), __jsx("ul", {
    style: listStyle,
    className: "menu-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, menuItems.map(function (menuItem) {
    return __jsx("li", {
      key: menuItem.name,
      style: listItemStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, menuItem.children ? getMenuChildren(menuItem.children) : getSingleMenuItem(menuItem));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.d1f1ee13548b3a5205db.hot-update.js.map